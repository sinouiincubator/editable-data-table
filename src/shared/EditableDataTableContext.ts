import React from 'react';

interface ContextType {
  idPropertyName: string;
  options: {
    onRowChange?: (rowData: any) => void;
  };
}

const EditableDataTableContext = React.createContext<ContextType>({
  idPropertyName: 'id',
  options: {},
});

export default EditableDataTableContext;
