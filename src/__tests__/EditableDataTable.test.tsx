import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'sinoui-components/styles';
import defaultTheme from 'sinoui-components/styles/defaultTheme';
import createTheme from 'sinoui-components/styles/theme';
import createPalette from 'sinoui-components/styles/palette';
import 'jest-dom/extend-expect';
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