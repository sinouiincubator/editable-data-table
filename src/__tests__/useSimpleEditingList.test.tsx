import React, { useCallback } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'sinoui-components/styles';
import defaultTheme from 'sinoui-components/styles/defaultTheme';
import 'jest-dom/extend-expect';
import useSimpleEditingList from '../useSimpleEditingList';
import EditableDataTable from '../EditableDataTable';
import TableColumn from '../TableColumn';
import { ErrorResult } from '../types';
import RowSelectColumn from '../RowSelectColumn';

jest.mock('@sinoui/http');

afterEach(cleanup);

function SimpleDemo({ editingList }: { editingList: any }) {
  const handleLoad = useCallback(() => {
    editingList.setItems([
      { id: '2', title: '标题2' },
      { id: '3', title: '标题3' },
    ]);
  }, [editingList]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <button type="button" onClick={handleLoad}>
          加载
        </button>
        <button type="button" onClick={() => editingList.add({})}>
          新增
        </button>
        <button type="button" onClick={() => editingList.add({}, 0)}>
          在首位新增
        </button>
        <button
          type="button"
          onClick={() =>
            editingList.remove(
              editingList.items.map((_: any, index: number) => index),
            )
          }
        >
          全删
        </button>
        <button
          type="button"
          onClick={() => {
            try {
              editingList.validateAllEditingRows();
              // eslint-disable-next-line no-empty
            } catch (error) {}
          }}
        >
          校验列表
        </button>
        <EditableDataTable
          data={editingList.items}
          editingRows={editingList.editingRows}
          errors={editingList.errors}
          touched={editingList.touched}
          onFieldChange={editingList.validateField}
        >
          <RowSelectColumn
            selectedRows={editingList.selectedRows}
            isAllSelected={editingList.isAllSelected}
            isContainsSelected={editingList.isContainsSelected}
            toggleAllSelected={editingList.toggleAllSelected}
            toggleRowSelected={editingList.toggleRowSelected}
          />
          <TableColumn name="title" title="标题" editor="input" />
          <TableColumn
            title="编辑状态"
            render={(_value, _item, _index, _id, context) =>
              context.editing ? 'editing' : ''
            }
          />
          <TableColumn
            name="id"
            title="操作"
            render={(_value, _item, index, _id, context) => (
              <>
                {context.editing ? (
                  <button
                    type="button"
                    onClick={() => editingList.setReadonly(index)}
                  >
                    只读
                  </button>
                ) : (
                  <button type="button" onClick={() => editingList.edit(index)}>
                    编辑
                  </button>
                )}
                <button type="button" onClick={() => editingList.remove(index)}>
                  删除
                </button>
              </>
            )}
          />
        </EditableDataTable>
      </div>
    </ThemeProvider>
  );
}

it('展示并替换数据', () => {
  function Demo() {
    const editingList = useSimpleEditingList([{ id: '1', title: '标题1' }]);
    return <SimpleDemo editingList={editingList} />;
  }

  const { getByText, queryByText } = render(<Demo />);

  expect(getByText('标题1')).toBeVisible();

  fireEvent.click(getByText('加载'));

  expect(queryByText('标题1')).toBeFalsy();
  expect(getByText('标题2')).toBeVisible();
  expect(getByText('标题3')).toBeVisible();
});

it('一直处于编辑状态', () => {
  function Demo() {
    const editingList = useSimpleEditingList([{ id: '1', title: '标题1' }], {
      alwaysEditing: true,
    });
    return <SimpleDemo editingList={editingList} />;
  }

  const { getByText, getAllByText } = render(<Demo />);

  expect(getAllByText('editing').length).toBe(1);

  fireEvent.click(getByText('加载'));

  expect(getAllByText('editing').length).toBe(2);
});

it('编辑', () => {
  function Demo() {
    const editingList = useSimpleEditingList([{ id: '1', title: '标题1' }]);
    return <SimpleDemo editingList={editingList} />;
  }

  const { getByText, getAllByText } = render(<Demo />);

  fireEvent.click(getByText('编辑'));

  expect(getAllByText('editing').length).toBe(1);
});

it('新增', () => {
  function Demo() {
    const editingList = useSimpleEditingList([{ id: '1', title: '标题1' }]);
    return <SimpleDemo editingList={editingList} />;
  }

  const { getByText, getAllByText } = render(<Demo />);

  fireEvent.click(getByText('新增'));

  expect(getAllByText('只读').length).toBe(1); // 新增的一条数据处于编辑状态
});

it('在首位添加数据', () => {
  function Demo() {
    const editingList = useSimpleEditingList([{ id: '01', title: '标题1' }]);
    return <SimpleDemo editingList={editingList} />;
  }

  const { getByText, container } = render(<Demo />);

  fireEvent.click(getByText('在首位新增'));

  // 第一行应该有“只读”按钮
  expect(container.querySelector('tbody tr:first-child')).toHaveTextContent(
    '只读',
  );
});

