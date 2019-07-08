/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface ContextType {
  idPropertyName: string;
  options: {
    onRowChange?: (rowData: any) => void;
    validate?: (rowData: any) => { [x: string]: string } | undefined;
  };
}

const EditableDataTableContext = React.createContext<ContextType>({
  idPropertyName: 'id',
  options: {},
});

export default EditableDataTableContext;
