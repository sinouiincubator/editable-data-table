/* eslint-disable @typescript-eslint/no-explicit-any */
import useRestListApi, { Options } from '@sinoui/use-rest-list-api';
import { useEffect, useCallback } from 'react';
import useSimpleEditingList, {
  SimpleEditingListOptions,
} from './useSimpleEditingList';

/**
 * 维护可编辑列表的hook
 */
export default function useEditingList<T>(
  url: string,
  defaultValue: T[] = [],
  options?: Options<T> & SimpleEditingListOptions<T>,
) {
  const { keyName = 'id', alwaysEditing = false } = options || {};
  const {
    items: originItems,
    remove,
    update,
    save,
    isLoading,
    isError,
    query,
    fetch,
    sortWith,
    reload,
    reset,
    searchParams,
    sorts,
  } = useRestListApi<T>(url, defaultValue, options);
  const {
    setItems,
    remove: removeEditingItems,
    updateItem,
    setReadonly,
    ...rest
  } = useSimpleEditingList(originItems, options);

  useEffect(() => {
    setItems(originItems);
  }, [setItems, originItems]);

  const getItemId = useCallback((item: any) => item[keyName], [keyName]);
  /**
   * 删除数据行
   *
   * @param row 数据行对象或者一组数据行与索引的数组
   * @param index 数据行所在的索引位置
   */
  const asyncRemove = useCallback(
    async (row: T | [T, number][], index?: number) => {
      if (Array.isArray(row)) {
        const savedRowIds = row
          .map(([item]) => getItemId(item))
          .filter(Boolean);
        if (savedRowIds.length > 0) {
          await remove(savedRowIds, false);
        }
      } else if (getItemId(row)) {
        await remove(getItemId(row), false);
      }

      removeEditingItems(
        Array.isArray(row) ? row.map(([, idx]) => idx) : (index as number),
      );
    },
    [remove, removeEditingItems, getItemId],
  );

  /**
   * 更新数据行
   *
   * @param row 数据行对象
   * @param index 数据行所在位置
   */
  const asyncUpdate = useCallback(
    async (row: T, index: number) => {
      let newRow;
      if (getItemId(row)) {
        newRow = await update(row, false);
      } else {
        newRow = await save(row, false);
      }

      updateItem(index, newRow);

      if (!alwaysEditing) {
        setReadonly(index);
      }
    },
    [getItemId, updateItem, alwaysEditing, update, save, setReadonly],
  );

  return {
    ...rest,
    setItems,
    updateItem,
    query,
    fetch,
    sortWith,
    reload,
    reset,
    searchParams,
    sorts,
    isLoading,
    isError,
    remove: asyncRemove,
    save: asyncUpdate,
    idPropertyName: keyName,
    setReadonly,
  };
}
