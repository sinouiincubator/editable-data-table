import React from 'react';

/**
 * 数据表头
 */
const DataTableHead: React.SFC = function TableHead({ children }) {
  return (
    <thead>
      <tr className="sinoui-data-table-head-row" data-testid="tableHead">
        {children}
      </tr>
    </thead>
  );
};

export default DataTableHead;
