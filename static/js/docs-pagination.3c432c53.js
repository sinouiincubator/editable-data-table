(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./docs/SelectRow.css":function(e,n,t){var a=t("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./docs/SelectRow.css");"string"===typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},s=t("./node_modules/style-loader/lib/addStyles.js")(a,o);a.locals&&(e.exports=a.locals),e.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./docs/SelectRow.css",function(){var n=t("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./docs/SelectRow.css");if("string"===typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,a=0;for(t in e){if(!n||e[t]!==n[t])return!1;a++}for(t in n)a--;return 0===a}(a.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(n)}),e.hot.dispose(function(){s()})},"./docs/pagination.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("./node_modules/react/index.js"),s=t.n(o),i=t("./node_modules/@mdx-js/react/dist/index.es.js"),r=t("./node_modules/docz/dist/index.esm.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),c=t.n(l),d=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),u=t("./node_modules/@sinoui/use-rest-page-api/dist/index.js"),m=t.n(u),b=t("./node_modules/sinoui-components/Pagination/index.js"),p=t("./node_modules/sinoui-components/TextInput/index.js"),f=t("./node_modules/sinoui-components/Button/index.js"),g=t("./node_modules/@sinoui/datepicker/build/index.js"),j=t("./node_modules/lodash/debounce.js"),h=t.n(j),O=t("./node_modules/@sinoui/forms/build/index.js"),x=t("./node_modules/sinoui-components/Grid/index.js"),v=t("./src/index.ts");t("./docs/SelectRow.css");function w(e){var n=e.value,t=e.onChange;return s.a.createElement(g.a,{value:n,onChange:function(e,n){return t(n)}})}function y(e){var n={};return e.title||(n.title="\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a"),n}function E(){var e=m()("/api/pagination-demo",[]),n=e.items,t=e.pagination,a=e.fetch,i=e.remove,r=e.update,l=e.query,u=Object(v.e)(n,{alwaysEditing:!0,validate:y}),g=u.editingRows,j=u.setItems,E=u.items,_=u.selectedRows,S=u.isAllSelected,C=u.isContainsSelected,R=u.toggleAllSelected,P=u.toggleRowSelected;Object(o.useEffect)(function(){j(n)},[n,j]);var T=function(){var e=Object(d.a)(c.a.mark(function e(n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(n.id);case 2:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),D=Object(o.useMemo)(function(){return h()(r,200)},[r]),k=function(){var e=Object(d.a)(c.a.mark(function e(n,t){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((a=y(t))&&0!==Object.keys(a).length){e.next=4;break}return e.next=4,D(t,!1);case 4:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),N=function(){var e=Object(d.a)(c.a.mark(function e(){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=E.filter(function(e,n){return _.includes(n)}).map(function(e){return e.id}),e.next=3,i(n);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(O.d,{onSubmit:l},s.a.createElement(x.b,null,s.a.createElement(x.a,{flex:16},s.a.createElement(O.a,null,s.a.createElement(O.b,null,"\u59d3\u540d"),s.a.createElement(O.c,{name:"title"}))),s.a.createElement(x.a,{flex:8},s.a.createElement(f.b,{type:"submit",raised:!0},"\u67e5\u8be2")))),_.length>0&&s.a.createElement(x.b,null,s.a.createElement(x.a,null,s.a.createElement(f.b,{onClick:N},"\u5220\u9664"))),s.a.createElement(v.c,{data:E,editingRows:g,validate:y,onRowChange:k,rowClassName:function(e){return _.includes(e)?"sinoui-data-table-body-row_selected":""}},s.a.createElement(v.a,{selectedRows:_,isAllSelected:S,isContainsSelected:C,toggleAllSelected:R,toggleRowSelected:P}),s.a.createElement(v.b,{title:"\u5e8f\u53f7",order:!0}),s.a.createElement(v.b,{title:"\u6807\u9898",name:"title",editor:p.b}),s.a.createElement(v.b,{title:"\u51fa\u751f\u65e5\u671f",name:"birthday",editor:w}),s.a.createElement(v.b,{title:"\u804c\u52a1",name:"duty",editor:p.b}),s.a.createElement(v.b,{title:"\u64cd\u4f5c",name:"id",render:function(e,n){return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.b,{autoWidth:!0,onClick:function(){return T(n)}},"\u5220\u9664"))}})),s.a.createElement(b.a,{pageSize:t.pageSize,total:t.totalElements,currentPage:t.pageNo+1,onChange:function(e,n){a(e-1,n)}}))}var _=E;E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PaginationEditableDataTableDemo",filename:"docs\\PaginationEditableTableDemo.tsx"}}),t.d(n,"default",function(){return R});var S={},C="wrapper";function R(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)(C,Object.assign({},S,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u5206\u9875\u52a0\u8f7d\u6570\u636e\u7684\u53ef\u7f16\u8f91\u6570\u636e\u8868\u683c"},"\u5206\u9875\u52a0\u8f7d\u6570\u636e\u7684\u53ef\u7f16\u8f91\u6570\u636e\u8868\u683c"),Object(i.b)("p",null,"\u53ef\u7f16\u8f91\u6570\u636e\u8868\u683c\u53ef\u4ee5\u4e0e\u5206\u9875\u6570\u636e\u52a0\u8f7d\u76f8\u7ed3\u5408\uff0c\u5b9e\u73b0\u5206\u9875\u52a0\u8f7d\u6570\u636e\u7684\u53ef\u7f16\u8f91\u6570\u636e\u8868\u683c\u3002\u672c\u7ae0\u8282\u4f1a\u7ed3\u5408\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/sinoui/use-rest-page-api"}),"@sinoui/use-rest-page-api")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"http://47.93.34.153:10080/sinoui/sinoui/tree/master/packages/sinoui-components/Pagination"}),"sinoui-components/Pagination"))),Object(i.b)("p",null,"\u5b9e\u73b0\u5206\u9875\u52a0\u8f7d\u6570\u636e\u7684\u53ef\u7f16\u8f91\u6570\u636e\u8868\u683c\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React, { useEffect, useMemo } from 'react';\nimport useRestPageApi from '@sinoui/use-rest-page-api';\nimport Pagination from 'sinoui-components/Pagination';\nimport TextInput from 'sinoui-components/TextInput';\nimport Button from 'sinoui-components/Button';\nimport DatePicker from '@sinoui/datepicker';\nimport debounce from 'lodash/debounce';\nimport Form, {\n  FormItem,\n  Label,\n  TextInput as TextInputField,\n} from '@sinoui/forms';\nimport { Row, Column } from 'sinoui-components/Grid';\nimport EditableDataTable, {\n  TableColumn,\n  useSimpleEditingList,\n  RowSelectColumn,\n} from '../src';\nimport './PaginationEditableTableDemo.css';\n\ninterface Data {\n  id: string;\n  title?: string;\n  duty?: string;\n  birthday: string;\n}\n\nfunction CusDatePicker({\n  value,\n  onChange,\n}: {\n  value: string;\n  onChange: (value?: string) => void;\n}) {\n  return (\n    <DatePicker value={value} onChange={(event, date) => onChange(date)} />\n  );\n}\n\nfunction validate(data: Data) {\n  const result: any = {};\n\n  if (!data.title) {\n    result.title = '\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a';\n  }\n  return result;\n}\n\nfunction PaginationEditableDataTableDemo() {\n  const {\n    items,\n    pagination,\n    fetch,\n    remove: asyncRemove,\n    update,\n    query,\n  } = useRestPageApi<Data>('/api/pagination-demo', []);\n  const {\n    editingRows,\n    setItems,\n    items: data,\n    selectedRows,\n    isAllSelected,\n    isContainsSelected,\n    toggleAllSelected,\n    toggleRowSelected,\n  } = useSimpleEditingList<Data>(items, {\n    alwaysEditing: true,\n    validate,\n  });\n\n  useEffect(() => {\n    setItems(items);\n  }, [items, setItems]);\n\n  const handleOnChange = (pageNumber: number, pageSize: number) => {\n    fetch(pageNumber - 1, pageSize);\n  };\n\n  const handleRemove = async (row: Data) => {\n    await asyncRemove(row.id);\n  };\n\n  const debounceUpdate = useMemo(() => debounce(update, 200), [update]);\n\n  const handleOnRowChange = async (index: number, rowData: Data) => {\n    const validateResult = validate(rowData);\n    if (!validateResult || Object.keys(validateResult).length === 0) {\n      await debounceUpdate(rowData, false);\n    }\n  };\n\n  const handleBatchRemove = async () => {\n    const selectedRowIds = data\n      .filter((_data, idx) => selectedRows.includes(idx))\n      .map((item) => item.id);\n\n    await asyncRemove(selectedRowIds);\n  };\n\n  const handleRowClassName = (index: number) => {\n    if (selectedRows.includes(index)) {\n      return 'sinoui-data-table-body-row_selected';\n    }\n\n    return '';\n  };\n\n  return (\n    <>\n      <Form onSubmit={query as any}>\n        <Row>\n          <Column flex={16}>\n            <FormItem>\n              <Label>\u59d3\u540d</Label>\n              <TextInputField name=\"title\" />\n            </FormItem>\n          </Column>\n          <Column flex={8}>\n            <Button type=\"submit\" raised>\n              \u67e5\u8be2\n            </Button>\n          </Column>\n        </Row>\n      </Form>\n      {selectedRows.length > 0 && (\n        <Row>\n          <Column>\n            <Button onClick={handleBatchRemove}>\u5220\u9664</Button>\n          </Column>\n        </Row>\n      )}\n      <EditableDataTable\n        data={data}\n        editingRows={editingRows}\n        validate={validate}\n        onRowChange={handleOnRowChange}\n        rowClassName={handleRowClassName}\n      >\n        <RowSelectColumn\n          selectedRows={selectedRows}\n          isAllSelected={isAllSelected}\n          isContainsSelected={isContainsSelected}\n          toggleAllSelected={toggleAllSelected}\n          toggleRowSelected={toggleRowSelected}\n        />\n        <TableColumn title=\"\u5e8f\u53f7\" order />\n        <TableColumn title=\"\u6807\u9898\" name=\"title\" editor={TextInput} />\n        <TableColumn title=\"\u51fa\u751f\u65e5\u671f\" name=\"birthday\" editor={CusDatePicker} />\n        <TableColumn title=\"\u804c\u52a1\" name=\"duty\" editor={TextInput} />\n        <TableColumn\n          title=\"\u64cd\u4f5c\"\n          name=\"id\"\n          render={(_value, row) => (\n            <>\n              <Button autoWidth onClick={() => handleRemove(row)}>\n                \u5220\u9664\n              </Button>\n            </>\n          )}\n        />\n      </EditableDataTable>\n      <Pagination\n        pageSize={pagination.pageSize}\n        total={pagination.totalElements}\n        currentPage={pagination.pageNo + 1}\n        onChange={handleOnChange}\n      />\n    </>\n  );\n}\n")),Object(i.b)("p",null,"\u793a\u4f8b\uff1a"),Object(i.b)(r.c,{__position:0,__code:"<PaginationEditableTableDemo />",__scope:{props:this?this.props:t,Playground:r.c,Props:r.d,PaginationEditableTableDemo:_},mdxType:"Playground"},Object(i.b)(_,{mdxType:"PaginationEditableTableDemo"})),Object(i.b)("h2",{id:"\u4e0e\u67e5\u8be2\u7684\u7ed3\u5408"},"\u4e0e\u67e5\u8be2\u7684\u7ed3\u5408"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"useRestPageApi.query(searechParams)"),"\u662f\u7528\u6765\u67e5\u8be2\u7684\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5728\u67e5\u8be2\u8868\u5355\u63d0\u4ea4\u65f6\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u5b8c\u6210\u67e5\u8be2\u4e8b\u5b9c\u3002"),Object(i.b)("p",null,"\u4e3e\u4e00\u4e2a\u4e0e\u67d0\u5185\u90e8\u9879\u76ee\u67e5\u8be2\u8868\u5355\u7ec4\u4ef6\u7684\u7ec4\u5408\uff0c\u5b8c\u6210\u8868\u683c\u6570\u636e\u67e5\u8be2\u7684\u529f\u80fd\u3002"),Object(i.b)("p",null,"\u4f8b\u5b50 1\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"SearchForm"),"\u662f\u67e5\u8be2\u8868\u5355\u7ec4\u4ef6\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"SearchButton"),"\u662f\u67e5\u8be2\u6309\u94ae\u3002\u70b9\u51fb\u67e5\u8be2\u6309\u94ae\uff0c\u67e5\u8be2\u8868\u5355\u4f1a\u53d1\u51fa\u63d0\u4ea4\uff08submit\uff09\u4e8b\u4ef6\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const dataSource = useRestPageApi('url');\n\n<SearchForm onSubmit={dataSource.query}>\n  <SearchFormItem>\n    <Label>\u6807\u9898</Label>\n    <TextInput name=\"title\" />\n  </SearchFormItem>\n  <SearchButton />\n</SearchForm>;\n")),Object(i.b)("p",null,"\u4f8b\u5b50 2\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"SearchFormState"),"\u662f\u7528\u6765\u5207\u6362\u7b80\u5355\u548c\u590d\u6742\u67e5\u8be2\u8868\u5355\u7684\u7ec4\u4ef6\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"advancedForm"),"\u548c",Object(i.b)("inlineCode",{parentName:"p"},"simpleForm"),"\u4e24\u4e2a\u5c5e\u6027\u5206\u522b\u7528\u6765\u6307\u5b9a\u590d\u6742\u548c\u67e5\u8be2\u8868\u5355\u3002\u5b83\u6709",Object(i.b)("inlineCode",{parentName:"p"},"onSubmit"),"\u5c5e\u6027\uff0c\u5728\u67e5\u8be2\u8868\u5355\u7684\u67e5\u8be2\u6309\u94ae\u88ab\u70b9\u51fb\u65f6\uff0c\u8c03\u7528\u76f8\u5bf9\u5e94\u7684\u56de\u8c03\u51fd\u6570\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const dataSource = useRestPageApi('url');\n\n<SearchFormState\n  onSubmit={dataSource.query}\n  advancedForm={AdvancedSearchForm}\n  simpleForm={SimpleSearchForm}\n/>;\n")),Object(i.b)("h2",{id:"\u8f93\u5165\u6846\u503c\u53d8\u66f4\u81ea\u52a8\u4fdd\u5b58"},"\u8f93\u5165\u6846\u503c\u53d8\u66f4\u81ea\u52a8\u4fdd\u5b58"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"useRestPageApi.update(rowData)"),"\u662f\u7528\u6765\u66f4\u65b0\u6570\u636e\u7684\u65b9\u6cd5\u3002\u53ef\u4ee5\u4f7f\u7528",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://www.lodashjs.com/docs/latest#_debouncefunc-wait0-options"}),"lodash/debounce"),"\u964d\u4f4e\u4fdd\u5b58\u7684\u9891\u7387\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const debounceUpdate = useMemo(() => debounce(update, 200), [update]);\n\nconst handleRowChange = async (index: number, rowData: Data) => {\n  const validateResult = validate(rowData);\n  if (!validateResult || Object.keys(validateResult).length === 0) {\n    await debounceUpdate(rowData, false);\n  }\n};\n\n<EditableDataTable onRowChange={handleRowChange} />;\n")))}R&&R===Object(R)&&Object.isExtensible(R)&&Object.defineProperty(R,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs\\pagination.mdx"}}),R.isMDXComponent=!0},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./docs/SelectRow.css":function(e,n,t){(e.exports=t("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,".sinoui-editable-data-table .sinoui-data-table-body-row_selected {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n",""])},"./src/RowSelectColumn.tsx":function(e,n,t){"use strict";var a=t("./node_modules/react/index.js"),o=t.n(a),s=t("./node_modules/sinoui-components/Checkbox/index.js"),i=t("./src/TableColumn.tsx");function r(e){var n=e.isAllSelected,t=e.isContainsSelected,a=e.toggleAllSelected,r=e.selectedRows,l=e.toggleRowSelected,c=e.startIndex,d=void 0===c?0:c;return o.a.createElement(i.b,{width:50,title:o.a.createElement(s.b,{checked:n,indeterminate:!n&&t,onChange:a}),render:function(e,n,t){return o.a.createElement(s.b,{checked:-1!==r.indexOf(t+d),onChange:function(){return l(t+d)}})}})}n.a=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RowSelectColumn",filename:"src\\RowSelectColumn.tsx"}})},"./src/index.ts":function(e,n,t){"use strict";var a=t("./src/EditableDataTable.tsx"),o=t("./src/TableColumn.tsx");t.d(n,"b",function(){return o.b});var s=t("./src/shared/EditorProps.ts"),i=t.n(s),r=t("./src/useEditingList.ts");t.d(n,"d",function(){return r.a});var l=t("./src/useSimpleEditingList.ts");t.d(n,"e",function(){return l.a});var c=t("./src/RowSelectColumn.tsx");t.d(n,"a",function(){return c.a}),n.c=a.b,"undefined"!==typeof a.b&&a.b&&a.b===Object(a.b)&&Object.isExtensible(a.b)&&Object.defineProperty(a.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EditableDataTable",filename:"src\\index.ts"}}),"undefined"!==typeof c.a&&c.a&&c.a===Object(c.a)&&Object.isExtensible(c.a)&&Object.defineProperty(c.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RowSelectColumn",filename:"src\\index.ts"}}),"undefined"!==typeof l.a&&l.a&&l.a===Object(l.a)&&Object.isExtensible(l.a)&&Object.defineProperty(l.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useSimpleEditingList",filename:"src\\index.ts"}}),"undefined"!==typeof r.a&&r.a&&r.a===Object(r.a)&&Object.isExtensible(r.a)&&Object.defineProperty(r.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useEditingList",filename:"src\\index.ts"}}),"undefined"!==typeof i.a&&i.a&&i.a===Object(i.a)&&Object.isExtensible(i.a)&&Object.defineProperty(i.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EditorProps",filename:"src\\index.ts"}}),"undefined"!==typeof o.Props&&o.Props&&o.Props===Object(o.Props)&&Object.isExtensible(o.Props)&&Object.defineProperty(o.Props,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TableColumnProps",filename:"src\\index.ts"}}),"undefined"!==typeof o.b&&o.b&&o.b===Object(o.b)&&Object.isExtensible(o.b)&&Object.defineProperty(o.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TableColumn",filename:"src\\index.ts"}}),"undefined"!==typeof a.Props&&a.Props&&a.Props===Object(a.Props)&&Object.isExtensible(a.Props)&&Object.defineProperty(a.Props,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EditableDataTableProps",filename:"src\\index.ts"}})},"./src/shared/EditorProps.ts":function(e,n){},"./src/useEditingList.ts":function(e,n,t){"use strict";t.d(n,"a",function(){return b});var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),s=t.n(o),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),c=t("./node_modules/@sinoui/use-rest-list-api/dist/index.js"),d=t.n(c),u=t("./node_modules/react/index.js"),m=t("./src/useSimpleEditingList.ts");function b(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0,o=t||{},c=o.keyName,b=void 0===c?"id":c,p=o.alwaysEditing,f=void 0!==p&&p,g=d()(e,n,t),j=g.items,h=g.remove,O=g.update,x=g.save,v=g.isLoading,w=g.isError,y=g.query,E=g.fetch,_=g.sortWith,S=g.reload,C=g.reset,R=g.searchParams,P=g.sorts,T=Object(m.a)(j,t),D=T.setItems,k=T.remove,N=T.updateItem,I=T.setReadonly,A=Object(l.a)(T,["setItems","remove","updateItem","setReadonly"]);Object(u.useEffect)(function(){D(j)},[D,j]);var F=Object(u.useCallback)(function(e){return e[b]},[b]),L=Object(u.useCallback)(function(){var e=Object(r.a)(s.a.mark(function e(n,t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!Array.isArray(n)){e.next=7;break}if(!((a=n.map(function(e){var n=Object(i.a)(e,1)[0];return F(n)}).filter(Boolean)).length>0)){e.next=5;break}return e.next=5,h(a,!1);case 5:e.next=10;break;case 7:if(!F(n)){e.next=10;break}return e.next=10,h(F(n),!1);case 10:k(Array.isArray(n)?n.map(function(e){return Object(i.a)(e,2)[1]}):t);case 11:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),[h,k,F]),B=Object(u.useCallback)(function(){var e=Object(r.a)(s.a.mark(function e(n,t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!F(n)){e.next=6;break}return e.next=3,O(n,!1);case 3:a=e.sent,e.next=9;break;case 6:return e.next=8,x(n,!1);case 8:a=e.sent;case 9:N(t,a),f||I(t);case 11:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),[F,N,f,O,x,I]);return Object(a.a)({},A,{query:y,fetch:E,sortWith:_,reload:S,reset:C,searchParams:R,sorts:P,isLoading:v,isError:w,remove:L,save:B,idPropertyName:b,setReadonly:I})}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useEditingList",filename:"src\\useEditingList.ts"}})}}]);
//# sourceMappingURL=docs-pagination.16835bdf53443f84b675.js.map