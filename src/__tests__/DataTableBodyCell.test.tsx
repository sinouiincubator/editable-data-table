import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import DataTableBodyCell from '../DataTableBodyCell';

afterEach(cleanup);

it('渲染序号列', () => {
  const { container } = render(
    <table>
      <tbody>
        <tr>
          <DataTableBodyCell order data={1} index={0} />
        </tr>
      </tbody>
    </table>,
  );

  expect(container.querySelector('td')).toContainHTML(
    '<td class="sinoui-data-table-body-td align_center">1</td>',
  );
});

it('渲染数据', () => {
  const { container } = render(
    <DataTableBodyCell data={{ title: '标题' }} index={1} name="title" />,
  );

  expect(container.querySelector('td')).toHaveTextContent('标题');
});

it('自定义单元格渲染', () => {
  const { getByTestId } = render(
    <DataTableBodyCell
      data={{ title: '标题', id: '5', name: '姓名' }}
      index={1}
      name="title"
      render={(value, data, index, id) => (
        <div>
          <div data-testid="value">{value}</div>
          <div data-testid="data">{data.name}</div>
          <div data-testid="index">{index}</div>
          <div data-testid="id">{id}</div>
        </div>
      )}
    />,
  );

  expect(getByTestId('value')).toHaveTextContent('标题');
  expect(getByTestId('data')).toHaveTextContent('姓名');
  expect(getByTestId('index')).toHaveTextContent('1');
  expect(getByTestId('id')).toHaveTextContent('5');
});

it('不指定name时的渲染自定义单元格渲染', () => {
  const { getByTestId, queryByTestId } = render(
    <DataTableBodyCell
      data={{ title: '标题', id: '5', name: '姓名' }}
      index={1}
      render={(value, data, index, id) => (
        <div>
          {value && <div data-testid="value">{value}</div>}
          <div data-testid="data">{data.name}</div>
          <div data-testid="index">{index}</div>
          <div data-testid="id">{id}</div>
        </div>
      )}
    />,
  );

  expect(queryByTestId('value')).toBeFalsy();
  expect(getByTestId('data')).toHaveTextContent('姓名');
  expect(getByTestId('index')).toHaveTextContent('1');
  expect(getByTestId('id')).toHaveTextContent('5');
});

it('没有指定name和render，则不渲染', () => {
  const { container } = render(
    <DataTableBodyCell data={{ title: '标题' }} index={1} />,
  );

  expect(container).toBeEmpty();
});
