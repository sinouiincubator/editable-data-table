/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import DataTableRowContext, { RowType } from './DataTableRowContext';

interface Props<T> {
  /**
   * 此行数据
   */
  data: T;
  /**
   * 数据序号
   */
  index: number;
  /**
   * 单元格子组件
   */
  children: React.ReactNode;
}

type CompType<T = any> = React.SFC<Props<T>>;

/**
 * 内容行
 */
const DataTableBodyRow: CompType = (props) => {
  const { data, index, children } = props;
  const context = useMemo(() => ({ type: RowType.Body, data, index }), [
    data,
    index,
  ]);

  return (
    <DataTableRowContext.Provider value={context}>
      <tr className="sinoui-data-table-body-row" data-testid="bodyRow">
        {children}
      </tr>
    </DataTableRowContext.Provider>
  );
};

export default React.memo(DataTableBodyRow);
