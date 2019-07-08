/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import DataTableBodyRow from './DataTableBodyRow';

/**
 * 数据表格内容组件
 */
const DataTableBody: React.SFC<{
  data: any[];
  idPropertyName: string;
}> = function DataTableBody({ idPropertyName, data, children }) {
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
        >
          {children}
        </DataTableBodyRow>
      ))}
    </tbody>
  );
};

export default DataTableBody;
