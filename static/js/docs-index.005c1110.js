(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./docs/index.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/react/index.js"),d=n.n(o),b=n("./node_modules/@mdx-js/react/dist/index.es.js"),u=n("./node_modules/docz/dist/index.esm.js"),s=n("./src/TableColumn.tsx"),r=n("./src/EditableDataTable.tsx"),c=n("./src/useEditingList.ts"),m=n("./node_modules/sinoui-components/Button/index.js"),p=n("./node_modules/sinoui-components/TextInput/index.js"),T=n("./node_modules/immer/dist/immer.module.js"),j=n("./src/useSimpleEditingList.ts"),O={},C="wrapper";function g(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(b.b)(C,Object.assign({},O,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"\u53ef\u7f16\u8f91\u8868\u683c"},"\u53ef\u7f16\u8f91\u8868\u683c"),Object(b.b)("p",null,"\u5b89\u88c5\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"yarn add @sinouiincubator/editable-data-table\n")),Object(b.b)("p",null,"\u5f15\u7528\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import EditableDataTable, {\n  TableColumn,\n} from '@sinouiincubator/editable-data-table';\n")),Object(b.b)("p",null,"\u6e90\u7801\u8def\u5f84\uff1a",Object(b.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/sinouiincubator/editable-data-table"}),"https://github.com/sinouiincubator/editable-data-table"),"\u3002"),Object(b.b)("p",null,"\u53ef\u7f16\u8f91\u5217\u8868\uff08",Object(b.b)("inlineCode",{parentName:"p"},"EditableDataTable"),"\uff09\u63d0\u4f9b\u4ee5\u4e0b\u529f\u80fd\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5c55\u73b0\u5217\u8868\u6570\u636e\uff08\u4e0d\u652f\u6301\u5206\u9875\uff0c\u4f46\u662f\u53ef\u4ee5\u4e0e\u5206\u9875\u529f\u80fd\u7ec4\u5408\u4f7f\u7528\uff09"),Object(b.b)("li",{parentName:"ul"},"\u7f16\u8f91\u6570\u636e\u884c"),Object(b.b)("li",{parentName:"ul"},"\u6821\u9a8c\u6570\u636e\u884c")),Object(b.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u57fa\u4e8e\u53ef\u7f16\u8f91\u8868\u683c\u505a\u5217\u8868\u6570\u636e\u7684\u589e\u5220\u6539\u67e5\u3002\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u4f8b\u5b50\u6765\u4e86\u89e3\u57fa\u672c\u7528\u6cd5\u3002"),Object(b.b)("h2",{id:"\u5c55\u73b0\u5217\u8868\u6570\u636e"},"\u5c55\u73b0\u5217\u8868\u6570\u636e"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"EditableDataTable"),"\u53ef\u4ee5\u7528\u6765\u5c55\u73b0\u5217\u8868\u6570\u636e\uff0c\u53ef\u4ee5\u901a\u8fc7",Object(b.b)("inlineCode",{parentName:"p"},"TableColumn"),"\u5b9a\u4e49\u5217\u8868\u7684\u5217\u4fe1\u606f\uff1a\u5217\u6807\u9898\u3001\u5217\u5355\u5143\u683c\u6570\u636e\u6e32\u67d3\u903b\u8f91\u3001\u5bbd\u5ea6\u7b49\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import EditableDataTable, {\n  TableColumn,\n} from '@sinouiincubator/editable-data-table';\n\nfunction Demo() {\n  const users = [\n    {\n      id: '1',\n      firstName: 'Jacking',\n      lastName: 'Liu',\n      title: 'developer',\n    },\n    {\n      id: '2',\n      firstName: 'Zinuo',\n      lastName: 'Tian',\n      title: 'developer',\n    },\n  ];\n\n  return (\n    <EditableDataTable data={users}>\n      <TableColumn title=\"id\" name=\"id\" />\n      <TableColumn\n        title=\"\u59d3\u540d\"\n        render={(value, row) => `${row.firstName} ${row.lastName}`}\n      />\n      <TableColumn title=\"\u6807\u9898\" name=\"title\" />\n    </EditableDataTable>\n  );\n}\n")),Object(b.b)("p",null,"\u67e5\u770b\u8fd0\u884c\u6548\u679c\uff1a"),Object(b.b)(u.c,{__position:0,__code:"() => {\n  const users = [\n    {\n      id: '1',\n      firstName: 'Jacking',\n      lastName: 'Liu',\n      title: 'developer',\n    },\n    {\n      id: '2',\n      firstName: 'Zinuo',\n      lastName: 'Tian',\n      title: 'developer',\n    },\n  ]\n  return (\n    <EditableDataTable data={users}>\n      <TableColumn title=\"id\" name=\"id\" />\n      <TableColumn\n        title=\"\u59d3\u540d\"\n        render={(value, row) => `${row.firstName} ${row.lastName}`}\n      />\n      <TableColumn title=\"\u6807\u9898\" name=\"title\" />\n    </EditableDataTable>\n  )\n}",__scope:{props:this?this.props:n,useState:o.useState,useCallback:o.useCallback,useMemo:o.useMemo,Playground:u.c,Props:u.d,TableColumn:s.b,EditableDataTable:r.b,useEditingList:c.a,Button:m.b,TextInput:p.b,produce:T.default,useSimpleEditingList:j.a},mdxType:"Playground"},function(){return Object(b.b)(r.b,{data:[{id:"1",firstName:"Jacking",lastName:"Liu",title:"developer"},{id:"2",firstName:"Zinuo",lastName:"Tian",title:"developer"}],mdxType:"EditableDataTable"},Object(b.b)(s.b,{title:"id",name:"id",mdxType:"TableColumn"}),Object(b.b)(s.b,{title:"\u59d3\u540d",render:function(e,t){return"".concat(t.firstName," ").concat(t.lastName)},mdxType:"TableColumn"}),Object(b.b)(s.b,{title:"\u6807\u9898",name:"title",mdxType:"TableColumn"}))}),Object(b.b)("h2",{id:"\u7f16\u8f91\u6570\u636e\u884c"},"\u7f16\u8f91\u6570\u636e\u884c"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"EditableDataTable"),"\u7ec4\u4ef6\u901a\u8fc7",Object(b.b)("inlineCode",{parentName:"p"},"editingRows"),"\u63a5\u6536\u6570\u636e\u884c\u662f\u5426\u5904\u4e8e\u7f16\u8f91\u72b6\u6001\u7684\u6570\u636e\u3002\u8fd9\u662f\u4e00\u4e2a\u4e0e",Object(b.b)("inlineCode",{parentName:"p"},"data"),"\u6570\u7ec4\u7b49\u957f\u7684\u5e03\u5c14\u6570\u7ec4\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"editingRows"),"\u6570\u7ec4\u7684\u6bcf\u4e00\u9879\u4e0e",Object(b.b)("inlineCode",{parentName:"p"},"data"),"\u6570\u7ec4\u4e00\u4e00\u5bf9\u5e94\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"true"),"\u8868\u793a\u7f16\u8f91\u72b6\u6001\u3001",Object(b.b)("inlineCode",{parentName:"p"},"false"),"\u8868\u793a\u975e\u7f16\u8f91\u72b6\u6001\u3002"),Object(b.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7",Object(b.b)("inlineCode",{parentName:"p"},"TableColumn"),"\u7ec4\u4ef6\u7684",Object(b.b)("inlineCode",{parentName:"p"},"editor"),"\u5c5e\u6027\u6307\u5b9a\u5355\u5143\u683c\u7684\u7f16\u8f91\u5668\u3002\u5982\u4e0b\u6240\u793a\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'import EditableDataTable, {\n  TableColumn,\n} from \'@sinouiincubator/editable-data-table\';\n\nfunction Demo() {\n  const users = [\n    {\n      id: \'1\',\n      name: \'Jacking\',\n      title: \'developer\',\n    },\n    {\n      id: \'2\',\n      name: \'zinuo\',\n      title: \'developer\',\n    },\n  ];\n\n  const editingRows = [false, true]; // \u7b2c\u4e8c\u884c\u6570\u636e\u662f\u7f16\u8f91\u72b6\u6001\n\n  return (\n    <EditableDataTable data={users} editingRows={editingRows}>\n      <TableColumn title="id" name="id" editor="input" />\n      <TableColumn title="\u59d3\u540d" name="name" editor="input" />\n      <TableColumn title="\u6807\u9898" name="title" editor="input" />\n    </EditableDataTable>\n  );\n}\n')),Object(b.b)("p",null,"\u67e5\u770b\u8fd0\u884c\u6548\u679c\uff1a"),Object(b.b)(u.c,{__position:1,__code:'() => {\n  const users = [\n    {\n      id: \'1\',\n      name: \'Jacking\',\n      title: \'developer\',\n    },\n    {\n      id: \'2\',\n      name: \'zinuo\',\n      title: \'developer\',\n    },\n  ]\n  const editingRows = [false, true] // \u7b2c\u4e8c\u884c\u6570\u636e\u662f\u7f16\u8f91\u72b6\u6001\n\n  return (\n    <EditableDataTable data={users} editingRows={editingRows}>\n      <TableColumn title="id" name="id" editor="input" />\n      <TableColumn title="\u59d3\u540d" name="name" editor="input" />\n      <TableColumn title="\u6807\u9898" name="title" editor="input" />\n    </EditableDataTable>\n  )\n}',__scope:{props:this?this.props:n,useState:o.useState,useCallback:o.useCallback,useMemo:o.useMemo,Playground:u.c,Props:u.d,TableColumn:s.b,EditableDataTable:r.b,useEditingList:c.a,Button:m.b,TextInput:p.b,produce:T.default,useSimpleEditingList:j.a},mdxType:"Playground"},function(){return Object(b.b)(r.b,{data:[{id:"1",name:"Jacking",title:"developer"},{id:"2",name:"zinuo",title:"developer"}],editingRows:[!1,!0],mdxType:"EditableDataTable"},Object(b.b)(s.b,{title:"id",name:"id",editor:"input",mdxType:"TableColumn"}),Object(b.b)(s.b,{title:"\u59d3\u540d",name:"name",editor:"input",mdxType:"TableColumn"}),Object(b.b)(s.b,{title:"\u6807\u9898",name:"title",editor:"input",mdxType:"TableColumn"}))}),Object(b.b)("h2",{id:"\u6821\u9a8c\u6570\u636e\u884c"},"\u6821\u9a8c\u6570\u636e\u884c"),Object(b.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7",Object(b.b)("inlineCode",{parentName:"p"},"EditableDataTable"),"\u7684",Object(b.b)("inlineCode",{parentName:"p"},"validate"),"\u5c5e\u6027\u6307\u5b9a\u884c\u6570\u636e\u7684\u6821\u9a8c\uff0c\u8fd9\u662f\u4e00\u4e2a\u65b9\u6cd5\uff0c\u65b9\u6cd5\u8fd4\u56de\u9a8c\u8bc1\u9519\u8bef\u7684\u7ed3\u679c\u3002\u5982\u4e0b\u6240\u793a\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"function validate(rowData) {\n  const errors = {};\n\n  if (!rowData.id) {\n    errors.id = '\u5fc5\u586b';\n  }\n\n  if (!rowData.name) {\n    errors.name = '\u5fc5\u586b';\n  }\n\n  if (rowData.title && rowData.title.startsWith('1')) {\n    errors.title = '\u4e0d\u80fd\u4ee51\u5f00\u5934';\n  }\n\n  return errors;\n}\n")),Object(b.b)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u8fd0\u884c\u7684\u7ed3\u679c\u7c7b\u4f3c\u5982\u4e0b\u9762\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"{\n  id: '\u5fc5\u586b',\n  title: '\u4e0d\u80fd\u4ee51\u5f00\u5934'\n}\n")),Object(b.b)("p",null,"\u8fd9\u4e2a\u952e\u503c\u5bf9\u6570\u636e\uff0c\u952e\u8868\u793a\u6709\u9a8c\u8bc1\u9519\u8bef\u7684\u5b57\u6bb5\u540d\uff08\u8868\u5355\u57df\u540d\u79f0\uff09\uff0c\u503c\u8868\u793a\u5b57\u6bb5\u540d\u5bf9\u5e94\u7684\u9a8c\u8bc1\u9519\u8bef\u3002"),Object(b.b)("p",null,"\u770b\u770b\u6548\u679c\uff1a"),Object(b.b)(u.c,{__position:2,__code:"() => {\n  function validate(rowData) {\n    const errors = {}\n    if (!rowData.id) {\n      errors.id = '\u5fc5\u586b'\n    }\n\n    if (!rowData.name) {\n      errors.name = '\u5fc5\u586b'\n    }\n\n    if (rowData.title && rowData.title.startsWith('1')) {\n      errors.title = '\u4e0d\u80fd\u4ee51\u5f00\u5934'\n    }\n\n    return errors\n  }\n\n  const users = [\n    {\n      id: '1',\n      name: 'Jacking',\n      title: 'developer',\n    },\n    {\n      id: '2',\n      name: 'zinuo',\n      title: 'developer',\n    },\n  ]\n\n  const editingRows = [false, true] // \u7b2c\u4e8c\u884c\u6570\u636e\u662f\u7f16\u8f91\u72b6\u6001\n\n  return (\n    <EditableDataTable\n      data={users}\n      editingRows={editingRows}\n      validate={validate}\n    >\n      <TableColumn title=\"id\" name=\"id\" editor=\"input\" />\n      <TableColumn title=\"\u59d3\u540d\" name=\"name\" editor=\"input\" />\n      <TableColumn title=\"\u6807\u9898\" name=\"title\" editor=\"input\" />\n    </EditableDataTable>\n  )\n}",__scope:{props:this?this.props:n,useState:o.useState,useCallback:o.useCallback,useMemo:o.useMemo,Playground:u.c,Props:u.d,TableColumn:s.b,EditableDataTable:r.b,useEditingList:c.a,Button:m.b,TextInput:p.b,produce:T.default,useSimpleEditingList:j.a},mdxType:"Playground"},function(){return Object(b.b)(r.b,{data:[{id:"1",name:"Jacking",title:"developer"},{id:"2",name:"zinuo",title:"developer"}],editingRows:[!1,!0],validate:function(e){var t={};return e.id||(t.id="\u5fc5\u586b"),e.name||(t.name="\u5fc5\u586b"),e.title&&e.title.startsWith("1")&&(t.title="\u4e0d\u80fd\u4ee51\u5f00\u5934"),t},mdxType:"EditableDataTable"},Object(b.b)(s.b,{title:"id",name:"id",editor:"input",mdxType:"TableColumn"}),Object(b.b)(s.b,{title:"\u59d3\u540d",name:"name",editor:"input",mdxType:"TableColumn"}),Object(b.b)(s.b,{title:"\u6807\u9898",name:"title",editor:"input",mdxType:"TableColumn"}))}),Object(b.b)("h2",{id:"\u589e\u5220\u6539\u67e5"},"\u589e\u5220\u6539\u67e5"),Object(b.b)("p",null,"\u53ef\u4ee5\u57fa\u4e8e",Object(b.b)("inlineCode",{parentName:"p"},"EditableDataTable"),"\u5b9e\u73b0\u589e\u5220\u6539\u67e5\u3002\u770b\u770b\u4e0b\u9762\u4e00\u4e2a\u4e0e\u540e\u7aef API \u65e0\u6cd5\u7684\u589e\u5220\u6539\u67e5\u793a\u4f8b\uff1a"),Object(b.b)(u.c,{__position:3,__code:"() => {\n  const validate = data => {\n    const result = {}\n    if (!data.id) {\n      result.id = '\u5fc5\u586b'\n    }\n    if (data.title && data.title.startsWith('1')) {\n      result.title = '\u6807\u9898\u4e0d\u80fd\u4ee51\u5f00\u5934'\n    }\n    return result\n  }\n  const [editingRows, setEditingRows] = useState([true, false])\n  const [items, setItems] = useState([\n    { id: '1', title: '123' },\n    { id: '2', title: '1234' },\n  ])\n\n  const handleSave = (row, index, context) => {\n    if (!context.validate()) {\n      alert('\u6570\u636e\u586b\u5199\u4e0d\u5b8c\u6574')\n    } else {\n      setEditingRows(\n        produce(editingRows, draft => {\n          draft[index] = false\n        }),\n      )\n      alert('\u4fdd\u5b58\u6210\u529f')\n    }\n  }\n\n  const handleEdit = index => {\n    setEditingRows(\n      produce(editingRows, draft => {\n        draft[index] = true\n      }),\n    )\n  }\n\n  const handleRemove = index => {\n    const removeByIndex = produce(draft => {\n      draft.splice(index, 1)\n    })\n    setEditingRows(removeByIndex)\n    setItems(removeByIndex)\n  }\n\n  const handleAdd = () => {\n    setEditingRows([...editingRows, true])\n    setItems([...items, {}])\n  }\n\n  return (\n    <>\n      <Button onClick={handleAdd}>\u65b0\u589e</Button>\n      <EditableDataTable\n        data={items}\n        editingRows={editingRows}\n        validate={validate}\n      >\n        <TableColumn title=\"\u5e8f\u53f7\" order />\n        <TableColumn title=\"id\" name=\"id\" editor={TextInput} />\n        <TableColumn title=\"\u6807\u9898\" name=\"title\" editor={TextInput} />\n        <TableColumn\n          title=\"\u64cd\u4f5c\"\n          name=\"id\"\n          render={(value, row, index, id, context) => (\n            <>\n              {context.editing ? (\n                <Button\n                  autoWidth\n                  onClick={() => handleSave(row, index, context)}\n                >\n                  \u4fdd\u5b58\n                </Button>\n              ) : (\n                <Button autoWidth onClick={() => handleEdit(index)}>\n                  \u7f16\u8f91\n                </Button>\n              )}\n              <Button autoWidth onClick={() => handleRemove(index)}>\n                \u5220\u9664\n              </Button>\n            </>\n          )}\n        />\n      </EditableDataTable>\n    </>\n  )\n}",__scope:{props:this?this.props:n,useState:o.useState,useCallback:o.useCallback,useMemo:o.useMemo,Playground:u.c,Props:u.d,TableColumn:s.b,EditableDataTable:r.b,useEditingList:c.a,Button:m.b,TextInput:p.b,produce:T.default,useSimpleEditingList:j.a},mdxType:"Playground"},function(){var e=Object(o.useState)([!0,!1]),t=Object(a.a)(e,2),n=t[0],l=t[1],u=Object(o.useState)([{id:"1",title:"123"},{id:"2",title:"1234"}]),c=Object(a.a)(u,2),j=c[0],O=c[1];return Object(b.b)(d.a.Fragment,null,Object(b.b)(m.b,{onClick:function(){l([].concat(Object(i.a)(n),[!0])),O([].concat(Object(i.a)(j),[{}]))},mdxType:"Button"},"\u65b0\u589e"),Object(b.b)(r.b,{data:j,editingRows:n,validate:function(e){var t={};return e.id||(t.id="\u5fc5\u586b"),e.title&&e.title.startsWith("1")&&(t.title="\u6807\u9898\u4e0d\u80fd\u4ee51\u5f00\u5934"),t},mdxType:"EditableDataTable"},Object(b.b)(s.b,{title:"\u5e8f\u53f7",order:!0,mdxType:"TableColumn"}),Object(b.b)(s.b,{title:"id",name:"id",editor:p.b,mdxType:"TableColumn"}),Object(b.b)(s.b,{title:"\u6807\u9898",name:"title",editor:p.b,mdxType:"TableColumn"}),Object(b.b)(s.b,{title:"\u64cd\u4f5c",name:"id",render:function(e,t,i,a,o){return Object(b.b)(d.a.Fragment,null,o.editing?Object(b.b)(m.b,{autoWidth:!0,onClick:function(){return function(e,t,i){i.validate()?(l(Object(T.default)(n,function(e){e[t]=!1})),alert("\u4fdd\u5b58\u6210\u529f")):alert("\u6570\u636e\u586b\u5199\u4e0d\u5b8c\u6574")}(0,i,o)},mdxType:"Button"},"\u4fdd\u5b58"):Object(b.b)(m.b,{autoWidth:!0,onClick:function(){return function(e){l(Object(T.default)(n,function(t){t[e]=!0}))}(i)},mdxType:"Button"},"\u7f16\u8f91"),Object(b.b)(m.b,{autoWidth:!0,onClick:function(){return function(e){var t=Object(T.default)(function(t){t.splice(e,1)});l(t),O(t)}(i)},mdxType:"Button"},"\u5220\u9664"))},mdxType:"TableColumn"})))}),Object(b.b)("h2",{id:"\u4f7f\u7528-useeditinglist"},"\u4f7f\u7528 useEditingList"),Object(b.b)("p",null,"\u53ef\u4ee5\u4f7f\u7528 useEditingList \u7b80\u5316\u589e\u5220\u6539\u67e5\u573a\u666f\u7684\u5f00\u53d1\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5185\u7f6e",Object(b.b)("inlineCode",{parentName:"li"},"editingRows"),"\u548c",Object(b.b)("inlineCode",{parentName:"li"},"items"),"\u4e24\u4e2a\u72b6\u6001\u548c\u53d8\u66f4\u65b9\u6cd5\u3002"),Object(b.b)("li",{parentName:"ul"},"\u96c6\u6210\u4e86",Object(b.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/sinoui/use-rest-list-api"}),"@sinoui/use-rest-list-api"),"\uff0c\u4e0e\u540e\u7aef API \u505a\u589e\u5220\u6539\u67e5\u4ea4\u4e92\u3002")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import EditableDataTable, {\n  useEiditingList,\n  TableColumn,\n} from '@sinouiincubator/editable-data-table';\nimport Button from 'sinoui-components/Button';\nimport TextInput from 'sinoui-components/TextInput';\n\nfunction validate(data) {\n  const result = {};\n  if (!data.id) {\n    result.id = '\u5fc5\u586b';\n  }\n  if (data.title && data.title.startsWith('1')) {\n    result.title = '\u6807\u9898\u4e0d\u80fd\u4ee51\u5f00\u5934';\n  }\n  return result;\n}\n\nfunction Demo() {\n  const {\n    items,\n    add,\n    edit,\n    save,\n    remove,\n    idPropertyName,\n    editingRows,\n  } = useEditingList('/api/tests', []);\n\n  const handleSave = (row, index, context) => {\n    if (!context.validate()) {\n      alert('\u6570\u636e\u586b\u5199\u4e0d\u5b8c\u6574');\n    } else {\n      save(row, index);\n      alert('\u4fdd\u5b58\u6210\u529f');\n    }\n  };\n\n  return (\n    <>\n      <Button onClick={add}>\u65b0\u589e</Button>\n      <EditableDataTable\n        data={items}\n        editingRows={editingRows}\n        validate={validate}\n        idPropertyName={idPropertyName}\n      >\n        <TableColumn title=\"\u5e8f\u53f7\" order />\n        <TableColumn title=\"\u6807\u9898\" name=\"title\" editor={TextInput} />\n        <TableColumn title=\"\u5907\u6ce8\" name=\"note\" editor={TextInput} />\n        <TableColumn\n          title=\"\u64cd\u4f5c\"\n          name=\"id\"\n          render={(value, row, index, id, context) => (\n            <>\n              {context.editing ? (\n                <Button\n                  autoWidth\n                  onClick={() => handleSave(row, index, context)}\n                >\n                  \u4fdd\u5b58\n                </Button>\n              ) : (\n                <Button autoWidth onClick={() => edit(index)}>\n                  \u7f16\u8f91\n                </Button>\n              )}\n              <Button autoWidth onClick={() => remove(row, index)}>\n                \u5220\u9664\n              </Button>\n            </>\n          )}\n        />\n      </EditableDataTable>\n    </>\n  );\n}\n")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"useEditingList.add()"),"\u65b9\u6cd5\u53ef\u4ee5\u6307\u5b9a\u6dfb\u52a0\u6570\u636e\u7684\u4f4d\u7f6e\uff0c\u9ed8\u8ba4\u5728\u672b\u5c3e\u6dfb\u52a0\u6570\u636e\uff0c\u5982\u679c\u9700\u8981\u5728\u5f00\u59cb\u4f4d\u7f6e\u6dfb\u52a0\u6570\u636e\uff0c\u5219\u53ef\u4ee5\u6307\u5b9a",Object(b.b)("inlineCode",{parentName:"p"},"index"),"\u53c2\u6570\u4e3a 0 \u5373\u53ef\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"const { add } = useEditingList('url');\n\n// \u5728\u5f00\u59cb\u4f4d\u7f6e\u6dfb\u52a0\u6570\u636e\nadd({}, 0);\n")),Object(b.b)("p",null,"\u793a\u4f8b\uff1a"),Object(b.b)(u.c,{__position:4,__code:'() => {\n  const validate = data => {\n    const result = {}\n\n    if (data.title && data.title.startsWith(\'1\')) {\n      result.title = \'\u6807\u9898\u4e0d\u80fd\u4ee51\u5f00\u5934\'\n    }\n    return result\n  }\n  const {\n    items,\n    add,\n    edit,\n    save,\n    remove,\n    idPropertyName,\n    editingRows,\n  } = useEditingList(\'/api/tests\', [])\n\n  const handleSave = (row, index, context) => {\n    if (!context.validate()) {\n      alert(\'\u6570\u636e\u586b\u5199\u4e0d\u5b8c\u6574\')\n    } else {\n      save(row, index).then(\n        () => {\n          alert(\'\u4fdd\u5b58\u6210\u529f\')\n        },\n        () => {\n          alert(\'\u4fdd\u5b58\u5931\u8d25\')\n        },\n      )\n    }\n  }\n\n  return (\n    <>\n      <Button onClick={add}>\u65b0\u589e</Button>\n      <EditableDataTable\n        data={items}\n        editingRows={editingRows}\n        validate={validate}\n        idPropertyName={idPropertyName}\n      >\n        <TableColumn title="\u5e8f\u53f7" order />\n        <TableColumn title="\u6807\u9898" name="title" editor={TextInput} />\n        <TableColumn title="\u5907\u6ce8" name="note" editor={TextInput} />\n        <TableColumn\n          title="\u64cd\u4f5c"\n          name="id"\n          render={(value, row, index, id, context) => (\n            <>\n              {context.editing ? (\n                <Button\n                  autoWidth\n                  onClick={() => handleSave(row, index, context)}\n                >\n                  \u4fdd\u5b58\n                </Button>\n              ) : (\n                <Button autoWidth onClick={() => edit(index)}>\n                  \u7f16\u8f91\n                </Button>\n              )}\n              <Button autoWidth onClick={() => remove(row, index)}>\n                \u5220\u9664\n              </Button>\n            </>\n          )}\n        />\n      </EditableDataTable>\n    </>\n  )\n}',__scope:{props:this?this.props:n,useState:o.useState,useCallback:o.useCallback,useMemo:o.useMemo,Playground:u.c,Props:u.d,TableColumn:s.b,EditableDataTable:r.b,useEditingList:c.a,Button:m.b,TextInput:p.b,produce:T.default,useSimpleEditingList:j.a},mdxType:"Playground"},function(){var e=Object(c.a)("/api/tests",[]),t=e.items,n=e.add,i=e.edit,a=e.save,l=e.remove,o=e.idPropertyName,u=e.editingRows;return Object(b.b)(d.a.Fragment,null,Object(b.b)(m.b,{onClick:n,mdxType:"Button"},"\u65b0\u589e"),Object(b.b)(r.b,{data:t,editingRows:u,validate:function(e){var t={};return e.title&&e.title.startsWith("1")&&(t.title="\u6807\u9898\u4e0d\u80fd\u4ee51\u5f00\u5934"),t},idPropertyName:o,mdxType:"EditableDataTable"},Object(b.b)(s.b,{title:"\u5e8f\u53f7",order:!0,mdxType:"TableColumn"}),Object(b.b)(s.b,{title:"\u6807\u9898",name:"title",editor:p.b,mdxType:"TableColumn"}),Object(b.b)(s.b,{title:"\u5907\u6ce8",name:"note",editor:p.b,mdxType:"TableColumn"}),Object(b.b)(s.b,{title:"\u64cd\u4f5c",name:"id",render:function(e,t,n,o,u){return Object(b.b)(d.a.Fragment,null,u.editing?Object(b.b)(m.b,{autoWidth:!0,onClick:function(){return function(e,t,n){n.validate()?a(e,t).then(function(){alert("\u4fdd\u5b58\u6210\u529f")},function(){alert("\u4fdd\u5b58\u5931\u8d25")}):alert("\u6570\u636e\u586b\u5199\u4e0d\u5b8c\u6574")}(t,n,u)},mdxType:"Button"},"\u4fdd\u5b58"):Object(b.b)(m.b,{autoWidth:!0,onClick:function(){return i(n)},mdxType:"Button"},"\u7f16\u8f91"),Object(b.b)(m.b,{autoWidth:!0,onClick:function(){return l(t,n)},mdxType:"Button"},"\u5220\u9664"))},mdxType:"TableColumn"})))}),Object(b.b)("h2",{id:"\u4f7f\u7528-usesimpleeditinglist"},"\u4f7f\u7528 useSimpleEditingList"),Object(b.b)("p",null,"\u4f7f\u7528\u5176\u7b80\u5316\u53ef\u7f16\u8f91\u5217\u8868\u7684\u5f00\u53d1\uff0c\u4e0d\u4e0e\u540e\u7aef\u4ea4\u4e92\uff0c\u4f46\u5305\u542b\u6821\u9a8c\u3002"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u53ea\u6709\u4f7f\u7528",Object(b.b)("inlineCode",{parentName:"li"},"setItems"),"\u624d\u80fd\u66f4\u6362\u5217\u8868\u6570\u636e"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"useSimpleEditingList(defaultItems)"),"\u53ea\u662f\u6307\u5b9a\u9ed8\u8ba4\u6570\u636e")),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'import EditableDataTable, {\n  useEiditingList,\n  TableColumn,\n} from \'@sinouiincubator/editable-data-table\';\nimport Button from \'sinoui-components/Button\';\nimport TextInput from \'sinoui-components/TextInput\';\n\nfunction Demo() {\n  const {\n    items,\n    add,\n    remove,\n    edit,\n    editingRows,\n    setItems,\n    setReadonly,\n  } = useSimpleEditingList([]);\n\n  return (\n    <>\n      <Button onClick={() => add({})}>\u65b0\u589e</Button>\n      <EditableDataTable data={items} editingRows={editingRows}>\n        <TableColumn title="\u5e8f\u53f7" order />\n        <TableColumn title="\u6807\u9898" name="title" editor={TextInput} />\n        <TableColumn title="\u5907\u6ce8" name="note" editor={TextInput} />\n        <TableColumn\n          title="\u64cd\u4f5c"\n          name="id"\n          render={(value, row, index, id, context) => (\n            <>\n              {context.editing ? (\n                <Button autoWidth onClick={() => setReadonly(index)}>\n                  \u4fdd\u5b58\n                </Button>\n              ) : (\n                <Button autoWidth onClick={() => edit(index)}>\n                  \u7f16\u8f91\n                </Button>\n              )}\n              <Button autoWidth onClick={() => remove(index)}>\n                \u5220\u9664\n              </Button>\n            </>\n          )}\n        />\n      </EditableDataTable>\n    </>\n  );\n}\n')),Object(b.b)("p",null,"\u793a\u4f8b\uff1a"),Object(b.b)(u.c,{__position:5,__code:'() => {\n  const {\n    items,\n    add,\n    remove,\n    edit,\n    editingRows,\n    setItems,\n    setReadonly,\n  } = useSimpleEditingList([])\n  return (\n    <>\n      <Button onClick={() => add({})}>\u65b0\u589e</Button>\n      <EditableDataTable data={items} editingRows={editingRows}>\n        <TableColumn title="\u5e8f\u53f7" order />\n        <TableColumn title="\u6807\u9898" name="title" editor={TextInput} />\n        <TableColumn title="\u5907\u6ce8" name="note" editor={TextInput} />\n        <TableColumn\n          title="\u64cd\u4f5c"\n          name="id"\n          render={(value, row, index, id, context) => (\n            <>\n              {context.editing ? (\n                <Button autoWidth onClick={() => setReadonly(index)}>\n                  \u4fdd\u5b58\n                </Button>\n              ) : (\n                <Button autoWidth onClick={() => edit(index)}>\n                  \u7f16\u8f91\n                </Button>\n              )}\n              <Button autoWidth onClick={() => remove(index)}>\n                \u5220\u9664\n              </Button>\n            </>\n          )}\n        />\n      </EditableDataTable>\n    </>\n  )\n}',__scope:{props:this?this.props:n,useState:o.useState,useCallback:o.useCallback,useMemo:o.useMemo,Playground:u.c,Props:u.d,TableColumn:s.b,EditableDataTable:r.b,useEditingList:c.a,Button:m.b,TextInput:p.b,produce:T.default,useSimpleEditingList:j.a},mdxType:"Playground"},function(){var e=Object(j.a)([]),t=e.items,n=e.add,i=e.remove,a=e.edit,l=e.editingRows,o=(e.setItems,e.setReadonly);return Object(b.b)(d.a.Fragment,null,Object(b.b)(m.b,{onClick:function(){return n({})},mdxType:"Button"},"\u65b0\u589e"),Object(b.b)(r.b,{data:t,editingRows:l,mdxType:"EditableDataTable"},Object(b.b)(s.b,{title:"\u5e8f\u53f7",order:!0,mdxType:"TableColumn"}),Object(b.b)(s.b,{title:"\u6807\u9898",name:"title",editor:p.b,mdxType:"TableColumn"}),Object(b.b)(s.b,{title:"\u5907\u6ce8",name:"note",editor:p.b,mdxType:"TableColumn"}),Object(b.b)(s.b,{title:"\u64cd\u4f5c",name:"id",render:function(e,t,n,l,u){return Object(b.b)(d.a.Fragment,null,u.editing?Object(b.b)(m.b,{autoWidth:!0,onClick:function(){return o(n)},mdxType:"Button"},"\u4fdd\u5b58"):Object(b.b)(m.b,{autoWidth:!0,onClick:function(){return a(n)},mdxType:"Button"},"\u7f16\u8f91"),Object(b.b)(m.b,{autoWidth:!0,onClick:function(){return i(n)},mdxType:"Button"},"\u5220\u9664"))},mdxType:"TableColumn"})))}),Object(b.b)("h2",{id:"\u65e0\u6570\u636e"},"\u65e0\u6570\u636e"),Object(b.b)(u.c,{__position:6,__code:'<EditableDataTable data={[]}>\n  <TableColumn title="id" name="id" />\n  <TableColumn title="\u6807\u9898" name="title" />\n</EditableDataTable>',__scope:{props:this?this.props:n,useState:o.useState,useCallback:o.useCallback,useMemo:o.useMemo,Playground:u.c,Props:u.d,TableColumn:s.b,EditableDataTable:r.b,useEditingList:c.a,Button:m.b,TextInput:p.b,produce:T.default,useSimpleEditingList:j.a},mdxType:"Playground"},Object(b.b)(r.b,{data:[],mdxType:"EditableDataTable"},Object(b.b)(s.b,{title:"id",name:"id",mdxType:"TableColumn"}),Object(b.b)(s.b,{title:"\u6807\u9898",name:"title",mdxType:"TableColumn"}))))}g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/index.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-index.1c7c4f734189ae6a380d.js.map