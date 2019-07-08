/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * 编辑器组件属性
 */
export default interface EditorProps<T = any, V = string> {
  /**
   * 编辑器名称
   */
  name: string;
  /**
   * 编辑器所在数据行的数据
   */
  item: T;
  /**
   * 当前编辑器的值
   */
  value: V;
  /**
   * 值变更事件
   *
   * 参数`event`: 可以是变更事件，也可以是值。
   */
  onChange?: (event: any) => void;

  /**
   * 是否校验错误
   */
  error: boolean;
}
