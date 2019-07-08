import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import DataTableHeadCell from '../DataTableHeadCell';

afterEach(cleanup);

it('渲染序号标题单元格', () => {
  const { container } = render(<DataTableHeadCell order title="序号" />);

  expect(container.querySelector('th')).toContainHTML(
    '<th class="sinoui-data-table-head align_center">序号</th>',
  );
});

it('渲染标题单元格', () => {
  const { container } = render(
    <DataTableHeadCell title={<div style={{ color: 'red' }}>标题</div>} />,
  );

  expect(container.querySelector('th')).toContainHTML(
    '<th class="sinoui-data-table-head"><div style="color: red;">标题</div></th>',
  );
});
