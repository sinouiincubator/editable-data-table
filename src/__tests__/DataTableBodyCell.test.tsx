import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect';
import DataTableBodyCell from '../DataTableBodyCell';
import DataTableRowContext from '../shared/DataTableRowContext';
import { RowType } from '../shared/constants';

afterEach(cleanup);

it('渲染序号列', () => {
  const { container } = render(
    <DataTableRowContext.Provider
      value={{ type: RowType.Body, data: 1, index: 0, editing: false }}
    >
      <DataTableBodyCell order />
    </DataTableRowContext.Provider>,
  );

  expect(container.querySelector('td')).toContainHTML(
    '<td class="sinoui-data-table-body-td align_center">1</td>',
  );
});

it('渲染数据', () => {
  const { container } = render(
    <DataTableRowContext.Provider
      value={{
        type: RowType.Body,
        data: { title: '标题' },
        index: 1,
        editing: false,
      }}
    >
      <DataTableBodyCell name="title" />
    </DataTableRowContext.Provider>,
  );

  expect(container.querySelector('td')).toHaveTextContent('标题');
});

it('自定义单元格渲染', () => {
  const { getByTestId } = render(
    <DataTableRowContext.Provider
      value={{
        type: RowType.Body,
        data: { title: '标题', id: '5', name: '姓名' },
        index: 1,
        editing: false,
      }}
    >
      <DataTableBodyCell
        name="title"
        render={(value, data, index, id) => (
          <div>
            <div data-testid="value">{value}</div>
            <div data-testid="data">{data.name}</div>
            <div data-testid="index">{index}</div>
            <div data-testid="id">{id}</div>
          </div>
        )}
      />
    </DataTableRowContext.Provider>,
  );

  expect(getByTestId('value')).toHaveTextContent('标题');
  expect(getByTestId('data')).toHaveTextContent('姓名');
  expect(getByTestId('index')).toHaveTextContent('1');
  expect(getByTestId('id')).toHaveTextContent('5');
});

it('不指定name时的渲染自定义单元格渲染', () => {
  const { getByTestId, queryByTestId } = render(
    <DataTableRowContext.Provider
      value={{
        type: RowType.Body,
        data: { title: '标题', id: '5', name: '姓名' },
        index: 1,
        editing: false,
      }}
    >
      <DataTableBodyCell
        render={(value, data, index, id) => (
          <div>
            {value && <div data-testid="value">{value}</div>}
            <div data-testid="data">{data.name}</div>
            <div data-testid="index">{index}</div>
            <div data-testid="id">{id}</div>
          </div>
        )}
      />
    </DataTableRowContext.Provider>,
  );

  expect(queryByTestId('value')).toBeFalsy();
  expect(getByTestId('data')).toHaveTextContent('姓名');
  expect(getByTestId('index')).toHaveTextContent('1');
  expect(getByTestId('id')).toHaveTextContent('5');
});

it('没有指定name和render，则不渲染', () => {
  const { container } = render(
    <DataTableRowContext.Provider
      value={{
        type: RowType.Body,
        data: { title: '标题' },
        index: 1,
        editing: false,
      }}
    >
      <DataTableBodyCell />
    </DataTableRowContext.Provider>,
  );

  expect(container).toBeEmpty();
});

it('编辑状态', () => {
  const { getByDisplayValue } = render(
    <DataTableRowContext.Provider
      value={{
        type: RowType.Body,
        data: { title: '标题' },
        index: 1,
        editing: true,
      }}
    >
      <DataTableBodyCell name="title" editor="input" />
    </DataTableRowContext.Provider>,
  );

  const input = getByDisplayValue('标题');
  expect(input).toBeVisible();

  fireEvent.change(input, { target: { value: '新的标题' } });

  expect(input).toHaveValue('新的标题');
});
