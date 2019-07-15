/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import classNames from 'classnames';
import { RowType } from './shared/constants';
import DataTableRowContext, {
  BodyRowContextType,
} from './shared/DataTableRowContext';
import EditingBodyRowContainer from './shared/EditingBodyRowContainer';
import { ErrorResult, TouchedState } from './types';

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

  /**
   * 行数据错误状态
   */
  error?: ErrorResult;

  /**
   * 单元格编辑器是否被点击过
   */
  touched?: TouchedState;
  rowClassName?: (index: number) => string;
}

type CompType<T = any> = React.SFC<Props<T>>;

/**
 * 内容行
 */
const DataTableBodyRow: CompType = (props) => {
  const {
    data,
    index,
    children,
    editing,
    error,
    touched,
    rowClassName,
  } = props;
  const context: BodyRowContextType<any> = useMemo(
    () => ({
      type: RowType.Body,
      data,
      index,
      editing: !!editing,
      error,
      touched,
    }),
    [data, index, editing, error, touched],
  );

  return (
    <DataTableRowContext.Provider value={context}>
      <EditingBodyRowContainer.Provider>
        <tr
          className={classNames(
            'sinoui-data-table-body-row',
            rowClassName ? rowClassName(index) : '',
          )}
          data-testid="bodyRow"
        >
          {children}
        </tr>
      </EditingBodyRowContainer.Provider>
    </DataTableRowContext.Provider>
  );
};

export default React.memo(DataTableBodyRow);
