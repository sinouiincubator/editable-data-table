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
   * 子节点
   */
  children: React.ReactNode;
  /**
   * 数据的id属性名。默认为'id'
   */
  idPropertyName?: string;

  /**
   * 无数据时的提示信息
   */
  emptyTitle?: React.ReactNode;

  /**
   * 处于编辑状态的行（索引）
   */
  editingRows?: number[];

  /**
   * 监听行数据发生变化的事件
   */
  onRowChange?: (rowData: T) => void;
}

function useEditableDataTable<T>({
  idPropertyName = 'id',
  onRowChange,
}: Props<T>) {
  const options = useRef({
    onRowChange,
  });

  useEffect(() => {
    options.current.onRowChange = onRowChange;
  }, [onRowChange]);

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
