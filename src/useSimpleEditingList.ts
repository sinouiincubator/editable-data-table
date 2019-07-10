import { useRef, useEffect, useState, useCallback } from 'react';
import { produce } from 'immer';
import shallowEqual from 'shallowequal';

/**
 * 错误结果
 */
interface ErrorResult {
  [fieldName: string]: string;
}

/**
 * 被点击了的状态
 */
interface TouchedState {
  [fieldName: string]: boolean;
}

interface Options<T> {
  /**
   * 单元格表单域是否一致处于编辑状态。
   */
  alwaysEdting?: boolean;

  /**
   * 验证行数据的函数
   */
  validate?: (item: T) => ErrorResult | undefined;

  /**
   * 需要编辑的表单域
   */
  fields?: string[];
}

/**
 * 可编辑列表外置状态管理hook
 *
 * 支持：
 *
 * * 列表数据管理
 * * 可编辑状态维护
 * * 单元格编辑器校验
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useSimpleEditingList<T = any>(
  defaultItems: T[] = [],
  options: Options<T> = {},
) {
  const [items, setItems] = useState<T[]>(defaultItems);
  const [editingRows, setEditingRows] = useState<boolean[]>(() =>
    new Array(defaultItems.length).fill(!!options.alwaysEdting),
  );
  const [errors, setErrors] = useState<ErrorResult[]>(() =>
    new Array(defaultItems.length).fill({}),
  );
  const [touched, setTouched] = useState<TouchedState[]>(() =>
    new Array(defaultItems.length).fill({}),
  );
  const optionsRef = useRef(options);

  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  /**
   * 编辑
   */
  const edit = useCallback((rowIndex: number) => {
    setEditingRows(
      produce((draft) => {
        draft[rowIndex] = true;
      }),
    );
  }, []);

  /**
   * 设置为只读状态
   */
  const setReadonly = useCallback((rowIndex: number) => {
    setEditingRows(
      produce((draft) => {
        draft[rowIndex] = false;
      }),
    );
  }, []);

  /**
   * 更换items
   *
   * @param {T[]} newItems 新的items
   */
  const replaceItems = useCallback((newItems: T[]) => {
    setItems(newItems);
    setEditingRows(
      new Array(newItems.length).fill(!!optionsRef.current.alwaysEdting),
    );

    setErrors(new Array(newItems.length).fill({}));
    setTouched(new Array(newItems.length).fill({}));
  }, []);

  /**
   * 新增一条数据
   */
  const add = useCallback((item: T) => {
    setItems(
      produce((draft) => {
        draft.push(item);
      }),
    );

    setEditingRows(
      produce((draft) => {
        draft.push(true);
      }),
    );

    setErrors(
      produce((draft) => {
        draft.push({});
      }),
    );

    setTouched(
      produce((draft) => {
        draft.push({});
      }),
    );
  }, []);

  /**
   * 删除数据
   */
  const remove = useCallback((index: number) => {
    const removeByIndex = produce((draft) => {
      draft.splice(index, 1);
    });

    setItems(removeByIndex);
    setEditingRows(removeByIndex);
    setErrors(removeByIndex);
    setTouched(removeByIndex);
  }, []);

  /**
   * 删除一组数据
   */
  const removeItems = useCallback((indexes: number[]) => {
    const removeByIndexes = <T>(array: T[]) =>
      array.filter((_, index) => indexes.indexOf(index) === -1);
    setItems(removeByIndexes);
    setEditingRows(removeByIndexes);
    setErrors(removeByIndexes);
    setTouched(removeByIndexes);
  }, []);

  /**
   * 更新数据项
   */
  const updateItem = useCallback((index: number, item: T) => {
    setItems(
      produce((draft) => {
        draft[index] = item;
      }),
    );
  }, []);

  /**
   * 验证一个单元格
   */
  const validateField = useCallback(
    (index: number, fieldName: string, rowData: T) => {
      const { validate } = optionsRef.current;

      if (validate) {
        const rowErrors = validate(rowData) || {};

        setErrors(
          produce((draft) => {
            if (!shallowEqual(draft[index], rowErrors)) {
              draft[index] = rowErrors;
            }
          }),
        );

        setTouched(
          produce((draft) => {
            draft[index][fieldName] = true;
          }),
        );
      }
    },
    [],
  );

  /**
   * 校验列表中正在编辑的数据
   */
  const validateAllEditingRows = () => {
    const { fields, validate } = optionsRef.current;

    if (!fields) {
      throw new Error(
        '必须在useSimpleEditingList的options中指定fields，才能使用validateAllEditingRows方法。',
      );
    }

    if (!validate) {
      return true;
    }

    const updateErrors = produce((draft: ErrorResult[]) => {
      items
        .map((item, index) => {
          if (!editingRows[index]) {
            return {};
          }
          return validate(item) || {};
        })
        .forEach((error, index) => {
          if (!shallowEqual(draft[index], error)) {
            draft[index] = error;
          }
        });
    });

    const newErrors = updateErrors(errors);
    setErrors(newErrors);
    setTouched(
      produce((draft) => {
        const defaultTouchedState: TouchedState = {};
        fields.forEach((field) => {
          defaultTouchedState[field] = true;
        });

        items.forEach((_item, index) => {
          if (!editingRows[index]) {
            return;
          }

          draft[index] = defaultTouchedState;
        });
      }),
    );

    return (
      newErrors &&
      newErrors.every(
        (error) =>
          Object.keys(error).filter((key) => !!error[key]).length === 0,
      )
    );
  };

  return {
    items,
    setItems: replaceItems,
    editingRows,
    edit,
    setReadonly,
    add,
    remove,
    removeItems,
    updateItem,
    errors,
    touched,
    validateField,
    validateAllEditingRows,
  };
}

export default useSimpleEditingList;
