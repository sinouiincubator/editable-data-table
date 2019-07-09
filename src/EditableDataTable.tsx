/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useRef, useEffect } from 'react';
import Table from './Table';
import EditableDataTableContext from './shared/EditableDataTableContext';
import EmptyDataTableRow from './EmptyDataTableRow';
import DataTableColGroup from './DataTableColGroup';
import DataTableHead from './DataTableHead';
import DataTableBody from './DataTableBody';

export interface Props<T> {
  /**
   * 列表数据
   */
  data?: T[];
  /**
   * 处于编辑状态的行。`editingRows`数组需要与`data`数组保持一一对应的关系，`editingRows`数组中每一个数据项代表的是`data`数组中对应数据项的编辑状态，`true`表示编辑状态，`false`表示非编辑状态。
   */
  editingRows?: boolean[];

  /**
   * 子节点，一组TableColumn。使用TableColumn指表格列信息。
   */
  children: React.ReactNode;
  /**
   * 数据的id属性名。默认为'id'。
   */
  idPropertyName?: string;
  /**
   * 无数据时的提示信息。默认为“暂无数据”。
   */
  emptyTitle?: React.ReactNode;

  /**
   * 监听行数据发生变化的事件。回调函数的`rowData`参数代表的是变更后的行数据对象。
   */
  onRowChange?: (index: number, rowData: T) => void;

  /**
   * 给正在编辑的行添加校验规则。
   * 
   * 返回错误提示：
   * 
   * ```js
     {
       'title': '不能为空',
       'name': '不能少于三个字'
     }
   * ```
   *
   * 上面的错误信息表示字段`title`和`name`校验失败。
   * 
   * 如果数据行没有错误，则返回`{}`或者`undefined`。
   */
  validate?: (rowData: T) => { [x: string]: string } | undefined;
}

function useEditableDataTable<T>({
  idPropertyName = 'id',
  onRowChange,
  validate,
}: Props<T>) {
  const options = useRef({
    onRowChange,
    validate,
  });

  useEffect(() => {
    options.current.onRowChange = onRowChange;
    options.current.validate = validate;
  }, [onRowChange, validate]);

  const context = useMemo(
    () => ({ idPropertyName, options: options.current }),
    [idPropertyName],
  );

  return context;
}

/**
 * 可编辑表格
 */
function EditableDataTable<T>(props: Props<T>) {
  const {
    data = [],
    idPropertyName = 'id',
    children,
    emptyTitle = '暂无数据',
    editingRows,
  } = props;
  const context = useEditableDataTable(props);
  return (
    <>
      <Table>
        <EditableDataTableContext.Provider value={context}>
          <DataTableColGroup>{children}</DataTableColGroup>
          <DataTableHead>{children}</DataTableHead>
          <DataTableBody
            data={data}
            idPropertyName={idPropertyName}
            editingRows={editingRows}
          >
            {children}
          </DataTableBody>
        </EditableDataTableContext.Provider>
      </Table>
      {(!data || data.length === 0) && (
        <EmptyDataTableRow>{emptyTitle}</EmptyDataTableRow>
      )}
    </>
  );
}

export default EditableDataTable;
