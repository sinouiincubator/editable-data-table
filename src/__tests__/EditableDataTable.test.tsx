import React, { useState } from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'sinoui-components/styles/defaultTheme';
import createTheme from 'sinoui-components/styles/theme';
import createPalette from 'sinoui-components/styles/palette';
import '@testing-library/jest-dom/extend-expect';
import { produce } from 'immer';
import EditableDataTable from '../EditableDataTable';
import TableColumn from '../TableColumn';

afterEach(cleanup);

it('渲染空表格: []', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <EditableDataTable data={[]}>
        <TableColumn title="标题" name="title" />
        <TableColumn title="id" name="id" />
      </EditableDataTable>
    </ThemeProvider>,
  );

  expect(getByTestId('tableHead')).toHaveTextContent('标题');
  expect(getByTestId('tableHead')).toHaveTextContent('id');

  expect(getByTestId('colgroup').querySelectorAll('col').length).toBe(2);
  expect(getByTestId('emptyInfo')).toHaveTextContent('暂无数据');
});

it('渲染空表格： undefined', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <EditableDataTable>
        <TableColumn title="标题" name="title" />
        <TableColumn title="id" name="id" />
      </EditableDataTable>
    </ThemeProvider>,
  );

  expect(getByTestId('tableHead')).toHaveTextContent('标题');
  expect(getByTestId('tableHead')).toHaveTextContent('id');

  expect(getByTestId('colgroup').querySelectorAll('col').length).toBe(2);
  expect(getByTestId('emptyInfo')).toHaveTextContent('暂无数据');
});

it('渲染一组数据', () => {
  const { getByTestId, getAllByTestId } = render(
    <ThemeProvider theme={defaultTheme}>
      <EditableDataTable
        data={[{ id: 'id1', title: '标题1' }, { id: 'id2', title: '标题2' }]}
      >
        <TableColumn title="标题" name="title" />
        <TableColumn title="id" name="id" />
      </EditableDataTable>
    </ThemeProvider>,
  );

  expect(getByTestId('tableHead')).toHaveTextContent('标题');
  expect(getByTestId('tableHead')).toHaveTextContent('id');

  expect(getByTestId('colgroup').querySelectorAll('col').length).toBe(2);
  expect(getAllByTestId('bodyRow').length).toBe(2);
  expect(getAllByTestId('bodyRow')[0]).toHaveTextContent('id1');
  expect(getAllByTestId('bodyRow')[0]).toHaveTextContent('标题1');
  expect(getAllByTestId('bodyRow')[1]).toHaveTextContent('id2');
  expect(getAllByTestId('bodyRow')[1]).toHaveTextContent('标题2');
});

it('渲染缺少id的数据', () => {
  const { container } = render(
    <ThemeProvider theme={defaultTheme}>
      <EditableDataTable
        idPropertyName="key"
        data={[{ id: 'id1', title: '标题1' }, { id: 'id2', title: '标题2' }]}
      >
        <TableColumn title="序号" order />
        <TableColumn title="标题" name="title" />
        <TableColumn title="id" name="id" />
      </EditableDataTable>
    </ThemeProvider>,
  );

  expect(container.querySelectorAll('tbody tr').length).toBe(2);
});

it('暗色主题', () => {
  const theme = createTheme({
    palette: createPalette({
      type: 'dark',
    }),
  });
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <EditableDataTable data={[]}>
        <TableColumn title="标题" name="title" />
        <TableColumn title="id" name="id" />
      </EditableDataTable>
    </ThemeProvider>,
  );

  expect(getByTestId('tableHead')).toHaveTextContent('标题');
  expect(getByTestId('tableHead')).toHaveTextContent('id');

  expect(getByTestId('colgroup').querySelectorAll('col').length).toBe(2);
  expect(getByTestId('emptyInfo')).toHaveTextContent('暂无数据');
});

