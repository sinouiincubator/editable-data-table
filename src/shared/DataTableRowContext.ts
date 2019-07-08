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
