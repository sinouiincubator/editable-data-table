import React, { useState, useMemo, useCallback } from 'react';
import Pagination from 'sinoui-components/Pagination';
import Button from 'sinoui-components/Button';
import TextInput from 'sinoui-components/TextInput';
import EditableDataTable, {
  useEditingList,
  TableColumn,
  RowSelectColumn,
} from '../src';
import './PaginationEditableTableDemo.css';

interface Article {
  id: string;
  title: string;
}

/**
 * 分页状态hook
 */
function usePagination(
  defaultCurrentPage: number = 0,
  defaultPageSize: number = 10,
): [number, number, (pageNo: number, pageSize: number) => void] {
  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);
  const [pageSize, setPageSize] = useState(defaultPageSize);

  const update = (pageNo: number, newPageSize: number) => {
    setCurrentPage(pageNo);
    setPageSize(newPageSize);
  };

  return [currentPage, pageSize, update];
}

/**
 * 获取分页列表
 *
 * @param items 列表
 * @param currentPage 当前页
 * @param pageSize 页大小
 */
function usePaginationList<T>(
  items: T[],
  currentPage: number,
  pageSize: number,
) {
  const data = useMemo(
    () => items.slice(currentPage * pageSize, (currentPage + 1) * pageSize),
    [items, pageSize, currentPage],
  );

  return data;
}

/**
 * 获取分页编辑列表的动作
 *
 * @param editingList 编辑列表
 * @param currentPage 当前页
 * @param pageSize 页大小
 */
function usePaginationEditingListActions<T>(
  editingList: any,
  currentPage: number,
  pageSize: number,
) {
  const add = useCallback(() => {
    editingList.add({}, currentPage * pageSize);
  }, [currentPage, editingList, pageSize]);

  const save = useCallback(
    (item: T, index: number) => {
      return editingList.save(item, currentPage * pageSize + index);
    },
    [currentPage, editingList, pageSize],
  );

  const edit = useCallback(
    (index: number) => {
      editingList.edit(currentPage * pageSize + index);
    },
    [currentPage, editingList, pageSize],
  );

  const remove = useCallback(
    (item: T, index: number) => {
      return editingList.remove(item, currentPage * pageSize + index);
    },
    [currentPage, editingList, pageSize],
  );

  return { add, save, edit, remove };
}

function Demo() {
  const editingList = useEditingList<Partial<Article>>(
    '/api/pagination-show-demo',
    [],
  );
  const [currentPage, pageSize, update] = usePagination();
  const data = usePaginationList(editingList.items, currentPage, pageSize);
  const editingRows = usePaginationList(
    editingList.editingRows,
    currentPage,
    pageSize,
  );

  const { add, save, edit, remove } = usePaginationEditingListActions(
    editingList,
    currentPage,
    pageSize,
  );

  const [searchText, setSearchText] = useState('');
  const handleQuery = () => {
    editingList.query({ title: searchText });
  };

  const handleBatchRemove = async () => {
    const rows = [];
    data
      .map((item, idx) => rows.push([item, idx]))
      .filter((_data, index) => editingList.selectedRows.includes(index));
    await editingList.remove(rows);
  };

  const isAllSelected = useMemo(() => {
    for (
      let i = currentPage * pageSize;
      i < (currentPage + 1) * pageSize;
      i += 1
    ) {
      if (editingList.selectedRows.indexOf(i) === -1) {
        return false;
      }
    }
    return true;
  }, [currentPage, editingList.selectedRows, pageSize]);

  const toggleAllSelected = useCallback(() => {
    let rows: number[] = editingList.selectedRows;
    const start = currentPage * pageSize;
    const end = (currentPage + 1) * pageSize;
    if (isAllSelected) {
      rows = rows.filter((idx) => idx < start || idx >= end);
    } else {
      for (let i = start; i < end; i += 1) {
        if (rows.indexOf(i) === -1) {
          rows.push(i);
        }
      }
    }

    editingList.setSelectedRows([...rows]);
  }, [currentPage, editingList, isAllSelected, pageSize]);

  const handleRowClassName = (index: number) => {
    if (editingList.selectedRows.includes(index)) {
      return 'sinoui-data-table-body-row_selected';
    }

    return '';
  };

  return (
    <div>
      <TextInput
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <Button raised onClick={handleQuery}>
        查询
      </Button>
      <Button raised onClick={add}>
        新增
      </Button>
      <Button onClick={handleBatchRemove}>删除</Button>
      <EditableDataTable
        data={data}
        editingRows={editingRows}
        idPropertyName={editingList.idPropertyName}
        rowClassName={handleRowClassName}
      >
        <RowSelectColumn
          startIndex={currentPage * pageSize}
          selectedRows={editingList.selectedRows}
          isAllSelected={isAllSelected}
          isContainsSelected={editingList.isContainsSelected}
          toggleAllSelected={toggleAllSelected}
          toggleRowSelected={editingList.toggleRowSelected}
        />
        <TableColumn name="id" title="id" />
        <TableColumn name="title" title="标题" editor="input" />
        <TableColumn
          title="操作"
          name="id"
          render={(_value, item, index, _id, context) => (
            <>
              {context.editing ? (
                <Button autoWidth onClick={() => save(item, index)}>
                  保存
                </Button>
              ) : (
                <Button autoWidth onClick={() => edit(index)}>
                  编辑
                </Button>
              )}
              <Button
                autoWidth
                color="danger"
                onClick={() => remove(item, index)}
              >
                删除
              </Button>
            </>
          )}
        />
      </EditableDataTable>
      <Pagination
        pageSize={pageSize}
        total={editingList.items.length}
        currentPage={currentPage + 1}
        onChange={(pageNo, size) => update(pageNo - 1, size)}
      />
    </div>
  );
}

export default Demo;
