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
function DataTableCell<T, CellDataType>(props: DataCellProps<T, CellDataType>) {
  const { data, index = 0, order, render, name } = props;
  const { idPropertyName } = useContext(EditableDataTableContext);

  if (order) {
    return <td className="sinoui-data-table-body-td align_center">{index}</td>;
  }

  if (render && name) {
    return (
      <td className="sinoui-data-table-body-td">
        {render(data[name], data, index, data[idPropertyName])}
      </td>
    );
  }

  return name ? (
    <td className="sinoui-data-table-body-td">{data[name]}</td>
  ) : null;
}

export default DataTableCell;
