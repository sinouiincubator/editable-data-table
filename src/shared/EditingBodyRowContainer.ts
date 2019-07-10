import { useState, useCallback, useRef, useEffect, useContext } from 'react';
import { createContainer } from 'unstated-next';
import shallowEqual from 'shallowequal';
import EditableDataTableContext from './EditableDataTableContext';
import DataTableRowContext, { BodyRowContextType } from './DataTableRowContext';

interface ContextType<T> {
  /**
   * 校验错误信息
   */
  errors: {
    [x: string]: string;
  };

  /**
   * 表单校验状态是否是受控于外部。（也就是使用者处理数据行校验）
   */
  errorControlled: boolean;

  /**
   * 点击状态
   */
  touched: {
    [x: string]: boolean;
  };

  /**
   * 校验数据行
   *
   * 如果通过校验，则返回`true`，否则返回`false`。
   */
  validate: (newItem?: T) => boolean;

  /**
   * 校验表单域
   */
  validateField: (fieldName: string, newRowData: T) => void;
}

/**
 * 用于正在编辑的行数据的状态管理hook
 *
 * 主要维护的状态：
 *
 * * 表单校验
 * * 是否点击过的状态
 *
 */
function useEditingBodyRow<T>(): ContextType<T> {
  const { data: rowData, error: outerError, touched: outTouched } = useContext(
    DataTableRowContext,
  ) as BodyRowContextType<T>;
  const [touched, setTouched] = useState<{ [x: string]: boolean }>({});
  const [errors, setErrors] = useState({});
  const rowDataRef = useRef(rowData);
  const { options, idPropertyName } = useContext(EditableDataTableContext);

  useEffect(() => {
    rowDataRef.current = rowData;
  }, [rowData]);

  const updateErrors = useCallback((newErrors: any) => {
    setErrors((prev) => {
      if (!shallowEqual(newErrors, prev)) {
        return newErrors;
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    if (!(rowData as any)[idPropertyName] && options.validate) {
      const newErrors = options.validate(rowData) || {};
      updateErrors(newErrors);
    }
  }, [rowData, options, idPropertyName, updateErrors]);

  const validate = useCallback(
    (newRowData: T = rowDataRef.current, updateTouched: boolean = true) => {
      if (options.validate) {
        const result = options.validate(newRowData);
        if (result) {
          if (updateTouched) {
            const newTouched: { [x: string]: boolean } = {};
            Object.keys(result).forEach((key) => {
              newTouched[key] = true;
            });

            setTouched(newTouched);
          }

          updateErrors(result || {});

          return (
            Object.keys(result).filter((key) => !!result[key]).length === 0
          );
        }
      }

      return true;
    },
    [options, updateErrors],
  );

  const validateField = useCallback(
    (fieldName: string, newRowData: T) => {
      setTouched((prev) => {
        if (!prev[fieldName]) {
          return { ...prev, [fieldName]: true };
        }
        return prev;
      });
      validate(newRowData, false);
    },
    [validate],
  );

  return {
    errors: outerError || errors,
    errorControlled: !!outerError,
    touched: outTouched || touched,
    validate,
    validateField,
  };
}

const EditingBodyRowContainer = createContainer(useEditingBodyRow);

export default EditingBodyRowContainer;
