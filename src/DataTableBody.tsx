/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import DataTableBodyRow from './DataTableBodyRow';
import { ErrorResult, TouchedState } from './types';

/**
 * 数据表格内容组件
 */
const DataTableBody: React.SFC<{
  data?: any[];
  idPropertyName: string;
  editingRows?: boolean[];
  errors?: ErrorResult[];
  touched?: TouchedState[];
}> = function DataTableBody({
  idPropertyName,
  data,
  children,
  editingRows = [],
  errors,
  touched,
}) {
  if (!data || data.length === 0) {
    return null;
  }
  return (
    <tbody>
      {data.map((item, index) => (
        <DataTableBodyRow
          key={item[idPropertyName] || `index_${index}`}
          data={item}
          index={index}
          data-testid="tableBody"
          editing={editingRows[index]}
          error={errors ? errors[index] : undefined}
          touched={touched ? touched[index] : undefined}
        >
          {children}
        </DataTableBodyRow>
      ))}
    </tbody>
  );
};

export default DataTableBody;
