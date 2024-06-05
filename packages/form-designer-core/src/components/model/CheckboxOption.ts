import type { ConfigOption } from '@/components/model/ConfigOption';

/**
 * 多选框的设置选项
 * @author chen yu
 * @version 1.0.0
 */
export interface CheckboxOption extends ConfigOption {
  // TODO 补充说明
  _id: string;
  // TODO 补充说明
  readOnly: boolean;
  // TODO 补充说明
  modelValue: object;
  // TODO 补充说明
  options: any[];
  /**
   * 提示符
   */
  placeholder: string;
  /**
   * 栅格间隔
   */
  gutter: string;
  /**
   * 必填
   */
  required: boolean;
  // TODO 补充类型
  /**
   * 垂直
   */
  vertical: boolean;
  /**
   * 最小数量
   */
  min: number;
  /**
   * 最大数量
   */
  max: number;
  /**
   * 选项样式
   */
  optionType: 'default' | 'button';
  /**
   * 显示边框
   */
  border: boolean;
  /**
   * 数据类型
   */
  dataType: string;
  /**
   * 地址
   */
  action: string;
}
