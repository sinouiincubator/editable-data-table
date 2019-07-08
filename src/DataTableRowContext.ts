/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export interface BodyRowContextType<T> {
  type: RowType.Body;
  data: T;
  index: number;
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

export enum RowType {
  Body,
  Head,
  ColGroup,
}

const DataTableRowContext = React.createContext<RowContextType>({
  type: RowType.Head,
});

export default DataTableRowContext;
