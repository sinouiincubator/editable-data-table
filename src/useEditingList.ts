import useRestListApi from '@sinoui/use-rest-list-api';
import { useState, useEffect } from 'react';
import { produce } from 'immer';

interface Options {
  idPropertyName?: string;
}

/**
 * 维护可编辑列表的hook
 */
export default function useEditingList<T>(
  url: string,
  defaultValue: T[],
  options?: Options,
) {
  const { idPropertyName = 'id' } = options || {};
  const {
    items,
    setItems,
    remove,
    removeItemAt,
    update,
    save,
  } = useRestListApi(url, defaultValue);
  const [editingRows, setEditingRows] = useState(() =>
    defaultValue.map(() => false),
  );

  useEffect(() => {
    setEditingRows(() => items.map(() => false));
  }, [items]);

  const add = () => {
    setItems([...items, {}]);
    setEditingRows((prev) => [...prev, true]);
  };

  const asyncRemove = async (index: number) => {
    if (items[index][idPropertyName]) {
      await remove(items[index][idPropertyName]);
      setEditingRows(
        produce(editingRows, (draft) => {
          draft.splice(index, 1);
        }),
      );
    } else {
      removeItemAt(index);
      setEditingRows(
        produce(editingRows, (draft) => {
          draft.splice(index, 1);
        }),
      );
    }
  };

  const asyncUpdate = async (row: T, index: number) => {
    try {
      if (items[index][idPropertyName]) {
        await update(row);
      } else {
        await save(row);
      }

      setEditingRows(
        produce(editingRows, (draft) => {
          draft[index] = false;
        }),
      );
    } catch (error) {
      throw error;
    }
  };

  const edit = (index: number) => {
    setEditingRows(
      produce(editingRows, (draft) => {
        draft[index] = true;
      }),
    );
  };

  return {
    items,
    editingRows,
    add,
    remove: asyncRemove,
    edit,
    save: asyncUpdate,
    idPropertyName,
  };
}
