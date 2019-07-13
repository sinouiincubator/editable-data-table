(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./docs/validate.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return m});var i,a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=t("./node_modules/react/index.js"),o=t.n(r),d=t("./node_modules/@mdx-js/react/dist/index.es.js"),s=t("./node_modules/docz/dist/index.esm.js"),l=t("./src/index.ts"),u=t("./node_modules/sinoui-components/Button/index.js"),b=(i="Demo",{}),c="wrapper";function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(d.b)(c,Object.assign({},b,t,{components:n,mdxType:"MDXLayout"}),Object(d.b)("h1",{id:"\u6821\u9a8c"},"\u6821\u9a8c"),Object(d.b)("p",null,"EditableDataTable \u5185\u7f6e\u652f\u6301\u6821\u9a8c\uff0c\u4e5f\u652f\u6301\u5728\u8868\u683c\u7ec4\u4ef6\u7684\u5916\u90e8\u7ef4\u62a4\u6821\u9a8c\u72b6\u6001\u3002\u53ef\u4ee5\u4f7f\u7528 useSimpleEditingList \u7ba1\u7406\u5916\u7f6e\u7684\u6821\u9a8c\u72b6\u6001\u3002"),Object(d.b)("pre",null,Object(d.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport EditableDataTable, {\n  useSimpleEditingList,\n  TableColumn,\n} from '@sinouiincubator/editable-data-table';\n\ninterface User {\n  id: string;\n  name: string;\n  duty?: string;\n}\n\nfunction validate(rowData: User) {\n  const errors = {};\n\n  if (!rowData.name) {\n    errors.name = '\u5fc5\u586b';\n  }\n\n  if (rowData.duty && rowData.duty.startsWith('1')) {\n    errors.duty = '\u804c\u52a1\u4e0d\u80fd\u4ee51\u5f00\u5934';\n  }\n\n  return errors;\n}\n\nfunction Demo() {\n  const editingList = useSimpleEditingList<User>(\n    [\n      { id: '1', name: 'Jacking', duty: 'developer' },\n      { id: '2', name: 'zinuo', duty: 'developer' },\n    ],\n    {\n      alwaysEditing: true,\n      validate,\n    },\n  );\n\n  const handleSave = () => {\n    if (!editingList.validateAllEditingRows()) {\n      alert('\u6570\u636e\u6821\u9a8c\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u3002');\n    } else {\n      console.log('\u9700\u8981\u4fdd\u5b58\u7684\u6570\u636e', editingList.items);\n      alert('\u4fdd\u5b58\u6570\u636e\u6210\u529f');\n    }\n  };\n\n  return (\n    <>\n      <button onClick={handleSave}>\u4fdd\u5b58</button>\n      <EditableDataTable\n        data={editingList.items}\n        editingRows={editingList.editingRows}\n        errors={editingList.errors}\n        touched={editingList.touched}\n        onFieldChange={editingList.validateField}\n      >\n        <TableColumn order title=\"\u5e8f\u53f7\" />\n        <TableColumn title=\"\u59d3\u540d\" name=\"name\" editor=\"input\" />\n        <TableColumn title=\"\u804c\u52a1\" name=\"duty\" editor=\"input\" />\n      </EditableDataTable>\n    </>\n  );\n}\n")),Object(d.b)("p",null,"\u6f14\u793a\u6548\u679c\uff1a"),Object(d.b)(s.c,{__position:0,__code:"() => {\n  function validate(rowData) {\n    const errors = {}\n    if (!rowData.name) {\n      errors.name = '\u5fc5\u586b'\n    }\n\n    if (rowData.duty && rowData.duty.startsWith('1')) {\n      errors.duty = '\u804c\u52a1\u4e0d\u80fd\u4ee51\u5f00\u5934'\n    }\n\n    return errors\n  }\n\n  function Demo() {\n    const editingList = useSimpleEditingList(\n      [\n        { id: '1', name: 'Jacking', duty: 'developer' },\n        { id: '2', name: 'zinuo', duty: 'developer' },\n      ],\n      {\n        alwaysEditing: true,\n        validate,\n      },\n    )\n\n    const handleSave = () => {\n      if (!editingList.validateAllEditingRows()) {\n        alert('\u6570\u636e\u6821\u9a8c\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u3002')\n      } else {\n        console.log('\u9700\u8981\u4fdd\u5b58\u7684\u6570\u636e', editingList.items)\n        alert('\u4fdd\u5b58\u6570\u636e\u6210\u529f')\n      }\n    }\n\n    return (\n      <>\n        <Button raised onClick={handleSave}>\n          \u4fdd\u5b58\n        </Button>\n        <Button raised onClick={() => editingList.add({})}>\n          \u65b0\u589e\n        </Button>\n        <EditableDataTable\n          data={editingList.items}\n          editingRows={editingList.editingRows}\n          errors={editingList.errors}\n          touched={editingList.touched}\n          onFieldChange={editingList.validateField}\n        >\n          <TableColumn order title=\"\u5e8f\u53f7\" />\n          <TableColumn title=\"\u59d3\u540d\" name=\"name\" editor=\"input\" />\n          <TableColumn title=\"\u804c\u52a1\" name=\"duty\" editor=\"input\" />\n        </EditableDataTable>\n      </>\n    )\n  }\n\n  return <Demo />\n}",__scope:{props:this?this.props:t,Playground:s.c,EditableDataTable:l.b,useSimpleEditingList:l.d,TableColumn:l.a,Button:u.b},mdxType:"Playground"},function(){function e(e){var n={};return e.name||(n.name="\u5fc5\u586b"),e.duty&&e.duty.startsWith("1")&&(n.duty="\u804c\u52a1\u4e0d\u80fd\u4ee51\u5f00\u5934"),n}return Object(d.b)(function(){var n=Object(l.d)([{id:"1",name:"Jacking",duty:"developer"},{id:"2",name:"zinuo",duty:"developer"}],{alwaysEditing:!0,validate:e});return Object(d.b)(o.a.Fragment,null,Object(d.b)(u.b,{raised:!0,onClick:function(){n.validateAllEditingRows()?(console.log("\u9700\u8981\u4fdd\u5b58\u7684\u6570\u636e",n.items),alert("\u4fdd\u5b58\u6570\u636e\u6210\u529f")):alert("\u6570\u636e\u6821\u9a8c\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u3002")},mdxType:"Button"},"\u4fdd\u5b58"),Object(d.b)(u.b,{raised:!0,onClick:function(){return n.add({})},mdxType:"Button"},"\u65b0\u589e"),Object(d.b)(l.b,{data:n.items,editingRows:n.editingRows,errors:n.errors,touched:n.touched,onFieldChange:n.validateField,mdxType:"EditableDataTable"},Object(d.b)(l.a,{order:!0,title:"\u5e8f\u53f7",mdxType:"TableColumn"}),Object(d.b)(l.a,{title:"\u59d3\u540d",name:"name",editor:"input",mdxType:"TableColumn"}),Object(d.b)(l.a,{title:"\u804c\u52a1",name:"duty",editor:"input",mdxType:"TableColumn"})))},{mdxType:"Demo"})}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs\\validate.mdx"}}),m.isMDXComponent=!0},"./src/index.ts":function(e,n,t){"use strict";var i=t("./src/EditableDataTable.tsx"),a=t("./src/TableColumn.tsx");t.d(n,"a",function(){return a.b});var r=t("./src/shared/EditorProps.ts"),o=t.n(r),d=t("./src/useEditingList.ts");t.d(n,"c",function(){return d.a});var s=t("./src/useSimpleEditingList.ts");t.d(n,"d",function(){return s.a}),n.b=i.b,"undefined"!==typeof i.b&&i.b&&i.b===Object(i.b)&&Object.isExtensible(i.b)&&Object.defineProperty(i.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EditableDataTable",filename:"src\\index.ts"}}),"undefined"!==typeof s.a&&s.a&&s.a===Object(s.a)&&Object.isExtensible(s.a)&&Object.defineProperty(s.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useSimpleEditingList",filename:"src\\index.ts"}}),"undefined"!==typeof d.a&&d.a&&d.a===Object(d.a)&&Object.isExtensible(d.a)&&Object.defineProperty(d.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useEditingList",filename:"src\\index.ts"}}),"undefined"!==typeof o.a&&o.a&&o.a===Object(o.a)&&Object.isExtensible(o.a)&&Object.defineProperty(o.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EditorProps",filename:"src\\index.ts"}}),"undefined"!==typeof a.Props&&a.Props&&a.Props===Object(a.Props)&&Object.isExtensible(a.Props)&&Object.defineProperty(a.Props,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TableColumnProps",filename:"src\\index.ts"}}),"undefined"!==typeof a.b&&a.b&&a.b===Object(a.b)&&Object.isExtensible(a.b)&&Object.defineProperty(a.b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TableColumn",filename:"src\\index.ts"}}),"undefined"!==typeof i.Props&&i.Props&&i.Props===Object(i.Props)&&Object.isExtensible(i.Props)&&Object.defineProperty(i.Props,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EditableDataTableProps",filename:"src\\index.ts"}})},"./src/shared/EditorProps.ts":function(e,n){}}]);
//# sourceMappingURL=docs-validate.6f373422b77be96e8ba9.js.map