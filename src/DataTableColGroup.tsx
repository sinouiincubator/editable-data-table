import React from 'react';
import { RowType } from './shared/constants';
import DataTableRowContext from './shared/DataTableRowContext';

const context: { type: RowType.ColGroup } = {
  type: RowType.ColGroup,
};

interface Props {
  children: React.ReactNode;
}

function DataTableColGroup(props: Props) {
  const { children } = props;
  return (
    <DataTableRowContext.Provider value={context}>
      <colgroup data-testid="colgroup">{children}</colgroup>
    </DataTableRowContext.Provider>
  );
}

export default DataTableColGroup;
