(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./docs/pagination-show.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=t("./node_modules/react/index.js"),r=t.n(i),o=t("./node_modules/@mdx-js/react/dist/index.es.js"),s=t("./node_modules/docz/dist/index.esm.js"),u=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),c=t("./node_modules/sinoui-components/Pagination/index.js"),b=t("./node_modules/sinoui-components/Button/index.js"),l=t("./node_modules/sinoui-components/TextInput/index.js"),g=t("./src/index.ts");function d(e,n,t){return Object(i.useMemo)(function(){return e.slice(n*t,(n+1)*t)},[e,t,n])}function m(){var e=Object(g.c)("/api/pagination-show-demo",[]),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,t=Object(i.useState)(e),a=Object(u.a)(t,2),r=a[0],o=a[1],s=Object(i.useState)(n),c=Object(u.a)(s,2),b=c[0],l=c[1];return[r,b,function(e,n){o(e),l(n)}]}(),t=Object(u.a)(n,3),a=t[0],o=t[1],s=t[2],m=d(e.items,a,o),p=d(e.editingRows,a,o),P=function(e,n,t){return{add:Object(i.useCallback)(function(){e.add({},n*t)},[n,e,t]),save:Object(i.useCallback)(function(a,i){return e.save(a,n*t+i)},[n,e,t]),edit:Object(i.useCallback)(function(a){e.edit(n*t+a)},[n,e,t]),remove:Object(i.useCallback)(function(a,i){return e.remove(a,n*t+i)},[n,e,t])}}(e,a,o),j=P.add,O=P.save,S=P.edit,f=P.remove,z=Object(i.useState)(""),N=Object(u.a)(z,2),C=N[0],E=N[1];return r.a.createElement("div",null,r.a.createElement(l.b,{value:C,onChange:function(e){return E(e.target.value)}}),r.a.createElement(b.b,{raised:!0,onClick:function(){e.query({title:C})}},"\u67e5\u8be2"),r.a.createElement(b.b,{raised:!0,onClick:j},"\u65b0\u589e"),r.a.createElement(g.b,{data:m,editingRows:p,idPropertyName:e.idPropertyName},r.a.createElement(g.a,{name:"id",title:"id"}),r.a.createElement(g.a,{name:"title",title:"\u6807\u9898",editor:"input"}),r.a.createElement(g.a,{title:"\u64cd\u4f5c",name:"id",render:function(e,n,t,a,i){return r.a.createElement(r.a.Fragment,null,i.editing?r.a.createElement(b.b,{autoWidth:!0,onClick:function(){return O(n,t)}},"\u4fdd\u5b58"):r.a.createElement(b.b,{autoWidth:!0,onClick:function(){return S(t)}},"\u7f16\u8f91"),r.a.createElement(b.b,{autoWidth:!0,color:"danger",onClick:function(){return f(n,t)}},"\u5220\u9664"))}})),r.a.createElement(c.a,{pageSize:o,total:e.items.length,currentPage:a+1,onChange:function(e,n){return s(e-1,n)}}))}var p=m;m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Demo",filename:"docs/Demo.tsx"}}),t.d(n,"default",function(){return O});var P={},j="wrapper";function O(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)(j,Object.assign({},P,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u5206\u9875\u5c55\u793a\u6570\u636e\u7684\u53ef\u7f16\u8f91\u6570\u636e\u8868\u683c"},"\u5206\u9875\u5c55\u793a\u6570\u636e\u7684\u53ef\u7f16\u8f91\u6570\u636e\u8868\u683c"),Object(o.b)("p",null,"\u672c\u7ae0\u8282\u4ecb\u7ecd\u4e00\u4e2a\u573a\u666f\uff1a\u4e00\u6b21\u6027\u52a0\u8f7d\u5217\u8868\u6570\u636e\uff0c\u4f46\u662f\u5728\u524d\u7aef\u5206\u9875\u663e\u793a\u7684\u53ef\u7f16\u8f91\u6570\u636e\u8868\u683c\u3002"),Object(o.b)("p",null,"\u5305\u542b\u7684\u529f\u80fd\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5206\u9875\u5c55\u793a\u5217\u8868"),Object(o.b)("li",{parentName:"ul"},"\u52a0\u8f7d\u6570\u636e"),Object(o.b)("li",{parentName:"ul"},"\u67e5\u8be2"),Object(o.b)("li",{parentName:"ul"},"\u65b0\u589e")),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'import React, { useState, useMemo, useCallback } from \'react\';\nimport Pagination from \'sinoui-components/Pagination\';\nimport Button from \'sinoui-components/Button\';\nimport TextInput from \'sinoui-components/TextInput\';\nimport EditableDataTable, { useEditingList, TableColumn } from \'../src\';\n\ninterface Article {\n  id: string;\n  title: string;\n}\n\n/**\n * \u5206\u9875\u72b6\u6001hook\n */\nfunction usePagination(\n  defaultCurrentPage: number = 0,\n  defaultPageSize: number = 10,\n): [number, number, (pageNo: number, pageSize: number) => void] {\n  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);\n  const [pageSize, setPageSize] = useState(defaultPageSize);\n\n  const update = (pageNo: number, newPageSize: number) => {\n    setCurrentPage(pageNo);\n    setPageSize(newPageSize);\n  };\n\n  return [currentPage, pageSize, update];\n}\n\n/**\n * \u83b7\u53d6\u5206\u9875\u5217\u8868\n *\n * @param items \u5217\u8868\n * @param currentPage \u5f53\u524d\u9875\n * @param pageSize \u9875\u5927\u5c0f\n */\nfunction usePaginationList<T>(\n  items: T[],\n  currentPage: number,\n  pageSize: number,\n) {\n  const data = useMemo(\n    () => items.slice(currentPage * pageSize, (currentPage + 1) * pageSize),\n    [items, pageSize, currentPage],\n  );\n\n  return data;\n}\n\n/**\n * \u83b7\u53d6\u5206\u9875\u7f16\u8f91\u5217\u8868\u7684\u52a8\u4f5c\n *\n * @param editingList \u7f16\u8f91\u5217\u8868\n * @param currentPage \u5f53\u524d\u9875\n * @param pageSize \u9875\u5927\u5c0f\n */\nfunction usePaginationEditingListActions<T>(\n  editingList: any,\n  currentPage: number,\n  pageSize: number,\n) {\n  const add = useCallback(() => {\n    editingList.add({}, currentPage * pageSize);\n  }, [currentPage, editingList, pageSize]);\n\n  const save = useCallback(\n    (item: T, index: number) => {\n      return editingList.save(item, currentPage * pageSize + index);\n    },\n    [currentPage, editingList, pageSize],\n  );\n\n  const edit = useCallback(\n    (index: number) => {\n      editingList.edit(currentPage * pageSize + index);\n    },\n    [currentPage, editingList, pageSize],\n  );\n\n  const remove = useCallback(\n    (item: T, index: number) => {\n      return editingList.remove(item, currentPage * pageSize + index);\n    },\n    [currentPage, editingList, pageSize],\n  );\n\n  return { add, save, edit, remove };\n}\n\nfunction Demo() {\n  const editingList = useEditingList<Partial<Article>>(\n    \'/api/pagination-show-demo\',\n    [],\n  );\n  const [currentPage, pageSize, update] = usePagination();\n  const data = usePaginationList(editingList.items, currentPage, pageSize);\n  const editingRows = usePaginationList(\n    editingList.editingRows,\n    currentPage,\n    pageSize,\n  );\n\n  const { add, save, edit, remove } = usePaginationEditingListActions(\n    editingList,\n    currentPage,\n    pageSize,\n  );\n\n  const [searchText, setSearchText] = useState(\'\');\n  const handleQuery = () => {\n    editingList.query({ title: searchText });\n  };\n\n  return (\n    <div>\n      <TextInput\n        value={searchText}\n        onChange={(event) => setSearchText(event.target.value)}\n      />\n      <Button raised onClick={handleQuery}>\n        \u67e5\u8be2\n      </Button>\n      <Button raised onClick={add}>\n        \u65b0\u589e\n      </Button>\n      <EditableDataTable\n        data={data}\n        editingRows={editingRows}\n        idPropertyName={editingList.idPropertyName}\n      >\n        <TableColumn name="id" title="id" />\n        <TableColumn name="title" title="\u6807\u9898" editor="input" />\n        <TableColumn\n          title="\u64cd\u4f5c"\n          name="id"\n          render={(_value, item, index, _id, context) => (\n            <>\n              {context.editing ? (\n                <Button autoWidth onClick={() => save(item, index)}>\n                  \u4fdd\u5b58\n                </Button>\n              ) : (\n                <Button autoWidth onClick={() => edit(index)}>\n                  \u7f16\u8f91\n                </Button>\n              )}\n              <Button\n                autoWidth\n                color="danger"\n                onClick={() => remove(item, index)}\n              >\n                \u5220\u9664\n              </Button>\n            </>\n          )}\n        />\n      </EditableDataTable>\n      <Pagination\n        pageSize={pageSize}\n        total={editingList.items.length}\n        currentPage={currentPage + 1}\n        onChange={(pageNo, size) => update(pageNo - 1, size)}\n      />\n    </div>\n  );\n}\n\nexport default Demo;\n')),Object(o.b)("p",null,"\u6548\u679c\uff1a"),Object(o.b)(s.c,{__position:0,__code:"<Demo />",__scope:{props:this?this.props:t,Playground:s.c,Demo:p},mdxType:"Playground"},Object(o.b)(p,{mdxType:"Demo"})),Object(o.b)("p",null,"\u5982\u679c\u4f60\u611f\u89c9\u4e0a\u9762\u7684\u4f8b\u5b50\u6709\u70b9\u590d\u6742\uff0c\u53ef\u4ee5\u770b\u770b\u4e0b\u9762\u7684\u6b65\u9aa4\u5206\u6790\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"#%E5%8A%A0%E8%BD%BD%E5%B9%B6%E5%B1%95%E7%8E%B0%E5%88%97%E8%A1%A8%E6%95%B0%E6%8D%AE"}),"\u52a0\u8f7d\u5e76\u5c55\u73b0\u5217\u8868\u6570\u636e")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"#%E5%88%86%E9%A1%B5%E5%B1%95%E7%8E%B0%E6%95%B0%E6%8D%AE"}),"\u5206\u9875\u5c55\u73b0\u6570\u636e")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"#%E6%96%B0%E5%A2%9E%E6%95%B0%E6%8D%AE"}),"\u65b0\u589e\u6570\u636e")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"#%E7%BC%96%E8%BE%91%E4%B8%8E%E5%88%A0%E9%99%A4%E6%95%B0%E6%8D%AE"}),"\u7f16\u8f91\u4e0e\u5220\u9664\u6570\u636e")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"#%E6%9F%A5%E8%AF%A2%E5%88%97%E8%A1%A8"}),"\u67e5\u8be2\u5217\u8868"))),Object(o.b)("h2",{id:"\u52a0\u8f7d\u5e76\u5c55\u73b0\u5217\u8868\u6570\u636e"},"\u52a0\u8f7d\u5e76\u5c55\u73b0\u5217\u8868\u6570\u636e"),Object(o.b)("p",null,"\u672c\u4f8b\u9700\u8981\u4e00\u6b21\u6027\u52a0\u8f7d\u5168\u90e8\u7684\u5217\u8868\u6570\u636e\uff0c\u800c\u4e0d\u662f",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/pagination-editable-table"}),"\u5206\u9875\u52a0\u8f7d\u6570\u636e"),"\u3002\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"p"},"useEditingList"),"\u6765\u52a0\u8f7d\u5217\u8868\u6570\u636e\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'import React from \'react\';\nimport EditableDataTable, {\n  TableColumn,\n  useEditingList,\n} from \'@sinouiincubator/editable-data-table\';\n\nfunction Demo() {\n  const editingList = useEditingList(\'/api/pagination-show-demo\');\n\n  return (\n    <EditableDataTable\n      data={editingList.items}\n      idPropertyName={editingList.idPropertyName}\n    >\n      <TableColumn title="id" name="id" />\n      <TableColumn title="\u6807\u9898" name="title" />\n    </EditableDataTable>\n  );\n}\n')),Object(o.b)("h2",{id:"\u5206\u9875\u5c55\u73b0\u6570\u636e"},"\u5206\u9875\u5c55\u73b0\u6570\u636e"),Object(o.b)("p",null,"\u53ef\u4ee5\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"p"},"sinoui-components/Pagination"),"\u7ec4\u4ef6\u4f5c\u4e3a\u5206\u9875\u5668\uff0c\u5c55\u73b0\u9875\u7801\u4fe1\u606f\u548c\u5207\u6362\u9875\u7801\u7684\u64cd\u4f5c\u6309\u94ae\u3002",Object(o.b)("inlineCode",{parentName:"p"},"Pagination"),"\u7ec4\u4ef6\u9700\u8981\u4ee5\u4e0b\u51e0\u4e2a\u5173\u952e\u5c5e\u6027\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"total")," - \u5217\u8868\u6570\u636e\u603b\u6570\u76ee\u3002"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"currentPage")," - \u5f53\u524d\u9875\u7801\u3002\u4ece",Object(o.b)("inlineCode",{parentName:"li"},"1"),"\u5f00\u59cb\u3002"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pageSize")," - \u9875\u5927\u5c0f\u3002\u4e00\u9875\u80fd\u591f\u5448\u73b0\u6570\u636e\u7684\u6570\u76ee\u3002"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onChange")," - \u6307\u5b9a\u5f53\u524d\u9875\u7801\u3001\u9875\u5927\u5c0f\u53d1\u751f\u53d8\u5316\u7684\u56de\u8c03\u51fd\u6570\u3002")),Object(o.b)("p",null,"\u4e0a\u9762\u4e09\u4e2a\u5c5e\u6027\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"total"),"\u7b49\u4e8e",Object(o.b)("inlineCode",{parentName:"p"},"editingList.items.length"),"\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"currentPage"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"pageSize"),"\u662f\u53d8\u5316\u7684\u6570\u636e\uff0c\u6240\u4ee5\u9700\u8981\u5b9a\u4e49\u4e24\u4e2a\u72b6\u6001\u6765\u7ef4\u62a4\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React, { useState } from 'react';\nimport EditableDataTable, {\n  TableColumn,\n  useEditingList,\n} from '@sinouiincubator/editable-data-table';\nimport Pagination from 'sinoui-components/Pagination';\n\nfunction Demo() {\n  const editingList = useEditingList('/api/pagination-show-demo');\n  const [currentPage, setCurrentPage] = useState(0); // \u5f53\u524d\u9875\u7801\uff0c\u4e60\u60ef\u4ece0\u5f00\u59cb\u3002\u6ce8\u610f\u4e0ePagination.currentPage\u7684\u533a\u522b\u3002\n  const [pageSize, setPageSize] = useState(10);\n\n  const handlePaginationChange = (pageNo: number, newPageSize: number) => {\n    setCurrentPage(pageNo);\n    setPageSize(newPageSize);\n  };\n\n  return (\n    <div>\n      \x3c!--\u6b64\u5904\u7701\u7565EditableDataTable--\x3e\n      <Pagination\n        total={editingList.items.length}\n        currentPage={currentPage}\n        pageSize={pageSize}\n        onChange={handlePaginationChange}\n      />\n    </div>\n  );\n}\n")),Object(o.b)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u53ea\u662f\u5c55\u73b0\u51fa\u4e86\u5206\u9875\u5668\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u6765\u89e3\u51b3\u5206\u9875\u5c55\u73b0\u5217\u8868\u6570\u636e\uff08\u6ce8\u610f\u54df\uff0c\u8fd9\u4e2a\u65f6\u5019\u5217\u8868\u8fd8\u662f\u5c55\u73b0\u6240\u6709\u7684\u6570\u636e\uff09\u3002"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"EditableDataTable"),"\u7684",Object(o.b)("inlineCode",{parentName:"p"},"data"),"\u5c5e\u6027\u662f\u7528\u6765\u63a5\u6536\u9700\u8981\u5c55\u73b0\u7684\u4e00\u7ec4\u6570\u636e\u7684\u5c5e\u6027\u3002",Object(o.b)("inlineCode",{parentName:"p"},"data={editingList.items}"),"\u4f1a\u5c06\u6240\u6709\u7684\u6570\u636e\u7ed9\u4e86\u53ef\u7f16\u8f91\u8868\u683c\u5448\u73b0\u51fa\u6765\u3002\u73b0\u5728\u60f3\u8981\u53ea\u5448\u73b0\u5f53\u524d\u9875\u7684\u6570\u636e\uff0c\u90a3\u5c31\u8ba1\u7b97\u51fa\u5f53\u524d\u9875\u7684\u6570\u636e\u6570\u7ec4\u6307\u5b9a\u7ed9",Object(o.b)("inlineCode",{parentName:"p"},"data"),"\u5373\u53ef\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React, { useMemo } from 'react';\n// ... \u7701\u7565\u4e00\u90e8\u5206import\u4ee3\u7801\n\nfunction Demo() {\n  // ...\u7701\u7565\u4e00\u90e8\u5206\u4ee3\u7801\n  const data = useMemo(() =>\n    editingList.items.slice(\n      currentPage * pageSize,\n      (currentPage + 1) * pageSize,\n    ),\n    [editingList.items, currentPage, pageSize],\n  );\n\n  return (\n    <div>\n      <EditableDataTable data={data}>\n        \x3c!--\u6b64\u5904\u7701\u7565TableColumn--\x3e\n      </EditableDataTable>\n      \x3c!--\u6b64\u5904\u7701\u7565Pagination--\x3e\n    </div>\n  );\n}\n")),Object(o.b)("p",null,"\u8fd9\u91cc\u4f7f\u7528",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo"}),"React useMemo"),"\u7f13\u5b58\u4e86\u5206\u9875\u6570\u636e\u7684\u8ba1\u7b97\u3002"),Object(o.b)("p",null,"\u5b8c\u6574\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React, { useState, useMemo } from 'react';\nimport EditableDataTable, {\n  TableColumn,\n  useEditingList,\n} from '@sinouiincubator/editable-data-table';\nimport Pagination from 'sinoui-components/Pagination';\n\nfunction Demo() {\n  const editingList = useEditingList('/api/pagination-show-demo');\n\n  const [currentPage, setCurrentPage] = useState(0); // \u5f53\u524d\u9875\u7801\uff0c\u4e60\u60ef\u4ece0\u5f00\u59cb\u3002\u6ce8\u610f\u4e0ePagination.currentPage\u7684\u533a\u522b\u3002\n  const [pageSize, setPageSize] = useState(10);\n\n  const handlePaginationChange = (pageNo: number, newPageSize: number) => {\n    setCurrentPage(pageNo);\n    setPageSize(newPageSize);\n  };\n\n  const data = useMemo(\n    () =>\n      editingList.items.slice(\n        currentPage * pageSize,\n        (currentPage + 1) * pageSize,\n      ),\n    [editingList.items, currentPage, pageSize],\n  );\n\n  return (\n    <div>\n      <EditableDataTable\n        data={data}\n        idPropertyName={editingList.idPropertyName}\n      >\n        <TableColumn title=\"id\" name=\"id\" />\n        <TableColumn title=\"\u6807\u9898\" name=\"title\" />\n      </EditableDataTable>\n      <Pagination\n        total={editingList.items.length}\n        currentPage={currentPage}\n        pageSize={pageSize}\n        onChange={handlePaginationChange}\n      />\n    </div>\n  );\n}\n")),Object(o.b)("h2",{id:"\u63d0\u70bc\u72b6\u6001\u7ba1\u7406"},"\u63d0\u70bc\u72b6\u6001\u7ba1\u7406"),Object(o.b)("p",null,"Demo \u7ec4\u4ef6\u76ee\u524d\u5df2\u7ecf\u6bd4\u8f83\u590d\u6742\u4e86\uff0c\u9700\u8981\u7ba1\u7406\u5f88\u591a\u72b6\u6001\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://zh-hans.reactjs.org/docs/hooks-custom.html"}),"\u81ea\u5b9a\u4e49 hook"),"\u5c06\u72b6\u6001\u7ba1\u7406\u63d0\u70bc\u5230\u66f4\u5c0f\u7684\u51fd\u6570\u4e2d\u8fdb\u884c\u7ef4\u62a4\u3002\u73b0\u5728\u6211\u4eec\u6765\u63d0\u70bc\u4e24\u4e2a\u81ea\u5b9a\u4e49 hook\uff0c\u5206\u522b\u662f",Object(o.b)("inlineCode",{parentName:"p"},"usePagination"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"usePaginationList"),"\u3002"),Object(o.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5c06\u5206\u9875\u5668\u72b6\u6001\u548c\u66f4\u65b0\u65b9\u6cd5\u8fc1\u79fb\u5230\u4e00\u4e2a\u81ea\u5b9a\u4e49 hook \u4e2d\uff0c\u6211\u4eec\u53d6\u540d\u4e3a",Object(o.b)("inlineCode",{parentName:"p"},"usePagination"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"/**\n * \u5206\u9875\u72b6\u6001hook\n */\nfunction usePagination(\n  defaultCurrentPage: number = 0,\n  defaultPageSize: number = 10,\n): [number, number, (pageNo: number, pageSize: number) => void] {\n  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);\n  const [pageSize, setPageSize] = useState(defaultPageSize);\n\n  const update = (pageNo: number, newPageSize: number) => {\n    setCurrentPage(pageNo);\n    setPageSize(newPageSize);\n  };\n\n  return [currentPage, pageSize, update];\n}\n")),Object(o.b)("p",null,"\u8fd9\u6837 Demo \u7ec4\u4ef6\u4e2d\u7684\u5206\u9875\u4ee3\u7801\u53ef\u4ee5\u7b80\u5316\u4e00\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"function Demo() {\n  const [currentPage, pageSize, update] = usePagination();\n\n  return (\n    <div>\n      <Pagination\n        total={editingList.items.length}\n        currentPage={currentPage}\n        pageSize={pageSize}\n        onChange={(pageNo, newPageSize) => update(pageNo - 1, newPageSize)}\n      />\n    </div>\n  );\n}\n")),Object(o.b)("p",null,"\u53ef\u4ee5\u5c06\u83b7\u53d6\u5206\u9875\u7684\u5217\u8868\u6570\u636e\u4e5f\u63d0\u70bc\u5230\u81ea\u52a8\u4ee5 hook \u4e2d\uff0c\u6211\u4eec\u53d6\u540d\u4e3a",Object(o.b)("inlineCode",{parentName:"p"},"usePaginationList"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"/**\n * \u83b7\u53d6\u5206\u9875\u5217\u8868\n *\n * @param items \u5217\u8868\n * @param currentPage \u5f53\u524d\u9875\n * @param pageSize \u9875\u5927\u5c0f\n */\nfunction usePaginationList<T>(\n  items: T[],\n  currentPage: number,\n  pageSize: number,\n) {\n  const data = useMemo(\n    () => items.slice(currentPage * pageSize, (currentPage + 1) * pageSize),\n    [items, pageSize, currentPage],\n  );\n\n  return data;\n}\n")),Object(o.b)("p",null,"Demo \u7ec4\u4ef6\u53ef\u4ee5\u7b80\u5316",Object(o.b)("inlineCode",{parentName:"p"},"data"),"\u7684\u8ba1\u7b97\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"function Demo() {\n  const data = usePaginationList(editingList.items, currentPage, pageSize);\n\n  return (\n    <div>\n      <EditableDataTable data={data} />\n    </div>\n  );\n}\n")),Object(o.b)("p",null,"\u5b8c\u6574\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React, { useState, useMemo } from 'react';\nimport EditableDataTable, {\n  TableColumn,\n  useEditingList,\n} from '@sinouiincubator/editable-data-table';\nimport Pagination from 'sinoui-components/Pagination';\n\n/**\n * \u5206\u9875\u72b6\u6001hook\n */\nfunction usePagination(\n  defaultCurrentPage: number = 0,\n  defaultPageSize: number = 10,\n): [number, number, (pageNo: number, pageSize: number) => void] {\n  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);\n  const [pageSize, setPageSize] = useState(defaultPageSize);\n\n  const update = (pageNo: number, newPageSize: number) => {\n    setCurrentPage(pageNo);\n    setPageSize(newPageSize);\n  };\n\n  return [currentPage, pageSize, update];\n}\n\n/**\n * \u83b7\u53d6\u5206\u9875\u5217\u8868\n *\n * @param items \u5217\u8868\n * @param currentPage \u5f53\u524d\u9875\n * @param pageSize \u9875\u5927\u5c0f\n */\nfunction usePaginationList<T>(\n  items: T[],\n  currentPage: number,\n  pageSize: number,\n) {\n  const data = useMemo(\n    () => items.slice(currentPage * pageSize, (currentPage + 1) * pageSize),\n    [items, pageSize, currentPage],\n  );\n\n  return data;\n}\n\nfunction Demo() {\n  const editingList = useEditingList('/api/pagination-show-demo');\n  const [currentPage, pageSize, update] = usePagination();\n  const data = usePaginationList(editingList.items, currentPage, pageSize);\n\n  return (\n    <div>\n      <EditableDataTable\n        data={data}\n        idPropertyName={editingList.idPropertyName}\n      >\n        <TableColumn title=\"id\" name=\"id\" />\n        <TableColumn title=\"\u6807\u9898\" name=\"title\" />\n      </EditableDataTable>\n      <Pagination\n        total={editingList.items.length}\n        currentPage={currentPage}\n        pageSize={pageSize}\n        onChange={(pageNo, newPageSize) => update(pageNo - 1, newPageSize)}\n      />\n    </div>\n  );\n}\n")),Object(o.b)("h2",{id:"\u65b0\u589e\u6570\u636e"},"\u65b0\u589e\u6570\u636e"),Object(o.b)("p",null,"\u70b9\u51fb\u65b0\u589e\u6309\u94ae\u65f6\uff0c\u5728\u5f53\u524d\u9875\u65b0\u589e\u4e00\u6761\u6570\u636e\u3002\u8fd9\u4e2a\u8981\u6c42\u9700\u8981\u6ce8\u610f\u7684\u662f",Object(o.b)("strong",{parentName:"p"},"\u5728\u5f53\u524d\u9875"),"\u65b0\u589e\u4e00\u6761\u6570\u636e\u3002\u6240\u4ee5\u6211\u4eec\u5e94\u8be5\u6309\u7167\u4e0b\u9762\u7684\u65b9\u5f0f\u65b0\u589e\u6570\u636e\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"editingList.add({}, currentPage * pageSize);\n")),Object(o.b)("p",null,"\u793a\u4f8b\u4ee3\u7801\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import Button from 'sinoui-components/Button';\n\nfunction Demo() {\n  const handleAdd = () => {\n    editingList.add({}, currentPage * pageSize);\n  };\n\n  return (\n    <div>\n      <Button raised onClick={handleAdd}>\n        \u65b0\u589e\n      </Button>\n    </div>\n  );\n}\n")),Object(o.b)("h2",{id:"\u7f16\u8f91\u4e0e\u5220\u9664\u6570\u636e"},"\u7f16\u8f91\u4e0e\u5220\u9664\u6570\u636e"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"editingList"),"\u63d0\u4f9b\u7684",Object(o.b)("inlineCode",{parentName:"p"},"edit"),"\u3001",Object(o.b)("inlineCode",{parentName:"p"},"save"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"remove"),"\u65b9\u6cd5\u90fd\u662f\u6839\u636e\u6570\u636e\u5728\u6574\u4e2a\u5217\u8868\u7684\u7d22\u5f15\u4f4d\u7f6e\u8fdb\u884c\u64cd\u4f5c\u7684\u3002\u6240\u4ee5\u6211\u4eec\u5728\u4f7f\u7528\u8fd9\u4e9b\u65b9\u6cd5\u65f6\uff0c\u9700\u8981\u4e0e\u5206\u9875\u72b6\u6001\u76f8\u7ed3\u5408\u3002"),Object(o.b)("p",null,"\u9996\u5148\u6211\u4eec\u901a\u8fc7",Object(o.b)("inlineCode",{parentName:"p"},"TableColumn"),"\u6dfb\u52a0\u4e00\u4e2a\u64cd\u4f5c\u5217\uff1a\u5728\u7f16\u8f91\u72b6\u6001\u65f6\uff0c\u6709\u4fdd\u5b58\u548c\u5220\u9664\u6309\u94ae\uff1b\u5728\u975e\u7f16\u8f91\u72b6\u6001\u65f6\uff0c\u6709\u7f16\u8f91\u548c\u5220\u9664\u6309\u94ae\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'<EditableDataTable>\n  <TableColumn\n    title="\u64cd\u4f5c"\n    render={(value, rowData, index, id, context) => (\n      <>\n        {context.editing ? <Button>\u4fdd\u5b58</Button> : <Button>\u7f16\u8f91</Button>}\n        <Button color="danger">\u5220\u9664</Button>\n      </>\n    )}\n  />\n</EditableDataTable>\n')),Object(o.b)("p",null,"\u4fdd\u5b58\u6309\u94ae\u7684\u70b9\u51fb\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"<Button\n  onClick={() => editingList.save(rowData, currentPage * pageSize + index)}\n>\n  \u4fdd\u5b58\n</Button>\n")),Object(o.b)("p",null,"\u91cd\u70b9\u662f",Object(o.b)("inlineCode",{parentName:"p"},"currentPage * pageSize + index"),"\u3002"),Object(o.b)("p",null,"\u7f16\u8f91\u6309\u94ae\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"<Button onClick={() => editingList.edit(currentPage * pageSize + index)}>\n  \u7f16\u8f91\n</Button>\n")),Object(o.b)("p",null,"\u5220\u9664\u6309\u94ae\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"<Button\n  onClick={() => editingList.remove(rowData, currentPage * pageSize + index)}\n>\n  \u5220\u9664\n</Button>\n")),Object(o.b)("p",null,"\u5f53\u7136\uff0c\u522b\u5fd8\u4e86\u5c06",Object(o.b)("inlineCode",{parentName:"p"},"editingList.editingRows"),"\u4f20\u7ed9",Object(o.b)("inlineCode",{parentName:"p"},"EditableDataTable.editingRows"),"\uff0c\u5e76\u4e14\u5b9a\u4e49\u5355\u5143\u683c\u7f16\u8f91\u5668\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'<EditableDataTable editingRows={editingList.editingRows}>\n  <TableColumn title="\u6807\u9898" name="title" editor="input" />\n</EditableDataTable>\n')),Object(o.b)("h2",{id:"\u518d\u6b21\u63d0\u70bc\u72b6\u6001\u7ba1\u7406"},"\u518d\u6b21\u63d0\u70bc\u72b6\u6001\u7ba1\u7406"),Object(o.b)("p",null,"\u589e\u52a0\u3001\u5220\u9664\u3001\u4fee\u6539\u3001\u7f16\u8f91\u56db\u4e2a\u52a8\u4f5c\u90fd\u4e0e\u7ffb\u9875\u6709\u5173\u7cfb\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u8fd9\u56db\u4e2a\u65b9\u6cd5\u63d0\u70bc\u5230\u4e00\u4e2a\u81ea\u5b9a\u4e49 hook\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"/**\n * \u83b7\u53d6\u5206\u9875\u7f16\u8f91\u5217\u8868\u7684\u52a8\u4f5c\n *\n * @param editingList \u7f16\u8f91\u5217\u8868\n * @param currentPage \u5f53\u524d\u9875\n * @param pageSize \u9875\u5927\u5c0f\n */\nfunction usePaginationEditingListActions<T>(\n  editingList: any,\n  currentPage: number,\n  pageSize: number,\n) {\n  const add = useCallback(() => {\n    editingList.add({}, currentPage * pageSize);\n  }, [currentPage, editingList, pageSize]);\n\n  const save = useCallback(\n    (item: T, index: number) => {\n      return editingList.save(item, currentPage * pageSize + index);\n    },\n    [currentPage, editingList, pageSize],\n  );\n\n  const edit = useCallback(\n    (index: number) => {\n      editingList.edit(currentPage * pageSize + index);\n    },\n    [currentPage, editingList, pageSize],\n  );\n\n  const remove = useCallback(\n    (item: T, index: number) => {\n      return editingList.remove(item, currentPage * pageSize + index);\n    },\n    [currentPage, editingList, pageSize],\n  );\n\n  return { add, save, edit, remove };\n}\n")),Object(o.b)("p",null,"\u4e4b\u540e\u6211\u4eec\u7684\u4ee3\u7801\u5c31\u662f\u8fd9\u6837\u5b50\u7684\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'import React, { useState, useMemo, useCallback } from \'react\';\nimport Pagination from \'sinoui-components/Pagination\';\nimport Button from \'sinoui-components/Button\';\nimport TextInput from \'sinoui-components/TextInput\';\nimport EditableDataTable, { useEditingList, TableColumn } from \'../src\';\n\ninterface Article {\n  id: string;\n  title: string;\n}\n\n/**\n * \u5206\u9875\u72b6\u6001hook\n */\nfunction usePagination(\n  defaultCurrentPage: number = 0,\n  defaultPageSize: number = 10,\n): [number, number, (pageNo: number, pageSize: number) => void] {\n  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);\n  const [pageSize, setPageSize] = useState(defaultPageSize);\n\n  const update = (pageNo: number, newPageSize: number) => {\n    setCurrentPage(pageNo);\n    setPageSize(newPageSize);\n  };\n\n  return [currentPage, pageSize, update];\n}\n\n/**\n * \u83b7\u53d6\u5206\u9875\u5217\u8868\n *\n * @param items \u5217\u8868\n * @param currentPage \u5f53\u524d\u9875\n * @param pageSize \u9875\u5927\u5c0f\n */\nfunction usePaginationList<T>(\n  items: T[],\n  currentPage: number,\n  pageSize: number,\n) {\n  const data = useMemo(\n    () => items.slice(currentPage * pageSize, (currentPage + 1) * pageSize),\n    [items, pageSize, currentPage],\n  );\n\n  return data;\n}\n\n/**\n * \u83b7\u53d6\u5206\u9875\u7f16\u8f91\u5217\u8868\u7684\u52a8\u4f5c\n *\n * @param editingList \u7f16\u8f91\u5217\u8868\n * @param currentPage \u5f53\u524d\u9875\n * @param pageSize \u9875\u5927\u5c0f\n */\nfunction usePaginationEditingListActions<T>(\n  editingList: any,\n  currentPage: number,\n  pageSize: number,\n) {\n  const add = useCallback(() => {\n    editingList.add({}, currentPage * pageSize);\n  }, [currentPage, editingList, pageSize]);\n\n  const save = useCallback(\n    (item: T, index: number) => {\n      return editingList.save(item, currentPage * pageSize + index);\n    },\n    [currentPage, editingList, pageSize],\n  );\n\n  const edit = useCallback(\n    (index: number) => {\n      editingList.edit(currentPage * pageSize + index);\n    },\n    [currentPage, editingList, pageSize],\n  );\n\n  const remove = useCallback(\n    (item: T, index: number) => {\n      return editingList.remove(item, currentPage * pageSize + index);\n    },\n    [currentPage, editingList, pageSize],\n  );\n\n  return { add, save, edit, remove };\n}\n\nfunction Demo() {\n  const editingList = useEditingList<Partial<Article>>(\n    \'/api/pagination-show-demo\',\n    [],\n  );\n  const [currentPage, pageSize, update] = usePagination();\n  const data = usePaginationList(editingList.items, currentPage, pageSize);\n  const editingRows = usePaginationList(\n    editingList.editingRows,\n    currentPage,\n    pageSize,\n  );\n\n  const { add, save, edit, remove } = usePaginationEditingListActions(\n    editingList,\n    currentPage,\n    pageSize,\n  );\n\n  return (\n    <div>\n      <Button raised onClick={add}>\n        \u65b0\u589e\n      </Button>\n      <EditableDataTable\n        data={data}\n        editingRows={editingRows}\n        idPropertyName={editingList.idPropertyName}\n      >\n        <TableColumn name="id" title="id" />\n        <TableColumn name="title" title="\u6807\u9898" editor="input" />\n        <TableColumn\n          title="\u64cd\u4f5c"\n          name="id"\n          render={(_value, item, index, _id, context) => (\n            <>\n              {context.editing ? (\n                <Button autoWidth onClick={() => save(item, index)}>\n                  \u4fdd\u5b58\n                </Button>\n              ) : (\n                <Button autoWidth onClick={() => edit(index)}>\n                  \u7f16\u8f91\n                </Button>\n              )}\n              <Button\n                autoWidth\n                color="danger"\n                onClick={() => remove(item, index)}\n              >\n                \u5220\u9664\n              </Button>\n            </>\n          )}\n        />\n      </EditableDataTable>\n      <Pagination\n        pageSize={pageSize}\n        total={editingList.items.length}\n        currentPage={currentPage + 1}\n        onChange={(pageNo, size) => update(pageNo - 1, size)}\n      />\n    </div>\n  );\n}\n')),Object(o.b)("h2",{id:"\u6821\u9a8c"},"\u6821\u9a8c"),Object(o.b)("p",null,"\u5728\u8fd9\u4e2a\u573a\u666f\u4e2d\uff0c\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"p"},"EditableDataTable"),"\u5185\u7f6e\u7684\u6821\u9a8c\u5373\u53ef\u3002"),Object(o.b)("p",null,"\u9996\u5148\u5b9a\u4e49\u4e00\u4e0b\u6570\u636e\u884c\u7684\u6821\u9a8c\u65b9\u6cd5\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"function validate(rowData) {\n  const errors: { [x: string]: string } = {};\n\n  if (!rowData.title) {\n    errors.title = '\u5fc5\u586b';\n  }\n\n  return errors;\n}\n")),Object(o.b)("p",null,"\u7136\u540e\u5c06",Object(o.b)("inlineCode",{parentName:"p"},"validate"),"\u4f20\u9012\u7ed9",Object(o.b)("inlineCode",{parentName:"p"},"EditableDataTable"),"\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"<EditableDataTable validate={validate} />\n")),Object(o.b)("p",null,"\u6700\u540e\uff0c\u8c03\u6574\u4fdd\u5b58\u65b9\u6cd5\uff0c\u5148\u6821\u9a8c\u6570\u636e\uff0c\u7136\u540e\u518d\u4fdd\u5b58\u6570\u636e\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"<Button\n  autoWidth\n  onClick={() => {\n    if (!context.validate()) {\n      alert('\u6570\u636e\u586b\u5199\u4e0d\u5b8c\u6574');\n    } else {\n      save();\n    }\n  }}\n>\n  \u4fdd\u5b58\n</Button>\n")),Object(o.b)("h2",{id:"\u67e5\u8be2\u5217\u8868"},"\u67e5\u8be2\u5217\u8868"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"editingList.query(searechParams)"),"\u662f\u7528\u6765\u67e5\u8be2\u7684\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5728\u67e5\u8be2\u8868\u5355\u63d0\u4ea4\u65f6\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u5b8c\u6210\u67e5\u8be2\u4e8b\u5b9c\u3002"),Object(o.b)("p",null,"\u4e3e\u4e00\u4e2a\u4e0e\u67d0\u5185\u90e8\u9879\u76ee\u67e5\u8be2\u8868\u5355\u7ec4\u4ef6\u7684\u7ec4\u5408\uff0c\u5b8c\u6210\u8868\u683c\u6570\u636e\u67e5\u8be2\u7684\u529f\u80fd\u3002"),Object(o.b)("p",null,"\u4f8b\u5b50 1\uff1a",Object(o.b)("inlineCode",{parentName:"p"},"SearchForm"),"\u662f\u67e5\u8be2\u8868\u5355\u7ec4\u4ef6\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"SearchButton"),"\u662f\u67e5\u8be2\u6309\u94ae\u3002\u70b9\u51fb\u67e5\u8be2\u6309\u94ae\uff0c\u67e5\u8be2\u8868\u5355\u4f1a\u53d1\u51fa\u63d0\u4ea4\uff08submit\uff09\u4e8b\u4ef6\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'<SearchForm onSubmit={editingList.query}>\n  <SearchFormItem>\n    <Label>\u6807\u9898</Label>\n    <TextInput name="title" />\n  </SearchFormItem>\n  <SearchButton />\n</SearchForm>\n')),Object(o.b)("p",null,"\u4f8b\u5b50 2\uff1a",Object(o.b)("inlineCode",{parentName:"p"},"SearchFormState"),"\u662f\u7528\u6765\u5207\u6362\u7b80\u5355\u548c\u590d\u6742\u67e5\u8be2\u8868\u5355\u7684\u7ec4\u4ef6\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"advancedForm"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"simpleForm"),"\u4e24\u4e2a\u5c5e\u6027\u5206\u522b\u7528\u6765\u6307\u5b9a\u590d\u6742\u548c\u67e5\u8be2\u8868\u5355\u3002\u5b83\u6709",Object(o.b)("inlineCode",{parentName:"p"},"onSubmit"),"\u5c5e\u6027\uff0c\u5728\u67e5\u8be2\u8868\u5355\u7684\u67e5\u8be2\u6309\u94ae\u88ab\u70b9\u51fb\u65f6\uff0c\u8c03\u7528\u76f8\u5bf9\u5e94\u7684\u56de\u8c03\u51fd\u6570\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"<SearchFormState\n  onSubmit={editingList.query}\n  advancedForm={AdvancedSearchForm}\n  simpleForm={SimpleSearchForm}\n/>\n")))}O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/pagination-show.mdx"}}),O.isMDXComponent=!0},"./src/index.ts":function(e,n,t){"use strict";var a=t("./src/EditableDataTable.tsx"),i=t("./src/TableColumn.tsx");t.d(n,"a",function(){return i.b});var r=t("./src/shared/EditorProps.ts"),o=t.n(r),s=t("./src/useEditingList.ts");t.d(n,"c",function(){return s.a});var u=t("./src/useSimpleEditingList.ts");t.d(n,"d",function(){return u.a}),n.b=a.b,"undefined"!==typeof a.b&&a.b&&a.b===Object(a.b)&&Object.isExtensible(a.b)&&Object.defineProperty(a.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EditableDataTable",filename:"src/index.ts"}}),"undefined"!==typeof u.a&&u.a&&u.a===Object(u.a)&&Object.isExtensible(u.a)&&Object.defineProperty(u.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useSimpleEditingList",filename:"src/index.ts"}}),"undefined"!==typeof s.a&&s.a&&s.a===Object(s.a)&&Object.isExtensible(s.a)&&Object.defineProperty(s.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useEditingList",filename:"src/index.ts"}}),"undefined"!==typeof o.a&&o.a&&o.a===Object(o.a)&&Object.isExtensible(o.a)&&Object.defineProperty(o.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EditorProps",filename:"src/index.ts"}}),"undefined"!==typeof i.Props&&i.Props&&i.Props===Object(i.Props)&&Object.isExtensible(i.Props)&&Object.defineProperty(i.Props,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TableColumnProps",filename:"src/index.ts"}}),"undefined"!==typeof i.b&&i.b&&i.b===Object(i.b)&&Object.isExtensible(i.b)&&Object.defineProperty(i.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TableColumn",filename:"src/index.ts"}}),"undefined"!==typeof a.Props&&a.Props&&a.Props===Object(a.Props)&&Object.isExtensible(a.Props)&&Object.defineProperty(a.Props,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EditableDataTableProps",filename:"src/index.ts"}})},"./src/shared/EditorProps.ts":function(e,n){}}]);
//# sourceMappingURL=docs-pagination-show.0c2d360d4d0b97f45055.js.map