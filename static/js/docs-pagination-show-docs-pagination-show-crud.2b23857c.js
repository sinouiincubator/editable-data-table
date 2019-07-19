(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./docs/pagination-show-docs/pagination-show-crud.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return s});var i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),r={},o="wrapper";function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)(o,Object.assign({},r,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u65b0\u589e\u3001\u7f16\u8f91\u4e0e\u5220\u9664"},"\u65b0\u589e\u3001\u7f16\u8f91\u4e0e\u5220\u9664"),Object(a.b)("h2",{id:"\u65b0\u589e\u6570\u636e"},"\u65b0\u589e\u6570\u636e"),Object(a.b)("p",null,"\u70b9\u51fb\u65b0\u589e\u6309\u94ae\u65f6\uff0c\u5728\u5f53\u524d\u9875\u65b0\u589e\u4e00\u6761\u6570\u636e\u3002\u8fd9\u4e2a\u8981\u6c42\u9700\u8981\u6ce8\u610f\u7684\u662f",Object(a.b)("strong",{parentName:"p"},"\u5728\u5f53\u524d\u9875"),"\u65b0\u589e\u4e00\u6761\u6570\u636e\u3002\u6240\u4ee5\u6211\u4eec\u5e94\u8be5\u6309\u7167\u4e0b\u9762\u7684\u65b9\u5f0f\u65b0\u589e\u6570\u636e\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"editingList.add({}, currentPage * pageSize);\n")),Object(a.b)("p",null,"\u793a\u4f8b\u4ee3\u7801\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import Button from 'sinoui-components/Button';\n\nfunction Demo() {\n  const handleAdd = () => {\n    editingList.add({}, currentPage * pageSize);\n  };\n\n  return (\n    <div>\n      <Button raised onClick={handleAdd}>\n        \u65b0\u589e\n      </Button>\n    </div>\n  );\n}\n")),Object(a.b)("h2",{id:"\u7f16\u8f91\u4e0e\u5220\u9664\u6570\u636e"},"\u7f16\u8f91\u4e0e\u5220\u9664\u6570\u636e"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"editingList"),"\u63d0\u4f9b\u7684",Object(a.b)("inlineCode",{parentName:"p"},"edit"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"save"),"\u548c",Object(a.b)("inlineCode",{parentName:"p"},"remove"),"\u65b9\u6cd5\u90fd\u662f\u6839\u636e\u6570\u636e\u5728\u6574\u4e2a\u5217\u8868\u7684\u7d22\u5f15\u4f4d\u7f6e\u8fdb\u884c\u64cd\u4f5c\u7684\u3002\u6240\u4ee5\u6211\u4eec\u5728\u4f7f\u7528\u8fd9\u4e9b\u65b9\u6cd5\u65f6\uff0c\u9700\u8981\u4e0e\u5206\u9875\u72b6\u6001\u76f8\u7ed3\u5408\u3002"),Object(a.b)("p",null,"\u9996\u5148\u6211\u4eec\u901a\u8fc7",Object(a.b)("inlineCode",{parentName:"p"},"TableColumn"),"\u6dfb\u52a0\u4e00\u4e2a\u64cd\u4f5c\u5217\uff1a\u5728\u7f16\u8f91\u72b6\u6001\u65f6\uff0c\u6709\u4fdd\u5b58\u548c\u5220\u9664\u6309\u94ae\uff1b\u5728\u975e\u7f16\u8f91\u72b6\u6001\u65f6\uff0c\u6709\u7f16\u8f91\u548c\u5220\u9664\u6309\u94ae\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'<EditableDataTable>\n  <TableColumn\n    title="\u64cd\u4f5c"\n    render={(value, rowData, index, id, context) => (\n      <>\n        {context.editing ? <Button>\u4fdd\u5b58</Button> : <Button>\u7f16\u8f91</Button>}\n        <Button color="danger">\u5220\u9664</Button>\n      </>\n    )}\n  />\n</EditableDataTable>\n')),Object(a.b)("p",null,"\u4fdd\u5b58\u6309\u94ae\u7684\u70b9\u51fb\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"<Button\n  onClick={() => editingList.save(rowData, currentPage * pageSize + index)}\n>\n  \u4fdd\u5b58\n</Button>\n")),Object(a.b)("p",null,"\u91cd\u70b9\u662f",Object(a.b)("inlineCode",{parentName:"p"},"currentPage * pageSize + index"),"\u3002"),Object(a.b)("p",null,"\u7f16\u8f91\u6309\u94ae\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"<Button onClick={() => editingList.edit(currentPage * pageSize + index)}>\n  \u7f16\u8f91\n</Button>\n")),Object(a.b)("p",null,"\u5220\u9664\u6309\u94ae\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"<Button\n  onClick={() => editingList.remove(rowData, currentPage * pageSize + index)}\n>\n  \u5220\u9664\n</Button>\n")),Object(a.b)("p",null,"\u5f53\u7136\uff0c\u522b\u5fd8\u4e86\u5c06",Object(a.b)("inlineCode",{parentName:"p"},"editingList.editingRows"),"\u4f20\u7ed9",Object(a.b)("inlineCode",{parentName:"p"},"EditableDataTable.editingRows"),"\uff0c\u5e76\u4e14\u5b9a\u4e49\u5355\u5143\u683c\u7f16\u8f91\u5668\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'<EditableDataTable editingRows={editingList.editingRows}>\n  <TableColumn title="\u6807\u9898" name="title" editor="input" />\n</EditableDataTable>\n')),Object(a.b)("h2",{id:"\u63d0\u70bc\u72b6\u6001\u7ba1\u7406"},"\u63d0\u70bc\u72b6\u6001\u7ba1\u7406"),Object(a.b)("p",null,"\u589e\u52a0\u3001\u5220\u9664\u3001\u4fee\u6539\u3001\u7f16\u8f91\u56db\u4e2a\u52a8\u4f5c\u90fd\u4e0e\u7ffb\u9875\u6709\u5173\u7cfb\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u8fd9\u56db\u4e2a\u65b9\u6cd5\u63d0\u70bc\u5230\u4e00\u4e2a\u81ea\u5b9a\u4e49 hook\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"/**\n * \u83b7\u53d6\u5206\u9875\u7f16\u8f91\u5217\u8868\u7684\u52a8\u4f5c\n *\n * @param editingList \u7f16\u8f91\u5217\u8868\n * @param currentPage \u5f53\u524d\u9875\n * @param pageSize \u9875\u5927\u5c0f\n */\nfunction usePaginationEditingListActions<T>(\n  editingList: any,\n  currentPage: number,\n  pageSize: number,\n) {\n  const add = useCallback(() => {\n    editingList.add({}, currentPage * pageSize);\n  }, [currentPage, editingList, pageSize]);\n\n  const save = useCallback(\n    (item: T, index: number) => {\n      return editingList.save(item, currentPage * pageSize + index);\n    },\n    [currentPage, editingList, pageSize],\n  );\n\n  const edit = useCallback(\n    (index: number) => {\n      editingList.edit(currentPage * pageSize + index);\n    },\n    [currentPage, editingList, pageSize],\n  );\n\n  const remove = useCallback(\n    (item: T, index: number) => {\n      return editingList.remove(item, currentPage * pageSize + index);\n    },\n    [currentPage, editingList, pageSize],\n  );\n\n  return { add, save, edit, remove };\n}\n")),Object(a.b)("p",null,"\u4e4b\u540e\u6211\u4eec\u7684\u4ee3\u7801\u5c31\u662f\u8fd9\u6837\u5b50\u7684\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'import React, { useState, useMemo, useCallback } from \'react\';\nimport Pagination from \'sinoui-components/Pagination\';\nimport Button from \'sinoui-components/Button\';\nimport TextInput from \'sinoui-components/TextInput\';\nimport EditableDataTable, { useEditingList, TableColumn } from \'../src\';\n\ninterface Article {\n  id: string;\n  title: string;\n}\n\n/**\n * \u5206\u9875\u72b6\u6001hook\n */\nfunction usePagination(\n  defaultCurrentPage: number = 0,\n  defaultPageSize: number = 10,\n): [number, number, (pageNo: number, pageSize: number) => void] {\n  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);\n  const [pageSize, setPageSize] = useState(defaultPageSize);\n\n  const update = (pageNo: number, newPageSize: number) => {\n    setCurrentPage(pageNo);\n    setPageSize(newPageSize);\n  };\n\n  return [currentPage, pageSize, update];\n}\n\n/**\n * \u83b7\u53d6\u5206\u9875\u5217\u8868\n *\n * @param items \u5217\u8868\n * @param currentPage \u5f53\u524d\u9875\n * @param pageSize \u9875\u5927\u5c0f\n */\nfunction usePaginationList<T>(\n  items: T[],\n  currentPage: number,\n  pageSize: number,\n) {\n  const data = useMemo(\n    () => items.slice(currentPage * pageSize, (currentPage + 1) * pageSize),\n    [items, pageSize, currentPage],\n  );\n\n  return data;\n}\n\n/**\n * \u83b7\u53d6\u5206\u9875\u7f16\u8f91\u5217\u8868\u7684\u52a8\u4f5c\n *\n * @param editingList \u7f16\u8f91\u5217\u8868\n * @param currentPage \u5f53\u524d\u9875\n * @param pageSize \u9875\u5927\u5c0f\n */\nfunction usePaginationEditingListActions<T>(\n  editingList: any,\n  currentPage: number,\n  pageSize: number,\n) {\n  const add = useCallback(() => {\n    editingList.add({}, currentPage * pageSize);\n  }, [currentPage, editingList, pageSize]);\n\n  const save = useCallback(\n    (item: T, index: number) => {\n      return editingList.save(item, currentPage * pageSize + index);\n    },\n    [currentPage, editingList, pageSize],\n  );\n\n  const edit = useCallback(\n    (index: number) => {\n      editingList.edit(currentPage * pageSize + index);\n    },\n    [currentPage, editingList, pageSize],\n  );\n\n  const remove = useCallback(\n    (item: T, index: number) => {\n      return editingList.remove(item, currentPage * pageSize + index);\n    },\n    [currentPage, editingList, pageSize],\n  );\n\n  return { add, save, edit, remove };\n}\n\nfunction Demo() {\n  const editingList = useEditingList<Partial<Article>>(\n    \'/api/pagination-show-demo\',\n    [],\n  );\n  const [currentPage, pageSize, update] = usePagination();\n  const data = usePaginationList(editingList.items, currentPage, pageSize);\n  const editingRows = usePaginationList(\n    editingList.editingRows,\n    currentPage,\n    pageSize,\n  );\n\n  const { add, save, edit, remove } = usePaginationEditingListActions(\n    editingList,\n    currentPage,\n    pageSize,\n  );\n\n  return (\n    <div>\n      <Button raised onClick={add}>\n        \u65b0\u589e\n      </Button>\n      <EditableDataTable\n        data={data}\n        editingRows={editingRows}\n        idPropertyName={editingList.idPropertyName}\n      >\n        <TableColumn name="id" title="id" />\n        <TableColumn name="title" title="\u6807\u9898" editor="input" />\n        <TableColumn\n          title="\u64cd\u4f5c"\n          name="id"\n          render={(_value, item, index, _id, context) => (\n            <>\n              {context.editing ? (\n                <Button autoWidth onClick={() => save(item, index)}>\n                  \u4fdd\u5b58\n                </Button>\n              ) : (\n                <Button autoWidth onClick={() => edit(index)}>\n                  \u7f16\u8f91\n                </Button>\n              )}\n              <Button\n                autoWidth\n                color="danger"\n                onClick={() => remove(item, index)}\n              >\n                \u5220\u9664\n              </Button>\n            </>\n          )}\n        />\n      </EditableDataTable>\n      <Pagination\n        pageSize={pageSize}\n        total={editingList.items.length}\n        currentPage={currentPage + 1}\n        onChange={(pageNo, size) => update(pageNo - 1, size)}\n      />\n    </div>\n  );\n}\n')))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs\\pagination-show-docs\\pagination-show-crud.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-pagination-show-docs-pagination-show-crud.6a753f8b8e1b1b69887d.js.map