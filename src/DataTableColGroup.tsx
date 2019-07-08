import React from 'react';
import DataTableRowContext, { RowType } from './DataTableRowContext';

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
