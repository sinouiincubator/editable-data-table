import useRestListApi, { Options } from '@sinoui/use-rest-list-api';
import { useState, useEffect, useCallback } from 'react';
import { produce } from 'immer';

/**
 * 维护可编辑列表的hook
 */
export default function useEditingList<T>(
  url: string,
  defaultValue: T[] = [],
  options?: Options<T>,
) {
  const { keyName = 'id' } = options || {};
  const {
    items,
    setItems,
    remove,
    removeItemAt,
    update,
    save,
    isLoading,
    addItem,
  } = useRestListApi<T>(url, defaultValue);
  const [editingRows, setEditingRows] = useState(() =>
    defaultValue.map(() => false),
  );

  const itemsCount = items.length;
  useEffect(() => {
    setEditingRows((prev) => {
      if (itemsCount !== prev.length) {
        return new Array(itemsCount).fill(false);
      }
      return prev;
    });
  }, [isLoading, itemsCount]);

  const add = () => {
    setItems([...items, {}]);
    setEditingRows([...editingRows, true]);
  };

  const asyncRemove = useCallback(
    async (row: T, index: number) => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((row as any)[keyName]) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          await remove((row as any)[keyName]);
          setEditingRows(
            produce(editingRows, (draft) => {
              draft.splice(index, 1);
            }),
          );
        } else {
          removeItemAt(index);
          setEditingRows(
            produce((draft) => {
              draft.splice(index, 1);
            }),
          );
        }
      } catch (error) {
        throw error;
      }
    },
    [editingRows, keyName, remove, removeItemAt],
  );

  const asyncUpdate = useCallback(
    async (row: T, index: number) => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((row as any)[keyName]) {
          await update(row);
        } else {
          const result = await save(row, false);
          removeItemAt(index);
          addItem(result);
        }

        setEditingRows(
          produce(editingRows, (draft) => {
            draft[index] = false;
          }),
        );
      } catch (error) {
        throw error;
      }
    },
    [addItem, editingRows, keyName, removeItemAt, save, update],
  );

  const edit = useCallback(
    (index: number) => {
      setEditingRows(
        produce(editingRows, (draft) => {
          draft[index] = true;
        }),
      );
    },
    [editingRows],
  );

  return {
    items,
    editingRows,
    add,
    remove: asyncRemove,
    edit,
    save: asyncUpdate,
    idPropertyName: keyName,
  };
}
