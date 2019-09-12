import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'sinoui-components/styles/defaultTheme';
import useSimpleEditingList from '../useSimpleEditingList';
import EditableDataTable from '../EditableDataTable';
import RowSelectColumn from '../RowSelectColumn';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SimpleDemo({ editingList }: { editingList: any }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <EditableDataTable data={editingList.items} editingRows={[true, false]}>
          <RowSelectColumn
            startIndex={0}
            selectedRows={editingList.selectedRows}
            isAllSelected={editingList.isAllSelected}
            isContainsSelected={editingList.isContainsSelected}
            toggleAllSelected={editingList.toggleAllSelected}
            toggleRowSelected={editingList.toggleRowSelected}
          />
        </EditableDataTable>
      </div>
    </ThemeProvider>
  );
}

it('渲染组件', () => {
  function Demo() {
    const editingList = useSimpleEditingList([
      { id: '2', title: '标题2' },
      { id: '3', title: '标题3' },
    ]);

    return <SimpleDemo editingList={editingList} />;
  }
  const { container } = render(<Demo />);

  const selectedCheckbox = container.querySelectorAll(
    '.sinoui-checkbox-button-input',
  )[1];

  fireEvent.click(selectedCheckbox);

  expect(
    container.querySelectorAll('.sinoui-checkbox-button__checked').length,
  ).toBe(1);
});
