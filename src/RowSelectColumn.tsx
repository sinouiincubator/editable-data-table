import React from 'react';
import Checkbox from 'sinoui-components/Checkbox';
import TableColumn from './TableColumn';

interface Props {
  /**
   * 选中行
   */
  selectedRows: number[];
  /**
   * 是否全选
   */
  isAllSelected: boolean;
  /**
   * 是否选中部分
   */
  isContainsSelected: boolean;
  /**
   * 全选时的回调函数
   */
  toggleAllSelected: () => void;
  /**
   * 选中一行时的回调函数
   */
  toggleRowSelected: (index: number) => void;
}

function RowSelectColumn(props: Props) {
  const {
    isAllSelected,
    isContainsSelected,
    toggleAllSelected,
    selectedRows,
    toggleRowSelected,
  } = props;

  return (
    <TableColumn
      width={50}
      title={
        <Checkbox
          checked={isAllSelected}
          indeterminate={!isAllSelected && isContainsSelected}
          onChange={toggleAllSelected}
        />
      }
      render={(_value, _row, index, id, context) => (
        <Checkbox
          checked={selectedRows.indexOf(index) !== -1}
          onChange={() => toggleRowSelected(index)}
        />
      )}
    />
  );
}

export default RowSelectColumn;
