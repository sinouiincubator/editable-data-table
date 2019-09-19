import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataTableCellEditor from '../DataTableCellEditor';
import DataTableRowContext from '../shared/DataTableRowContext';
import { RowType } from '../shared/constants';
import EditingBodyRowContainer from '../shared/EditingBodyRowContainer';

afterEach(cleanup);

it('从编辑框中获取数据并更新状态', () => {
  const { getByDisplayValue } = render(
    <DataTableRowContext.Provider
      value={{
        data: { title: '标题' },
        index: 0,
        editing: true,
        type: RowType.Body,
      }}
    >
      <EditingBodyRowContainer.Provider>
        <DataTableCellEditor editor="input" name="title" />
      </EditingBodyRowContainer.Provider>
    </DataTableRowContext.Provider>,
  );

  const input = getByDisplayValue('标题');

  expect(input).toBeVisible();

  fireEvent.change(input, { target: { value: '新的标题' } });
  expect(input).toHaveValue('新的标题');
});

it('change事件传递新的值，而不是事件', () => {
  const Editor = ({
    value,
    onChange,
  }: {
    value: string;
    onChange: (value: string) => void;
  }) => {
    return (
      <>
        <input value={value} />
        <button type="button" onClick={() => onChange('新的标题')}>
          修改
        </button>
      </>
    );
  };
  const { getByDisplayValue, getByText } = render(
    <DataTableRowContext.Provider
      value={{
        data: { title: '标题' },
        index: 0,
        editing: true,
        type: RowType.Body,
      }}
    >
      <EditingBodyRowContainer.Provider>
        <DataTableCellEditor editor={Editor} name="title" />
      </EditingBodyRowContainer.Provider>
    </DataTableRowContext.Provider>,
  );

  const input = getByDisplayValue('标题');
  expect(input).toBeVisible();

  fireEvent.click(getByText('修改'));
  expect(input).toHaveValue('新的标题');
});
