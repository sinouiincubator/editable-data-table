/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { RowType } from './constants';

export interface BodyRowContextType<T> {
  type: RowType.Body;
  data: T;
  index: number;
  /**
   * 是否处于编辑状态
   */
  editing: boolean;

  /**
   * 数据行的验证结果
   */
  error?: ErrorResult;

  /**
   * 单元格数据被点击状态
   */
  touched?: TouchedState;
}

export interface HeadRowContextType {
  type: RowType.Head;
}

export interface ColGroupContextType {
  type: RowType.ColGroup;
}

export type RowContextType<T = any> =
  | BodyRowContextType<T>
  | HeadRowContextType
  | ColGroupContextType;

const DataTableRowContext = React.createContext<RowContextType>({
  type: RowType.Head,
});

export default DataTableRowContext;
