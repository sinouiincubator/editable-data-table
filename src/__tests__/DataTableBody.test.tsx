import React, { useContext } from 'react';
import { render, cleanup } from '@testing-library/react';
import DataTableRowContext from '../shared/DataTableRowContext';
import DataTableBody from '../DataTableBody';

afterEach(cleanup);

it('指定空数组，不渲染', () => {
  const { container } = render(<DataTableBody data={[]} idPropertyName="id" />);

  expect(container.innerHTML).toBeFalsy();
});

it('指定undefined时，不渲染', () => {
  const { container } = render(
    <DataTableBody data={undefined} idPropertyName="id" />,
  );

  expect(container.innerHTML).toBeFalsy();
});

it('渲染一组数组', () => {
  function TableCell() {
    const { data } = useContext(DataTableRowContext) as any;

    return <td>{data.id}</td>;
  }

  const { container } = render(
    <DataTableBody idPropertyName="id" data={[{ id: 1 }, { id: 2 }, { id: 3 }]}>
      <TableCell />
    </DataTableBody>,
  );

  expect(container.querySelectorAll('td').length).toBe(3);
});
