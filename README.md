# @sinouiincubator/editable-data-table

可编辑数据表格。

## 快速入手

```tsx
import React, { useCallback } from 'react';
import EditableDataTable, {
  TableColumn,
  useEditingList,
} from '@sinouiincubator/editable-data-table';
import TextInput from 'sinoui-components/TextInput';
import DatePicker from '@sinoui/date-picker';
import Button from 'sinoui-components/Button';

function EidtableDataTableDemo() {
  const { items, add } = useEditingList([]);

  const handleAdd = useCallback(() => {
    add({});
  }, [add]);

  return (
    <>
      <Button onClick={handleAdd}>新增</Button>
      <EditableDataTable data={items} validate={validate}>
        <TableColumn
          title="姓名"
          name="userName"
          editor={TextInput}
          validate={validate2}
        />
        <TableColumn
          title="标题"
          name="title"
          editor={TextInput}
          validate={validate3}
        />
        <TableColumn
          title="出生日期"
          name="birthday"
          editor={DatePicker}
          validate={validate4}
        />
        <TableColumn
          title="操作"
          name="id"
          render={(value, row, id) => (
            <TableColumnActions>
              <TableColumnAction>保存</TableColumnAction>
              <TableColumnAction>删除</TableColumnAction>
            </TableColumnActions>
          )}
        />
      </EditableDataTable>
    </>
  );
}
```

## 本地开发

项目中有以下有用的命令。

### `yarn start`

在开发和监听模式下启动项目。当代码发生变化时就会重新编译代码。它同时会实时地向你汇报项目中的代码错误。

### `yarn build`

打包，并将打包文件放在`dist`文件夹中。使用 rollup 对代码做优化并打包成多种格式（`Common JS`，`UMD`和`ES Module`）。

### `yarn lint`

`yarn lint`会检查整个项目是否有代码错误、风格错误。

开启 vscode 的 eslint、prettier 插件，在使用 vscode 编码时，就会自动修正风格错误、提示语法错误。

### `yarn format`

`yarn format`可以自动调整整个项目的代码风格问题。

### `yarn test`

`yarn test`以监听模式启动 jest，运行单元测试。

开启 vscode 的 jest 插件，会在文件变化时自动运行单元测试。
