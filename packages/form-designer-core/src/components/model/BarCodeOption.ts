import type { ConfigOption } from '@/components/model/ConfigOption';

/**
 * BarCode 的 Prop的参数
 * @version 1.0.0
 * @author chen yu
 */
export interface BarCodeOption extends ConfigOption {
  /**
   * 条码值
   * @version 1.0.0
   */
  modelValue: string;
  /**
   * 边线颜色
   * @version 1.0.0
   */
  lineColor: string;
  /**
   * 背景色
   * @version 1.0.0
   */
  background: string;
  /**
   * 条码高度
   */
  height: number;
}
