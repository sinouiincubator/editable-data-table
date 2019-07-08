import React from 'react';

interface ContextType {
  idPropertyName: string;
}

const EditableDataTableContext = React.createContext<ContextType>({
  idPropertyName: 'id',
});

export default EditableDataTableContext;
