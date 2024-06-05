import type { ButtonSize, ButtonType } from '@/components/model/FDType';
import type { ConfigOption } from '@/components/model/ConfigOption';

export interface ButtonOption extends ConfigOption {
  /**
   * 按钮文字
   */
  text: string;
  /**
   * 按钮类型
   * @version 1.0.0
   */
  type: ButtonType;
  /**
   * 按钮大小
   * @version 1.0.0
   */
  size: ButtonSize;
  // TODO 补充类型
  /**
   * 简单样式
   * @version 1.0.0
   */
  plain: object;
  // TODO 补充类型
  /**
   * 圆角
   * @version 1.0.0
   */
  round: object;
  // TODO 补充类型
  /**
   * 圆形
   * @version 1.0.0
   */
  circle: object;
}
