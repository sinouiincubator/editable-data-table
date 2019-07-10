import React, { useContext } from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import DataTableRowContext, {
  BodyRowContextType,
} from '../shared/DataTableRowContext';
import DataTableBodyRow from '../DataTableBodyRow';

afterEach(cleanup);

it('渲染表格行', () => {
  const Child = () => {
    const { type, data, index } = useContext(
      DataTableRowContext,
    ) as BodyRowContextType<any>;
    return (
      <div>
        <div data-testid="type">{type}</div>
        <div data-testid="data">{data.id}</div>
        <div data-testid="index">{index}</div>
      </div>
    );
  };

  const { getByTestId, container } = render(
    <DataTableBodyRow data={{ id: 1 }} index={2}>
      <Child />
    </DataTableBodyRow>,
  );

  expect(container.querySelector('tr.sinoui-data-table-body-row')).toBeTruthy();
  expect(getByTestId('type')).toHaveTextContent('0');
  expect(getByTestId('data')).toHaveTextContent('1');
  expect(getByTestId('index')).toHaveTextContent('2');
});