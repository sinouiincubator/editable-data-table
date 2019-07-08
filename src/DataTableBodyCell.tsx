/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import EditableDataTableContext from './shared/EditableDataTableContext';
import DataTableRowContext, {
  BodyRowContextType,
} from './shared/DataTableRowContext';
import DataTableCellEditor from './DataTableCellEditor';

interface DataCellProps<T, CellDataType> {
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

  /**
   * 编辑器
   */
  editor?: React.ReactType;
}

/**
 * 数据单元格
 */
function DataTableBodyCell<T = any, CellDataType = string>(
  props: DataCellProps<T, CellDataType>,
) {
  const { data, index, editing } = useContext(
    DataTableRowContext,
  ) as BodyRowContextType<any>;
  const { order, render, name, editor } = props;
  const { idPropertyName } = useContext(EditableDataTableContext);

  if (order) {
    return (
      <td className="sinoui-data-table-body-td align_center">{index + 1}</td>
    );
  }

  if (editing && editor) {
    if (!name) {
      throw new Error(`没有给TableColumn指定name属性`);
    }
    return (
      <td className="sinoui-data-table-body-td">
        <DataTableCellEditor name={name} editor={editor} />
      </td>
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
