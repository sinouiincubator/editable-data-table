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

/**
 * 生成序列数组
 *
 * @param start 开始
 * @param end 结束
 */
function range(start: number, end: number) {
  return new Array(end - start).fill(null).map((_, idx) => start + idx);
}

/**
 * 分页的选中行状态
 *
 * @param editingList 可编辑列表
 * @param currentPage 当前页
 * @param pageSize 页大小
 */
function usePaginationSelectedRows(
  editingList: any,
  currentPage: number,
  pageSize: number,
) {
  /**
   * 是否全部选中
   */
  const isAllSelected = useMemo(() => {
    return range(currentPage * pageSize, (currentPage + 1) * pageSize).every(
      (idx) => editingList.selectedRows.indexOf(idx) !== -1,
    );
  }, [currentPage, editingList.selectedRows, pageSize]);

  /**
   * 是否包含选中
   */
  const isContainsSelected = useMemo(() => {
    return range(currentPage * pageSize, (currentPage + 1) * pageSize).some(
      (idx) => editingList.selectedRows.indexOf(idx) !== -1,
    );
  }, [currentPage, editingList.selectedRows, pageSize]);

  /**
   * 切换全选
   */
  const toggleAllSelected = useCallback(() => {
    let rows: number[] = editingList.selectedRows;
    const start = currentPage * pageSize;
    const end = (currentPage + 1) * pageSize;
    if (isAllSelected) {
      rows = rows.filter((idx) => idx < start || idx >= end);
    } else {
      rows = [
        ...rows,
        ...range(start, end).filter((idx) => rows.indexOf(idx) === -1),
      ];
    }

    editingList.setSelectedRows(rows);
  }, [currentPage, editingList, isAllSelected, pageSize]);

  /**
   * 删除所有选中的数据
   */
  const removeAllSelectedRows = async () => {
    const rows = editingList.items
      .map((item, idx) => [item, idx])
      .filter((_data, index) => editingList.selectedRows.includes(index));
    await editingList.remove(rows);
  };

  return {
    isAllSelected,
    isContainsSelected,
    toggleAllSelected,
    removeAllSelectedRows,
  };
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

  const handleRowClassName = (index: number) => {
    if (editingList.selectedRows.includes(index + currentPage * pageSize)) {
      return 'sinoui-data-table-body-row_selected';
    }

    return '';
  };

  const paginationSelectedRows = usePaginationSelectedRows(
    editingList,
    currentPage,
    pageSize,
  );

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
      <Button onClick={paginationSelectedRows.removeAllSelectedRows}>
        删除
      </Button>
      <EditableDataTable
        data={data}
        editingRows={editingRows}
        idPropertyName={editingList.idPropertyName}
        rowClassName={handleRowClassName}
      >
        <RowSelectColumn
          startIndex={currentPage * pageSize}
          selectedRows={editingList.selectedRows}
          isAllSelected={paginationSelectedRows.isAllSelected}
          isContainsSelected={paginationSelectedRows.isContainsSelected}
          toggleAllSelected={paginationSelectedRows.toggleAllSelected}
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
