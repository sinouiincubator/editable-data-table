/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import { RowType } from './shared/constants';
import DataTableRowContext, {
  BodyRowContextType,
} from './shared/DataTableRowContext';

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

  /**
   * 是否处于编辑状态
   */
  editing?: boolean;
}

type CompType<T = any> = React.SFC<Props<T>>;

/**
 * 内容行
 */
const DataTableBodyRow: CompType = (props) => {
  const { data, index, children, editing } = props;
  const context: BodyRowContextType<any> = useMemo(
    () => ({ type: RowType.Body, data, index, editing: !!editing }),
    [data, index, editing],
  );

  return (
    <DataTableRowContext.Provider value={context}>
      <tr className="sinoui-data-table-body-row" data-testid="bodyRow">
        {children}
      </tr>
    </DataTableRowContext.Provider>
  );
};

export default React.memo(DataTableBodyRow);
