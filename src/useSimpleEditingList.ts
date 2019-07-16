import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { produce } from 'immer';
import shallowEqual from 'shallowequal';
import { ErrorResult, SimpleEditingListResult, TouchedState } from './types';

export interface SimpleEditingListOptions<T> {
  /**
   * 单元格表单域是否一直处于编辑状态。
   */
  alwaysEditing?: boolean;

  /**
   * 验证行数据的函数
   */
  validate?: (item: T) => ErrorResult | undefined;
}

/**
 * 可编辑列表外置状态管理hook
 *
 * 支持：
 *
 * * 列表数据管理
 * * 可编辑状态维护
 * * 单元格编辑器校验
 * * 行选择状态
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useSimpleEditingList<T = any>(
  defaultItems: T[] = [],
  options: SimpleEditingListOptions<T> = {},
): SimpleEditingListResult<T> {
  const [items, setItems] = useState<T[]>(defaultItems);
  const [editingRows, setEditingRows] = useState<boolean[]>(() =>
    new Array(defaultItems.length).fill(!!options.alwaysEditing),
  );
  const [errors, setErrors] = useState<ErrorResult[]>(() =>
    new Array(defaultItems.length).fill({}),
  );
  const [touched, setTouched] = useState<TouchedState[]>(() =>
    new Array(defaultItems.length).fill({}),
  );
  const [selectedRows, setSelectedRows] = useState<boolean[]>(() =>
    new Array(defaultItems.length).fill(false),
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
      new Array(newItems.length).fill(!!optionsRef.current.alwaysEditing),
    );

    setErrors(new Array(newItems.length).fill({}));
    setTouched(new Array(newItems.length).fill({}));
    setSelectedRows(new Array(newItems.length).fill(false));
  }, []);

  /**
   * 新增一条数据
   */
  const add = useCallback((item: Partial<T> = {}, index: number = -1) => {
    const addAt = produce(<V>(draft: V[], value: V) => {
      if (index === -1 || index >= draft.length) {
        draft.push(value);
      } else {
        draft.splice(index, 0, value);
      }
    });
    setItems((prev) => addAt(prev, item));

    setEditingRows((prev) => addAt(prev, true));

    setErrors((prev) => addAt(prev, {}));

    setTouched((prev) => addAt(prev, {}));

    setSelectedRows((prev) => addAt(prev, false));
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
    setSelectedRows(removeByIndexes);
  }, []);

  /**
   * 删除数据
   */
  const remove = useCallback(
    (index: number | number[]) => {
      if (Array.isArray(index)) {
        removeItems(index);
      } else {
        const removeByIndex = produce((draft) => {
          draft.splice(index, 1);
        });

        setItems(removeByIndex);
        setEditingRows(removeByIndex);
        setErrors(removeByIndex);
        setTouched(removeByIndex);
        setSelectedRows(removeByIndex);
      }
    },
    [removeItems],
  );

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
   * 验证一个单元格的值
   *
   * @param index 单元格所在数据行索引位置
   * @param fieldName 单元格对应的字段名称
   * @param rowData 单元格所在行的数据对象
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
    const { validate } = optionsRef.current;

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
        items.forEach((_item, index) => {
          if (!editingRows[index]) {
            return;
          }

          const fieldError = newErrors[index];
          const fieldTouched: TouchedState = {};

          Object.keys(fieldError).forEach((field) => {
            fieldTouched[field] = true;
          });

          draft[index] = fieldTouched;
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

  /**
   * 是否所有的数据行都是选中的
   */
  const isAllSelected = selectedRows.length > 0 && selectedRows.every(Boolean);
  /**
   * 是否包含选中的数据行
   */
  const isContainsSelected =
    selectedRows.length > 0 && selectedRows.some(Boolean);

  /**
   * 切换全部选中状态
   */
  const toggleAllSelected = useCallback(() => {
    setSelectedRows(new Array(items.length).fill(!isAllSelected));
  }, [items.length, isAllSelected]);

  /**
   * 切换行的选中状态
   *
   * @param index 数据行所在索引位置
   */
  const toggleRowSelected = useCallback((index: number) => {
    setSelectedRows(
      produce((draft) => {
        draft[index] = !draft[index];
      }),
    );
  }, []);

  const setRowsSelected = useCallback(
    (rowIndexes: number[], selected: boolean) => {
      setSelectedRows(
        produce((draft) => {
          rowIndexes.forEach((idx) => {
            draft[idx] = selected;
          });
        }),
      );
    },
    [setSelectedRows],
  );

  const externalSelectedRows = useMemo(
    () =>
      selectedRows
        .map((selected, index) => [selected, index] as [boolean, number])
        .filter(([selected]) => !!selected)
        .map(([, index]) => index),
    [selectedRows],
  );

  return {
    items,
    setItems: replaceItems,
    editingRows,
    edit,
    setReadonly,
    add,
    remove,
    updateItem,
    errors,
    touched,
    validateField,
    validateAllEditingRows,
    selectedRows: externalSelectedRows,
    isAllSelected,
    isContainsSelected,
    toggleAllSelected,
    toggleRowSelected,
    setSelectedRows,
    setRowsSelected,
  };
}

export default useSimpleEditingList;
