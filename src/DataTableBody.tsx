/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import DataTableBodyRow from './DataTableBodyRow';

/**
 * 数据表格内容组件
 */
const DataTableBody: React.SFC<{
  data?: any[];
  idPropertyName: string;
  editingRows?: number[];
}> = function DataTableBody({
  idPropertyName,
  data,
  children,
  editingRows = [],
}) {
  if (!data || data.length === 0) {
    return null;
  }
  return (
    <tbody>
      {data.map((item, index) => (
        <DataTableBodyRow
          key={item[idPropertyName] || index}
          data={item}
          index={index}
          data-testid="tableBody"
          editing={editingRows.indexOf(index) !== -1}
        >
          {children}
        </DataTableBodyRow>
      ))}
    </tbody>
  );
};

export default DataTableBody;
