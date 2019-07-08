/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import EditableDataTableContext from './EditableDataTableContext';

interface DataCellProps<T, CellDataType> {
  /**
   * 数据所在的索引序号
   */
  index: number;
  /**
   * 数据
   */
  data: any;
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
   * 数据列名称
   */
  name?: string;
}

/**
 * 数据单元格
 */
function DataTableBodyCell<T = any, CellDataType = string>(
  props: DataCellProps<T, CellDataType>,
) {
  const { data, index, order, render, name } = props;
  const { idPropertyName } = useContext(EditableDataTableContext);

  if (order) {
    return (
      <td className="sinoui-data-table-body-td align_center">{index + 1}</td>
    );
  }

  if (render) {
    return (
      <td className="sinoui-data-table-body-td">
        {render(
          name ? data[name] : undefined,
          data,
          index,
          data[idPropertyName],
        )}
      </td>
    );
  }

  return name ? (
    <td className="sinoui-data-table-body-td">{data[name]}</td>
  ) : null;
}

export default DataTableBodyCell;
