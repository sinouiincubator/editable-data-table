/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import Table from './Table';
import EditableDataTableContext from './EditableDataTableContext';
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
}

/**
 * 可编辑表格
 */
function EditableDataTable<T>(props: Props<T>) {
  const {
    data = [],
    idPropertyName = 'id',
    children,
    emptyTitle = '无数据',
  } = props;
  const context = useMemo(() => ({ idPropertyName }), [idPropertyName]);
  return (
    <>
      <Table>
        <EditableDataTableContext.Provider value={context}>
          <DataTableColGroup>{children}</DataTableColGroup>
          <DataTableHead>{children}</DataTableHead>
          <DataTableBody data={data} idPropertyName={idPropertyName}>
            {children}
          </DataTableBody>
        </EditableDataTableContext.Provider>
      </Table>
      {!data ||
        (data.length === 0 && (
          <EmptyDataTableRow columns={React.Children.count(children)}>
            {emptyTitle}
          </EmptyDataTableRow>
        ))}
    </>
  );
}

export default EditableDataTable;
