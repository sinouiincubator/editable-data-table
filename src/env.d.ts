interface ErrorResult {
  [fieldName: string]: string;
}

interface TouchedState {
  [fieldName: string]: boolean;
}

interface SimpleEditingListResult<T> {
  /**
   * 列表数据
   */
  items: T[];
  /**
   * 设置列表数据
   *
   * @param newItems 新的列表数据
   */
  setItems(newItems: T[]): void;
  /**
   * 数据行的编辑状态。
   */
  editingRows: boolean[];
  /**
   * 设置数据行处于编辑状态
   *
   * @param rowIndex 数据行所在的索引位置
   */
  edit(rowIndex: number): void;
  /**
   * 设置数据行处于只读状态
   *
   * @param rowIndex 数据行所在的索引位置
   */
  setReadonly(rowIndex: number): void;
  /**
   * 添加数据行
   *
   * @param item 需要添加的数据行
   */
  add(item: T): void;
  /**
   * 删除数据行
   *
   * @param index 数据行所在的索引位置
   */
  remove(index: number): void;
  /**
   * 删除一组数据行
   *
   * @param indexes 一组数据行所在的索引位置
   */
  removeItems(indexes: number[]): void;
  /**
   * 更新数据行
   *
   * @param index 数据行所在的索引位置
   * @param item 新的数据对象
   */
  updateItem(index: number, item: T): void;
  /**
   * 错误状态
   */
  errors: ErrorResult[];
  /**
   * 编辑器被点击状态
   */
  touched: TouchedState[];
  /**
   * 校验单个数据项
   *
   * @param index 数据行所在的索引位置
   * @param fieldName 数据项名称
   * @param rowData 数据行的新数据对象
   */
  validateField(index: number, fieldName: string, rowData: T): void;
  /**
   * 校验所有编辑中的数据行
   */
  validateAllEditingRows(): boolean;
}
