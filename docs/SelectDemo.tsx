import React from 'react';
import TextInput from 'sinoui-components/TextInput';
import Button from 'sinoui-components/Button';
import Confirm from 'sinoui-components/Confirm';
import EditableDataTable, {
  TableColumn,
  useSimpleEditingList,
  RowSelectColumn,
} from '../src';
import './SelectRow.css';

interface Data {
  id?: string;
  title?: string;
  note?: string;
}

const data = [
  { id: '1', title: '标题1', note: '备注1' },
  { id: '2', title: '标题2', note: '备注2' },
  { id: '3', title: '标题3', note: '备注3' },
  { id: '4', title: '标题4', note: '备注4' },
];

function SelectDemo() {
  const {
    editingRows,
    items,
    remove,
    selectedRows,
    isAllSelected,
    isContainsSelected,
    toggleAllSelected,
    toggleRowSelected,
  } = useSimpleEditingList<Data>(data, {
    alwaysEditing: true,
  });

  /**
   * 自定义数据行的样式，如果是选中行，设置一个class名称
   * @param index 数据行的索引
   */
  const handleRowClassName = (index: number) => {
    if (selectedRows.indexOf(index) !== -1) {
      return 'sinoui-data-table-body-row_selected';
    }
    return '';
  };

  return (
    <>
      <Confirm
        message={`是否确定删除第${selectedRows
          .map((row) => row + 1)
          .join('、')}条数据？`}
        onOk={() => remove(selectedRows)}
      >
        <Button>删除</Button>
      </Confirm>

      <EditableDataTable
        data={items}
        editingRows={editingRows}
        rowClassName={handleRowClassName}
      >
        <RowSelectColumn
          selectedRows={selectedRows}
          isAllSelected={isAllSelected}
          isContainsSelected={isContainsSelected}
          toggleAllSelected={toggleAllSelected}
          toggleRowSelected={toggleRowSelected}
        />
        <TableColumn title="序号" order />
        <TableColumn title="标题" name="title" editor={TextInput} />
        <TableColumn title="备注" name="note" editor={TextInput} />
      </EditableDataTable>
    </>
  );
}

export default SelectDemo;
