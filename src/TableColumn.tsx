/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import DataTableRowContext from './shared/DataTableRowContext';
import DataTableBodyCell from './DataTableBodyCell';
import DataTableHeadCell from './DataTableHeadCell';
import { RowType } from './shared/constants';

export interface Props<T, CellDataType> {
  /**
   * 数据列名称
   */
  name?: string;
  /**
   * 标题
   */
  title?: React.ReactNode;

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
    context: {
      editing: boolean;
      validate: (rowData?: any) => boolean;
    },
  ) => React.ReactNode;

  /**
   * 列宽度
   */
  width?: number | string;

  /**
   * 编辑器
   */
  editor?: React.ReactType;
}

/**
 * 表格列
 */
const TableColumn: React.SFC<Props<any, any>> = React.memo(function TableColumn<
  T,
  CellDataType
>(props: Props<T, CellDataType>) {
  const { title, order, width } = props;
  const { type } = useContext(DataTableRowContext);

  switch (type) {
    case RowType.Head:
      return <DataTableHeadCell title={title} order={order} />;
    case RowType.ColGroup:
      return <col width={order ? 50 : width} />;
    default:
      return <DataTableBodyCell {...props} />;
  }
});

export default TableColumn;
