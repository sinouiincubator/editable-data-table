/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook } from '@testing-library/react-hooks';
import http from '@sinoui/http';
import { render, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import useEdititngList from '../useEditingList';
import 'jest-dom/extend-expect';

jest.mock('@sinoui/http');

afterEach(cleanup);

afterEach(() => {
  (http.get as jest.Mock).mockReset();
  (http.post as jest.Mock).mockReset();
  (http.put as jest.Mock).mockReset();
  (http.delete as jest.Mock).mockReset();
});

function renderDemo() {
  function Demo() {
    const { editingRows, items, add, remove } = useEdititngList<{
      id: string;
      userName: string;
    }>('/test');

    const handleAdd = () => {
      add();
    };

    const handleAddAtFirst = () => {
      add({}, 0);
    };

    return (
      <div>
        {editingRows.map((editing) => (
          <span data-testid="editing">{`${editing}`}</span>
        ))}
        {items.map((item: any, index: number) => (
          <div>
            <span data-testid="item">{item.userName}</span>
            <button type="button" onClick={() => remove(item, index)}>
              删除
            </button>
          </div>
        ))}

        <button type="button" onClick={handleAdd}>
          添加
        </button>

        <button type="button" onClick={handleAddAtFirst}>
          在开始位置添加
        </button>
      </div>
    );
  }

  return render(<Demo />);
}

it('使用useRestListApi获取数据', async () => {
  (http.get as jest.Mock).mockResolvedValue([{ id: '1', userName: '张三' }]);

  const { findAllByTestId } = renderDemo();

  const spans = await findAllByTestId('editing');
  expect(spans.length).toBe(1);
});

it('添加数据', async () => {
  (http.get as jest.Mock).mockResolvedValue([{ id: '1', userName: '张三' }]);

  const { findAllByTestId, getByText } = renderDemo();

  await findAllByTestId('item');
  fireEvent.click(getByText('添加'));

  const itemCount = (await findAllByTestId('item')).length;
  expect(itemCount).toBe(2);

  const editingStateElements = await findAllByTestId('editing');
  expect(editingStateElements.length).toBe(2);
  expect(editingStateElements[0]).toHaveTextContent('false');
  expect(editingStateElements[1]).toHaveTextContent('true');
});

it('在开始位置添加数据', async () => {
  (http.get as jest.Mock).mockResolvedValue([{ id: '1', userName: '张三' }]);

  const { findAllByTestId, getByText } = renderDemo();

  await findAllByTestId('item');
  fireEvent.click(getByText('在开始位置添加'));

  const itemCount = (await findAllByTestId('item')).length;
  expect(itemCount).toBe(2);

  const editingStateElements = await findAllByTestId('editing');
  expect(editingStateElements.length).toBe(2);
  expect(editingStateElements[0]).toHaveTextContent('true');
  expect(editingStateElements[1]).toHaveTextContent('false');
});

it('删除数据空数据', async () => {
  (http.get as jest.Mock).mockResolvedValue([{ id: '1', userName: '张三' }]);

  const { result, waitForNextUpdate } = renderHook(() =>
    useEdititngList('/test'),
  );

  await waitForNextUpdate();

  result.current.add();
  result.current.remove({}, 1);
  expect(http.delete).toHaveBeenCalledTimes(0);
  expect(result.current.items.length).toBe(1);
});

it('删除已有数据', async () => {
  (http.get as jest.Mock).mockResolvedValue([
    { id: '1', userName: '张三' },
    { id: '2', userName: '李四' },
  ]);

  (http.delete as jest.Mock).mockResolvedValue('删除成功');

  const { findAllByTestId, getByText, getAllByText } = renderDemo();

  await findAllByTestId('item');

  fireEvent.click(getByText('添加'));
  fireEvent.click(getAllByText('删除')[0]);

  expect(http.delete).toHaveBeenCalledTimes(1);
  await findAllByTestId('item');

  const itemCount = (await findAllByTestId('item')).length;
  expect(itemCount).toBe(2);

  const editingCount = (await findAllByTestId('editing')).length;
  expect(editingCount).toBe(2);
  expect(getByText('true')).toBeVisible();
});

it('删除未保存的数据', async () => {
  (http.get as jest.Mock).mockResolvedValue([{ id: '1', userName: '张三' }]);

  (http.delete as jest.Mock).mockResolvedValue('删除成功');

  const { findAllByTestId, getByText, getAllByText } = renderDemo();

  await findAllByTestId('item');

  fireEvent.click(getByText('添加'));
  fireEvent.click(getAllByText('删除')[1]);

  const itemCount = (await findAllByTestId('item')).length;
  expect(itemCount).toBe(1);

  const editingCount = (await findAllByTestId('editing')).length;
  expect(editingCount).toBe(1);
});

it('编辑某一项', async () => {
  (http.get as jest.Mock).mockResolvedValue([{ id: '1', userName: '张三' }]);

  const { result, waitForNextUpdate } = renderHook(() =>
    useEdititngList('/test'),
  );

  await waitForNextUpdate();
  result.current.edit(0);

  expect(result.current.editingRows).toEqual([true]);
});

it('保存一项新增列表项', async () => {
  (http.get as jest.Mock).mockResolvedValue([
    { id: '1', userName: '张三' },
    { userName: '王五' },
    { id: '3', userName: 'xx' },
  ]);

  (http.post as jest.Mock).mockResolvedValue({
    id: '02',
    userName: '李四',
  });

  const { result, waitForNextUpdate } = renderHook(() =>
    useEdititngList('/test'),
  );
  await waitForNextUpdate();
  await result.current.save({ userName: '李四' }, 1);

  expect(http.post).toHaveBeenCalledTimes(1);
  expect(result.current.items.length).toBe(3);
  expect(result.current.items[1]).toEqual({
    id: '02',
    userName: '李四',
  });
});

it('保存一条已经存在的数据', async () => {
  (http.get as jest.Mock).mockResolvedValue([
    { id: '1', userName: '张三' },
    { id: '03', userName: '王五' },
  ]);

  (http.put as jest.Mock).mockResolvedValue({
    id: '03',
    userName: '李四',
  });

  const { result, waitForNextUpdate } = renderHook(() =>
    useEdititngList('/test', [{ id: '02', userName: '赵六' }]),
  );

  expect(result.current.editingRows).toEqual([false]);
  await waitForNextUpdate();
  result.current.edit(0);
  expect(result.current.editingRows).toEqual([true]);

  await result.current.save({ id: '03', userName: '李四' }, 1);

  expect(http.post).toHaveBeenCalledTimes(0);
  expect(http.put).toHaveBeenCalledTimes(1);
  expect(result.current.items).toEqual([
    { id: '1', userName: '张三' },
    { id: '03', userName: '李四' },
  ]);
  expect(result.current.editingRows).toEqual([true, false]);
});