it('监听变更事件', () => {
  const handleRowChange = jest.fn();
  const { getByDisplayValue } = render(
    <ThemeProvider theme={defaultTheme}>
      <EditableDataTable
        editingRows={[false, true]}
        data={[
          {
            id: '1',
            title: '标题1',
          },
          {
            id: '2',
            title: '标题2',
          },
        ]}
        onRowChange={handleRowChange}
      >
        <TableColumn name="title" editor="input" />
      </EditableDataTable>
    </ThemeProvider>,
  );

  const input = getByDisplayValue('标题2');

  fireEvent.change(input, { target: { value: '新的标题' } });

  expect(handleRowChange).toHaveBeenCalled();
  expect(handleRowChange.mock.calls[0][0]).toEqual(1);
  expect(handleRowChange.mock.calls[0][1]).toEqual({
    id: '2',
    title: '新的标题',
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validate = (rowData: any) => {
  const result: { [x: string]: string } = {};

  if (!rowData.title) {
    result.title = '必填';
  }
  if (rowData.title && rowData.title.length > 10) {
    result.title = '标题不能超过10个字';
  }
  if (rowData.title && rowData.title.startsWith('x')) {
    result.title = '名称不能以x开头';
  }

  return result;
};

it('行数据校验', () => {
  const { getByDisplayValue, container } = render(
    <ThemeProvider theme={defaultTheme}>
      <EditableDataTable
        editingRows={[false, true]}
        data={[
          {
            id: '1',
            title: '标题1',
          },
          {
            id: '2',
            title: '标题2',
          },
        ]}
        validate={validate}
      >
        <TableColumn name="title" editor="input" />
      </EditableDataTable>
    </ThemeProvider>,
  );

  const input = getByDisplayValue('标题2');
  fireEvent.change(input, { target: { value: 'x123' } });

  expect(container).toHaveTextContent('名称不能以x开头');

  fireEvent.change(input, { target: { value: 'x1234' } });
  expect(container).toHaveTextContent('名称不能以x开头');

  fireEvent.change(input, { target: { value: '1234' } });
  expect(container).not.toHaveTextContent('名称不能以x开头');
});

it('从外部校验数据行', () => {
  const { container, getByText } = render(
    <ThemeProvider theme={defaultTheme}>
      <EditableDataTable
        editingRows={[false, true]}
        data={[
          {
            id: '1',
            title: '标题1',
          },
          {
            id: '2',
            title: 'x123',
          },
        ]}
        validate={validate}
      >
        <TableColumn name="title" editor="input" />
        <TableColumn
          name="id"
          render={(_value, _row, _index, _id, context) =>
            context.editing ? (
              <button type="button" onClick={() => context.validate()}>
                校验
              </button>
            ) : null
          }
        />
      </EditableDataTable>
    </ThemeProvider>,
  );

  fireEvent.click(getByText('校验'));

  expect(container).toHaveTextContent('名称不能以x开头');
});

it('删除正在编辑的数据', () => {
  function Demo() {
    const [items, setItems] = useState([
      {
        title: '标题1',
      },
      {
        title: '标题2',
      },
      {
        title: '标题3',
      },
    ]);
    const [editingRows, setEditingRows] = useState([false, true, true]);

    const handleRemove = (index: number) => {
      const removeByIndex = produce((draft) => {
        draft.splice(0, index);
      });
      setItems(removeByIndex);
      setEditingRows(removeByIndex);
    };

    return (
      <ThemeProvider theme={defaultTheme}>
        <EditableDataTable
          editingRows={editingRows}
          data={items}
          validate={validate}
        >
          <TableColumn name="title" editor="input" />
          <TableColumn
            name="id"
            render={(_value, _item, index) => (
              <button type="button" onClick={() => handleRemove(index)}>
                删除
              </button>
            )}
          />
        </EditableDataTable>
      </ThemeProvider>
    );
  }

  const { getByDisplayValue, container, getAllByText } = render(<Demo />);

  const input = getByDisplayValue('标题2');
  fireEvent.change(input, { target: { value: 'x123' } });

  expect(container).toHaveTextContent('名称不能以x开头');

  fireEvent.click(getAllByText('删除')[1]);

  expect(container).not.toHaveTextContent('名称不能以x开头');
  expect(container).not.toHaveTextContent('x123');
});
