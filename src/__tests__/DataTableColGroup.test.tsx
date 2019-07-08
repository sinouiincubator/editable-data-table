import React, { useContext } from 'react';
import { cleanup, render } from '@testing-library/react';
import DataTableRowContext, { RowType } from '../DataTableRowContext';
import DataTableColGroup from '../DataTableColGroup';

afterEach(cleanup);

it('渲染列设置', () => {
  const Child = () => {
    const { type } = useContext(DataTableRowContext);

    if (type === RowType.ColGroup) {
      return <col data-testid="col" />;
    }
    return null;
  };

  const { getAllByTestId } = render(
    <DataTableColGroup>
      <Child />
      <Child />
    </DataTableColGroup>,
  );

  expect(getAllByTestId('col').length).toBe(2);
});
