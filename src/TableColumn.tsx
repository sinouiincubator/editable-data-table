/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import DataTableRowContext, { RowType } from './DataTableRowContext';
import DataTableBodyCell from './DataTableBodyCell';
import DataTableHeadCell from './DataTableHeadCell';

export interface Props<T, CellDataType> {
  /**
   * 数据列名称
   */
  name?: string;
  /**
   * 标题
   */
  title: string;

  /**
   * 是否显示序号
   */
  order?: boolean;

  /**
   * 渲染单元格
   */
  render?: (
    value: CellDataType,
    row: T,
    index: number,
    id: string,
  ) => React.ReactNode;

  /**
   * 列宽度
   */
  width?: number | string;
}

/**
 * 表格列
 */
const TableColumn: React.SFC<Props<any, any>> = React.memo(function TableColumn<
  T,
  CellDataType
>(props: Props<T, CellDataType>) {
  const { title, order, width } = props;
  const rowContext = useContext(DataTableRowContext);
  const { type, data, index } = rowContext as any;

  switch (type) {
    case RowType.Head:
      return <DataTableHeadCell title={title} order={order} />;
    case RowType.ColGroup:
      return <col width={order ? 50 : width} />;
    default:
      return <DataTableBodyCell {...props} data={data} index={index} />;
  }
});

export default TableColumn;
