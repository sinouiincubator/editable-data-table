# @sinouiincubator/editable-data-table

可编辑数据表格。

可编辑列表（EditableDataTable）提供以下功能：

- 展现列表数据（不支持分页，但是可以与分页功能组合使用）
- 编辑数据行
- 校验数据行

可以基于可编辑表格实现数据组的增删改查功能。具体详情见[官方文档](https://sinouiincubator.github.io/editable-data-table)。

[开始学习如何使用可编辑列表吧](https://sinouiincubator.github.io/editable-data-table/)。

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

function validate(data) {
  const result = {};
  if (!data.userName) {
    result.userName = '必填';
  }
  if (data.duty && data.duty.startsWith('1')) {
    result.duty = '标题不能以1开头';
  }
  return result;
}

function EidtableDataTableDemo() {
  const {
    items,
    add,
    edit,
    save,
    remove,
    idPropertyName,
    editingRows,
  } = useEditingList('/api/tests', []);

  const handleSave = async (row, index, context) => {
    if (!context.validate()) {
      alert('数据填写不完整');
    } else {
      await save(row, index);
      alert('保存成功');
    }
  };

  return (
    <>
      <Button onClick={add}>新增</Button>
      <EditableDataTable
        data={items}
        validate={validate}
        editingRows={editingRows}
        idPropertyName={idPropertyName}
      >
        <TableColumn title="姓名" name="userName" editor={TextInput} />
        <TableColumn title="职务" name="duty" editor={TextInput} />
        <TableColumn title="出生日期" name="birthday" editor={DatePicker} />
        <TableColumn
          title="操作"
          name="id"
          render={(value, row, index, id, context) => (
            <>
              {context.editing ? (
                <Button
                  autoWidth
                  onClick={() => handleSave(row, index, context)}
                >
                  保存
                </Button>
              ) : (
                <Button autoWidth onClick={() => edit(index)}>
                  编辑
                </Button>
              )}
              <Button autoWidth onClick={() => remove(row, index)}>
                删除
              </Button>
            </>
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