it('删除', () => {
  function Demo() {
    const editingList = useSimpleEditingList([{ id: '1', title: '标题1' }]);
    return <SimpleDemo editingList={editingList} />;
  }

  const { getByText, queryByText } = render(<Demo />);

  fireEvent.click(getByText('删除'));

  expect(queryByText('标题1')).toBeFalsy();
});

it('删除多条数据', () => {
  function Demo() {
    const editingList = useSimpleEditingList([
      { id: '1', title: '标题1' },
      { id: '2', title: '标题2' },
    ]);
    return <SimpleDemo editingList={editingList} />;
  }

  const { getByText } = render(<Demo />);

  fireEvent.click(getByText('全删'));

  expect(getByText('暂无数据')).toBeVisible();
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function validate(rowData: any) {
  const errors: ErrorResult = {};

  if (!rowData.title) {
    errors.title = '必填';
  }

  if (rowData.title && rowData.title.startsWith('1')) {
    errors.title = '标题不能以1开头';
  }

  return Object.keys(errors).length === 0 ? undefined : errors;
}

it('外置单元格校验', () => {
  function Demo() {
    const editingList = useSimpleEditingList(
      [{ id: '1', title: '标题1' }, { id: '2', title: '标题2' }],
      { validate, alwaysEditing: true },
    );
    return <SimpleDemo editingList={editingList} />;
  }

  const { getByText, getByDisplayValue, queryByText } = render(<Demo />);

  fireEvent.change(getByDisplayValue('标题2'), { target: { value: '1xxx' } });

  expect(getByText('标题不能以1开头')).toBeVisible();

  fireEvent.change(getByDisplayValue('标题1'), {
    target: { value: '标题123' },
  });
  expect(getByText('标题不能以1开头')).toBeVisible();

  fireEvent.change(getByDisplayValue('标题123'), {
    target: { value: '标题1234' },
  });
  expect(getByText('标题不能以1开头')).toBeVisible();

  fireEvent.change(getByDisplayValue('1xxx'), {
    target: { value: '标题2' },
  });
  expect(queryByText('标题不能以1开头')).toBeFalsy();
});

it('校验整个列表', () => {
  function Demo() {
    const editingList = useSimpleEditingList(
      [
        { id: '1', title: '' },
        { id: '2', title: '123' },
        { id: '3', title: '标题3' },
      ],
      { validate, alwaysEditing: true },
    );
    return <SimpleDemo editingList={editingList} />;
  }

  const { getByText } = render(<Demo />);

  fireEvent.click(getByText('校验列表'));

  expect(getByText('标题不能以1开头')).toBeVisible();
  expect(getByText('必填')).toBeVisible();
});

it('只读列表，不做校验', () => {
  function Demo() {
    const editingList = useSimpleEditingList(
      [
        { id: '1', title: '' },
        { id: '2', title: '123' },
        { id: '3', title: '标题3' },
      ],
      { validate, alwaysEditing: false },
    );
    return <SimpleDemo editingList={editingList} />;
  }

  const { queryByText, getByText } = render(<Demo />);

  fireEvent.click(getByText('校验列表'));

  expect(queryByText('标题不能以1开头')).toBeFalsy();
  expect(queryByText('必填')).toBeFalsy();
});

it('没有指定validate，不能做列表校验', () => {
  function Demo() {
    const editingList = useSimpleEditingList(
      [
        { id: '1', title: '' },
        { id: '2', title: '123' },
        { id: '3', title: '标题3' },
      ],
      { alwaysEditing: true },
    );
    return <SimpleDemo editingList={editingList} />;
  }

  const { queryByText, getByText } = render(<Demo />);

  fireEvent.click(getByText('校验列表'));

  expect(queryByText('标题不能以1开头')).toBeFalsy();
  expect(queryByText('必填')).toBeFalsy();
});

it('将编辑状态设置为只读', () => {
  function Demo() {
    const editingList = useSimpleEditingList([{ id: '1', title: '标题1' }]);
    return <SimpleDemo editingList={editingList} />;
  }

  const { getByText, getAllByText, queryByText } = render(<Demo />);

  fireEvent.click(getByText('编辑'));

  expect(getAllByText('editing').length).toBe(1);

  fireEvent.click(getByText('只读'));

  expect(queryByText('editing')).toBeFalsy();
});

it('全选', () => {
  const { result } = renderHook(() =>
    useSimpleEditingList([
      { id: '1', title: '标题1' },
      { id: '2', title: '标题2' },
      { id: '3', title: '标题3' },
      { id: '4', title: '标题4' },
      { id: '5', title: '标题5' },
      { id: '6', title: '标题6' },
      { id: '7', title: '标题7' },
      { id: '8', title: '标题8' },
    ]),
  );
  result.current.toggleAllSelected();

  expect(result.current.selectedRows.length).toBe(8);
});

it('在选中项之前增加一条数据', () => {
  const { result } = renderHook(() =>
    useSimpleEditingList([
      { id: '1', title: '标题1' },
      { id: '2', title: '标题2' },
      { id: '3', title: '标题3' },
      { id: '4', title: '标题4' },
      { id: '5', title: '标题5' },
      { id: '6', title: '标题6' },
      { id: '7', title: '标题7' },
      { id: '8', title: '标题8' },
    ]),
  );

  result.current.toggleRowSelected(2);

  result.current.add({ id: '9', title: '标题9' }, 0);

  expect(result.current.selectedRows).toEqual([3]);
});

it('在选中项之后增加一条数据', () => {
  const { result } = renderHook(() =>
    useSimpleEditingList([
      { id: '1', title: '标题1' },
      { id: '2', title: '标题2' },
      { id: '3', title: '标题3' },
      { id: '4', title: '标题4' },
    ]),
  );

  result.current.toggleRowSelected(2);

  result.current.add({ id: '9', title: '标题9' }, 4);

  expect(result.current.selectedRows).toEqual([2]);
});

it('在两个选中项之间插入一条数据', () => {
  const { result } = renderHook(() =>
    useSimpleEditingList([
      { id: '1', title: '标题1' },
      { id: '2', title: '标题2' },
      { id: '3', title: '标题3' },
      { id: '4', title: '标题4' },
    ]),
  );

  result.current.toggleRowSelected(1);
  result.current.toggleRowSelected(3);

  result.current.add({ id: '9', title: '标题9' }, 2);

  expect(result.current.selectedRows).toEqual([1, 4]);
  expect(result.current.isContainsSelected).toBeTruthy();
});

it('删除选中项', () => {
  const { result } = renderHook(() =>
    useSimpleEditingList([
      { id: '1', title: '标题1' },
      { id: '2', title: '标题2' },
      { id: '3', title: '标题3' },
      { id: '4', title: '标题4' },
    ]),
  );

  result.current.toggleRowSelected(1);
  result.current.toggleRowSelected(3);
  result.current.remove([1, 3]);
  expect(result.current.selectedRows.length).toBe(0);
});

it('删除两个选中项中的其中一个', () => {
  const { result } = renderHook(() =>
    useSimpleEditingList([
      { id: '1', title: '标题1' },
      { id: '2', title: '标题2' },
      { id: '3', title: '标题3' },
      { id: '4', title: '标题4' },
    ]),
  );

  result.current.toggleRowSelected(1);
  result.current.toggleRowSelected(3);
  result.current.remove(1);

  expect(result.current.selectedRows).toEqual([2]);
});

it('删除选中项前面的数据', () => {
  const { result } = renderHook(() =>
    useSimpleEditingList([
      { id: '1', title: '标题1' },
      { id: '2', title: '标题2' },
      { id: '3', title: '标题3' },
      { id: '4', title: '标题4' },
    ]),
  );

  result.current.toggleRowSelected(1);
  result.current.toggleRowSelected(3);
  result.current.remove(0);

  expect(result.current.selectedRows).toEqual([0, 2]);
});

it('删除选中项后面的数据', () => {
  const { result } = renderHook(() =>
    useSimpleEditingList([
      { id: '1', title: '标题1' },
      { id: '2', title: '标题2' },
      { id: '3', title: '标题3' },
      { id: '4', title: '标题4' },
    ]),
  );

  result.current.toggleRowSelected(0);
  result.current.toggleRowSelected(2);
  result.current.remove(3);

  expect(result.current.selectedRows).toEqual([0, 2]);
});

it('删除两个选中项之间的数据', () => {
  const { result } = renderHook(() =>
    useSimpleEditingList([
      { id: '1', title: '标题1' },
      { id: '2', title: '标题2' },
      { id: '3', title: '标题3' },
      { id: '4', title: '标题4' },
    ]),
  );

  result.current.toggleRowSelected(0);
  result.current.toggleRowSelected(2);
  result.current.remove(1);

  expect(result.current.selectedRows).toEqual([0, 1]);
});

it('删除已选选择的数据行', () => {
  const { result } = renderHook(() =>
    useSimpleEditingList([
      { id: '1', title: '标题1' },
      { id: '2', title: '标题2' },
      { id: '3', title: '标题3' },
      { id: '4', title: '标题4' },
    ]),
  );

  result.current.toggleRowSelected(0);
  result.current.toggleRowSelected(1);
  result.current.toggleRowSelected(2);

  result.current.remove(1);

  expect(result.current.selectedRows).toEqual([0, 1]);
});
