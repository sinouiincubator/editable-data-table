import React, { useState, useContext, useCallback, useMemo } from 'react';
import FormHelpText from 'sinoui-components/Form/FormHelpText';
import DataTableRowContext, {
  BodyRowContextType,
} from './shared/DataTableRowContext';
import EditableDataTableContext from './shared/EditableDataTableContext';
import EditingBodyRowContainer from './shared/EditingBodyRowContainer';

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
  const { data, index } = useContext(DataTableRowContext) as BodyRowContextType<
    any
  >;
  const valueFromContext = data[name];
  const [, setValue] = useState(valueFromContext);
  const { options } = useContext(EditableDataTableContext);
  const {
    touched,
    errors,
    validateField,
  } = EditingBodyRowContainer.useContainer();

  const handleChange = useCallback(
    (event?: React.ChangeEvent<HTMLInputElement> | string) => {
      const newValue = isChangeEvent(event) ? event.target.value : event;
      setValue(newValue);

      data[name] = newValue;

      if (options.onRowChange) {
        options.onRowChange(index, data);
      }
      validateField(name, data);
    },
    [data, name, options, index, validateField],
  );

  const isTouched = touched[name];
  const error = isTouched ? errors[name] : undefined;

  const element = useMemo(
    () => (
      <>
        <Editor
          name={name}
          value={valueFromContext}
          item={data}
          onChange={handleChange}
          error={!!error}
        />
        {error && <FormHelpText error>{error}</FormHelpText>}
      </>
    ),
    [data, error, handleChange, name, valueFromContext],
  );

  return element;
}

export default React.memo(DataTableCellEditor);
