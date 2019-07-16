(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./docs/validate.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return m});var i,a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=t("./node_modules/react/index.js"),s=t.n(r),o=t("./node_modules/@mdx-js/react/dist/index.es.js"),d=t("./node_modules/docz/dist/index.esm.js"),l=t("./src/index.ts"),u=t("./node_modules/sinoui-components/Button/index.js"),c=(i="Demo",{}),b="wrapper";function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)(b,Object.assign({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u6821\u9a8c"},"\u6821\u9a8c"),Object(o.b)("p",null,"EditableDataTable \u5185\u7f6e\u652f\u6301\u6821\u9a8c\uff0c\u4e5f\u652f\u6301\u5728\u8868\u683c\u7ec4\u4ef6\u7684\u5916\u90e8\u7ef4\u62a4\u6821\u9a8c\u72b6\u6001\u3002\u53ef\u4ee5\u4f7f\u7528 useSimpleEditingList \u7ba1\u7406\u5916\u7f6e\u7684\u6821\u9a8c\u72b6\u6001\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport EditableDataTable, {\n  useSimpleEditingList,\n  TableColumn,\n} from '@sinouiincubator/editable-data-table';\n\ninterface User {\n  id: string;\n  name: string;\n  duty?: string;\n}\n\nfunction validate(rowData: User) {\n  const errors = {};\n\n  if (!rowData.name) {\n    errors.name = '\u5fc5\u586b';\n  }\n\n  if (rowData.duty && rowData.duty.startsWith('1')) {\n    errors.duty = '\u804c\u52a1\u4e0d\u80fd\u4ee51\u5f00\u5934';\n  }\n\n  return errors;\n}\n\nfunction Demo() {\n  const editingList = useSimpleEditingList<User>(\n    [\n      { id: '1', name: 'Jacking', duty: 'developer' },\n      { id: '2', name: 'zinuo', duty: 'developer' },\n    ],\n    {\n      alwaysEditing: true,\n      validate,\n    },\n  );\n\n  const handleSave = () => {\n    if (!editingList.validateAllEditingRows()) {\n      alert('\u6570\u636e\u6821\u9a8c\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u3002');\n    } else {\n      console.log('\u9700\u8981\u4fdd\u5b58\u7684\u6570\u636e', editingList.items);\n      alert('\u4fdd\u5b58\u6570\u636e\u6210\u529f');\n    }\n  };\n\n  return (\n    <>\n      <button onClick={handleSave}>\u4fdd\u5b58</button>\n      <EditableDataTable\n        data={editingList.items}\n        editingRows={editingList.editingRows}\n        errors={editingList.errors}\n        touched={editingList.touched}\n        onFieldChange={editingList.validateField}\n      >\n        <TableColumn order title=\"\u5e8f\u53f7\" />\n        <TableColumn title=\"\u59d3\u540d\" name=\"name\" editor=\"input\" />\n        <TableColumn title=\"\u804c\u52a1\" name=\"duty\" editor=\"input\" />\n      </EditableDataTable>\n    </>\n  );\n}\n")),Object(o.b)("p",null,"\u6f14\u793a\u6548\u679c\uff1a"),Object(o.b)(d.c,{__position:0,__code:"() => {\n  function validate(rowData) {\n    const errors = {}\n    if (!rowData.name) {\n      errors.name = '\u5fc5\u586b'\n    }\n\n    if (rowData.duty && rowData.duty.startsWith('1')) {\n      errors.duty = '\u804c\u52a1\u4e0d\u80fd\u4ee51\u5f00\u5934'\n    }\n\n    return errors\n  }\n\n  function Demo() {\n    const editingList = useSimpleEditingList(\n      [\n        { id: '1', name: 'Jacking', duty: 'developer' },\n        { id: '2', name: 'zinuo', duty: 'developer' },\n      ],\n      {\n        alwaysEditing: true,\n        validate,\n      },\n    )\n\n    const handleSave = () => {\n      if (!editingList.validateAllEditingRows()) {\n        alert('\u6570\u636e\u6821\u9a8c\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u3002')\n      } else {\n        console.log('\u9700\u8981\u4fdd\u5b58\u7684\u6570\u636e', editingList.items)\n        alert('\u4fdd\u5b58\u6570\u636e\u6210\u529f')\n      }\n    }\n\n    return (\n      <>\n        <Button raised onClick={handleSave}>\n          \u4fdd\u5b58\n        </Button>\n        <Button raised onClick={() => editingList.add({})}>\n          \u65b0\u589e\n        </Button>\n        <EditableDataTable\n          data={editingList.items}\n          editingRows={editingList.editingRows}\n          errors={editingList.errors}\n          touched={editingList.touched}\n          onFieldChange={editingList.validateField}\n        >\n          <TableColumn order title=\"\u5e8f\u53f7\" />\n          <TableColumn title=\"\u59d3\u540d\" name=\"name\" editor=\"input\" />\n          <TableColumn title=\"\u804c\u52a1\" name=\"duty\" editor=\"input\" />\n        </EditableDataTable>\n      </>\n    )\n  }\n\n  return <Demo />\n}",__scope:{props:this?this.props:t,Playground:d.c,EditableDataTable:l.c,useSimpleEditingList:l.e,TableColumn:l.b,Button:u.b},mdxType:"Playground"},function(){function e(e){var n={};return e.name||(n.name="\u5fc5\u586b"),e.duty&&e.duty.startsWith("1")&&(n.duty="\u804c\u52a1\u4e0d\u80fd\u4ee51\u5f00\u5934"),n}return Object(o.b)(function(){var n=Object(l.e)([{id:"1",name:"Jacking",duty:"developer"},{id:"2",name:"zinuo",duty:"developer"}],{alwaysEditing:!0,validate:e});return Object(o.b)(s.a.Fragment,null,Object(o.b)(u.b,{raised:!0,onClick:function(){n.validateAllEditingRows()?(console.log("\u9700\u8981\u4fdd\u5b58\u7684\u6570\u636e",n.items),alert("\u4fdd\u5b58\u6570\u636e\u6210\u529f")):alert("\u6570\u636e\u6821\u9a8c\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u3002")},mdxType:"Button"},"\u4fdd\u5b58"),Object(o.b)(u.b,{raised:!0,onClick:function(){return n.add({})},mdxType:"Button"},"\u65b0\u589e"),Object(o.b)(l.c,{data:n.items,editingRows:n.editingRows,errors:n.errors,touched:n.touched,onFieldChange:n.validateField,mdxType:"EditableDataTable"},Object(o.b)(l.b,{order:!0,title:"\u5e8f\u53f7",mdxType:"TableColumn"}),Object(o.b)(l.b,{title:"\u59d3\u540d",name:"name",editor:"input",mdxType:"TableColumn"}),Object(o.b)(l.b,{title:"\u804c\u52a1",name:"duty",editor:"input",mdxType:"TableColumn"})))},{mdxType:"Demo"})}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs\\validate.mdx"}}),m.isMDXComponent=!0},"./src/RowSelectColumn.tsx":function(e,n,t){"use strict";var i=t("./node_modules/react/index.js"),a=t.n(i),r=t("./node_modules/sinoui-components/Checkbox/index.js"),s=t("./src/TableColumn.tsx");function o(e){var n=e.isAllSelected,t=e.isContainsSelected,i=e.toggleAllSelected,o=e.selectedRows,d=e.toggleRowSelected,l=e.startIndex,u=void 0===l?0:l;return a.a.createElement(s.b,{width:50,title:a.a.createElement(r.b,{checked:n,indeterminate:!n&&t,onChange:i}),render:function(e,n,t){return a.a.createElement(r.b,{checked:-1!==o.indexOf(t+u),onChange:function(){return d(t+u)}})}})}n.a=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RowSelectColumn",filename:"src\\RowSelectColumn.tsx"}})},"./src/index.ts":function(e,n,t){"use strict";var i=t("./src/EditableDataTable.tsx"),a=t("./src/TableColumn.tsx");t.d(n,"b",function(){return a.b});var r=t("./src/shared/EditorProps.ts"),s=t.n(r),o=t("./src/useEditingList.ts");t.d(n,"d",function(){return o.a});var d=t("./src/useSimpleEditingList.ts");t.d(n,"e",function(){return d.a});var l=t("./src/RowSelectColumn.tsx");t.d(n,"a",function(){return l.a}),n.c=i.b,"undefined"!==typeof i.b&&i.b&&i.b===Object(i.b)&&Object.isExtensible(i.b)&&Object.defineProperty(i.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EditableDataTable",filename:"src\\index.ts"}}),"undefined"!==typeof l.a&&l.a&&l.a===Object(l.a)&&Object.isExtensible(l.a)&&Object.defineProperty(l.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RowSelectColumn",filename:"src\\index.ts"}}),"undefined"!==typeof d.a&&d.a&&d.a===Object(d.a)&&Object.isExtensible(d.a)&&Object.defineProperty(d.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useSimpleEditingList",filename:"src\\index.ts"}}),"undefined"!==typeof o.a&&o.a&&o.a===Object(o.a)&&Object.isExtensible(o.a)&&Object.defineProperty(o.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useEditingList",filename:"src\\index.ts"}}),"undefined"!==typeof s.a&&s.a&&s.a===Object(s.a)&&Object.isExtensible(s.a)&&Object.defineProperty(s.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EditorProps",filename:"src\\index.ts"}}),"undefined"!==typeof a.Props&&a.Props&&a.Props===Object(a.Props)&&Object.isExtensible(a.Props)&&Object.defineProperty(a.Props,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TableColumnProps",filename:"src\\index.ts"}}),"undefined"!==typeof a.b&&a.b&&a.b===Object(a.b)&&Object.isExtensible(a.b)&&Object.defineProperty(a.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TableColumn",filename:"src\\index.ts"}}),"undefined"!==typeof i.Props&&i.Props&&i.Props===Object(i.Props)&&Object.isExtensible(i.Props)&&Object.defineProperty(i.Props,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EditableDataTableProps",filename:"src\\index.ts"}})},"./src/shared/EditorProps.ts":function(e,n){},"./src/useEditingList.ts":function(e,n,t){"use strict";t.d(n,"a",function(){return m});var i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),r=t.n(a),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),d=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=t("./node_modules/@sinoui/use-rest-list-api/dist/index.js"),u=t.n(l),c=t("./node_modules/react/index.js"),b=t("./src/useSimpleEditingList.ts");function m(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0,a=t||{},l=a.keyName,m=void 0===l?"id":l,p=a.alwaysEditing,f=void 0!==p&&p,g=u()(e,n,t),j=g.items,y=g.remove,v=g.update,x=g.save,O=g.isLoading,E=g.isError,h=g.query,_=g.fetch,w=g.sortWith,C=g.reload,T=g.reset,P=g.searchParams,L=g.sorts,D=Object(b.a)(j,t),k=D.setItems,S=D.remove,R=D.updateItem,A=D.setReadonly,B=Object(d.a)(D,["setItems","remove","updateItem","setReadonly"]);Object(c.useEffect)(function(){k(j)},[k,j]);var F=Object(c.useCallback)(function(e){return e[m]},[m]),W=Object(c.useCallback)(function(){var e=Object(o.a)(r.a.mark(function e(n,t){var i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!Array.isArray(n)){e.next=7;break}if(!((i=n.map(function(e){var n=Object(s.a)(e,1)[0];return F(n)}).filter(Boolean)).length>0)){e.next=5;break}return e.next=5,y(i,!1);case 5:e.next=10;break;case 7:if(!F(n)){e.next=10;break}return e.next=10,y(F(n),!1);case 10:S(Array.isArray(n)?n.map(function(e){return Object(s.a)(e,2)[1]}):t);case 11:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),[y,S,F]),I=Object(c.useCallback)(function(){var e=Object(o.a)(r.a.mark(function e(n,t){var i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!F(n)){e.next=6;break}return e.next=3,v(n,!1);case 3:i=e.sent,e.next=9;break;case 6:return e.next=8,x(n,!1);case 8:i=e.sent;case 9:R(t,i),f||A(t);case 11:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),[F,R,f,v,x,A]);return Object(i.a)({},B,{query:h,fetch:_,sortWith:w,reload:C,reset:T,searchParams:P,sorts:L,isLoading:O,isError:E,remove:W,save:I,idPropertyName:m,setReadonly:A})}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useEditingList",filename:"src\\useEditingList.ts"}})}}]);
//# sourceMappingURL=docs-validate.16835bdf53443f84b675.js.map