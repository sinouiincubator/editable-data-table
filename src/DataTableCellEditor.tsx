import React, { useState, useContext, useCallback } from 'react';
import DataTableRowContext, {
  BodyRowContextType,
} from './shared/DataTableRowContext';
import EditableDataTableContext from './shared/EditableDataTableContext';

interface Props {
  editor: React.ReactType;
  name: string;
}

function isChangeEvent(
  event?: React.ChangeEvent<HTMLInputElement> | string,
): event is React.ChangeEvent<HTMLInputElement> {
  return !!(event && (event as React.ChangeEvent<HTMLInputElement>).target);
}

/**
 * 单元格编辑器
 */
function DataTableCellEditor(props: Props) {
  const { name, editor: Editor } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = useContext(DataTableRowContext) as BodyRowContextType<any>;
  const valueFromContext = data[name];
  const [, setValue] = useState(valueFromContext);
  const { options } = useContext(EditableDataTableContext);

  const handleChange = useCallback(
    (event?: React.ChangeEvent<HTMLInputElement> | string) => {
      const newValue = isChangeEvent(event) ? event.target.value : event;
      setValue(newValue);

      data[name] = newValue;

      if (options.onRowChange) {
        options.onRowChange(data);
      }
    },
    [data, name, options],
  );

  return (
    <Editor
      name={name}
      value={valueFromContext}
      item={data}
      onChange={handleChange}
    />
  );
}

export default React.memo(DataTableCellEditor);
