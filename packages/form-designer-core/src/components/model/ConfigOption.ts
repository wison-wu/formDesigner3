/**
 * Base Option
 * @author chen yu
 * @version 1.0.0
 */
export interface ConfigOption {
  /**
   * id
   * @version 1.0.0
   */
  id: string;
  /**
   * 类型
   * @version 1.0.0
   */
  compType: string;
  /**
   * 是否显示文本
   * @version 1.0.0
   */
  showLabel: boolean;
  /**
   * 宽度
   * @version 1.0.0
   */
  labelWidth: number;
  /**
   * 是否显示span
   */
  span: number;
  /**
   * 文本
   * @version 1.0.0
   */
  label: string;
  /**
   * 显示值
   */
  displayValue: number;
  /**
   * 是否禁用
   * @version 1.0.0
   */
  disabled?: boolean;
}
