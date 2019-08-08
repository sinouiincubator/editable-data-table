# 版本变更说明

## v0.8.1 - 2019.8.8

- fix: 修复 useEditingList 丢失`validateRow`的 ts 类型声明问题

## v0.8.0 - 2019.8.6

- feat: useSimpleEditingList 支持单行数据校验`validateRow`

## v0.7.0 - 2019.8.6

- feat: useEditingList 对外导出`setItems`和`updateItem`

## v0.6.1 - 2019.7.16

- fix: useSimpleEditingList，没有数据时，应不是全选状态

## v0.6.0 - 2019.7.16

- breakchange: 去掉 useSimpleEditingList 的 removeItems 方法，remove 方法支持删除多个数据项。
- breakchange: useEditingList 不再暴露出多余的 useRestListApi 的返回值。
- feat: useEditingList 支持删除一组数据
- feat: useEditingList 支持校验状态维护
- refactor: useEditingList 内部采用 useSimpleEditingList 作为可编辑列表内部状态管理。
- feat: useSimpleEditingList 和 useEditingList 均支持行选择状态管理

## v0.5.2 - 2019.7.12

- fix: 修复 useEditingList 的 options 没有起到作用的缺陷
- fix: 修复 useSimpleEditingList 返回值类型为 any 的缺陷

## v0.5.1 - 2019.7.12

- fix: useEditingList 没有返回 useRestListApi 的返回值

## v0.5.0 - 2019.7.12

- feat: 支持在指定位置新增数据

## v0.4.0 - 2019.7.11

- feat: 支持样式定制

## v0.3.0 - 2019.7.11

- feat: 支持 use-rest-list-api 请求和响应转换相关配置

## v0.2.0 - 2019.7.10

- feat: 支持校验逻辑外置
- feat: useSimpleEditingList

## v0.1.2 - 2019.7.9

- fix: 修复删除正在编辑的数据行时编辑器状态不发生变化的缺陷

## v0.1.1 - 2019.7.9

- feat: 对外导出 useEditingList
