/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useMemo } from 'react';
import useRestPageApi from '@sinoui/use-rest-page-api';
import Pagination from 'sinoui-components/Pagination';
import TextInput from 'sinoui-components/TextInput';
import Button from 'sinoui-components/Button';
import DatePicker from '@sinoui/datepicker';
import debounce from 'lodash/debounce';
import Form, {
  FormItem,
  Label,
  TextInput as TextInputField,
} from '@sinoui/forms';
import EditableDataTable, { TableColumn, useSimpleEditingList } from '../src';

interface Data {
  id: string;
  title?: string;
  duty?: string;
  birthday: string;
}

function CusDatePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (value?: string) => void;
}) {
  return (
    <DatePicker value={value} onChange={(event, date) => onChange(date)} />
  );
}

function validate(data: Data) {
  const result: any = {};

  if (!data.title) {
    result.title = '姓名不能为空';
  }
  return result;
}

function PaginationEditableDataTableDemo() {
  const {
    items,
    pagination,
    fetch,
    remove: asyncRemove,
    update,
    query,
  } = useRestPageApi<Data>('/api/pagination-demo', []);
  const { editingRows, setItems, items: data } = useSimpleEditingList<Data>(
    items,
    {
      alwaysEditing: true,
      validate,
    },
  );

  useEffect(() => {
    setItems(items);
  }, [items, setItems]);

  const handleOnChange = (pageNumber: number, pageSize: number) => {
    fetch(pageNumber - 1, pageSize);
  };

  const handleRemove = async (row: Data) => {
    await asyncRemove(row.id);
  };

  const debounceUpdate = useMemo(() => debounce(update, 200), [update]);

  const handleOnRowChange = async (index: number, rowData: Data) => {
    const validateResult = validate(rowData);
    if (!validateResult || Object.keys(validateResult).length === 0) {
      await debounceUpdate(rowData, false);
    }
  };

  return (
    <>
      <Form onSubmit={query as any}>
        <FormItem>
          <Label>姓名</Label>
          <TextInputField name="title" />
        </FormItem>
        <Button type="submit" raised>
          查询
        </Button>
      </Form>
      <EditableDataTable
        data={data}
        editingRows={editingRows}
        validate={validate}
        onRowChange={handleOnRowChange}
      >
        <TableColumn title="序号" order />
        <TableColumn title="标题" name="title" editor={TextInput} />
        <TableColumn title="出生日期" name="birthday" editor={CusDatePicker} />
        <TableColumn title="职务" name="duty" editor={TextInput} />
        <TableColumn
          title="操作"
          name="id"
          render={(_value, row) => (
            <>
              <Button autoWidth onClick={() => handleRemove(row)}>
                删除
              </Button>
            </>
          )}
        />
      </EditableDataTable>
      <Pagination
        pageSize={pagination.pageSize}
        total={pagination.totalElements}
        currentPage={pagination.pageNo + 1}
        onChange={handleOnChange}
      />
    </>
  );
}

export default PaginationEditableDataTableDemo;
