<template>
  <div v-show="props.compType === 'button'">
    <el-form-item label="ID">
      <el-tooltip
          class="item"
          effect="dark"
          content="请注意,ID的修改可能会导致该组件相关事件失效！"
          placement="left"
      >
        <el-input class="input" v-model="props.id"></el-input>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="按钮文字">
      <el-input class="input" v-model="props.text"></el-input>
    </el-form-item>
    <el-form-item label="显示标签">
      <el-switch v-model="props.showLabel" @change="handlerShowLabel"></el-switch>
    </el-form-item>
    <el-form-item label="标签文字" v-show="props.showLabel">
      <el-input class="input" v-model="props.label"></el-input>
    </el-form-item>
    <el-form-item label="标签长度" v-show="props.showLabel">
      <el-input-number v-model="props.labelWidth" :min="1" :max="200"></el-input-number>
    </el-form-item>
    <el-form-item label="占用列数" v-show="props.span">
      <el-input-number v-model="props.span" :min="1" :max="24"></el-input-number>
    </el-form-item>

    <el-form-item label="按钮类型">
      <el-select v-model="props.type" placeholder="请选择">
        <el-option label="primary" value="primary"></el-option>
        <el-option label="success" value="success"></el-option>
        <el-option label="warning" value="warning"></el-option>
        <el-option label="danger" value="danger"></el-option>
        <el-option label="info" value="info"></el-option>
        <el-option label="text" value="text"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="按钮大小">
      <el-radio-group v-model="props.size">
        <el-radio-button value="large">大</el-radio-button>
        <el-radio-button value="default">中</el-radio-button>
        <el-radio-button value="small">小</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="禁用">
      <el-switch v-model="props.disabled"></el-switch>
    </el-form-item>
    <el-form-item label="简单样式">
      <el-switch v-model="props.plain"></el-switch>
    </el-form-item>
    <el-form-item label="圆角">
      <el-switch v-model="props.round"></el-switch>
    </el-form-item>
    <el-form-item label="圆形">
      <el-switch v-model="props.circle"></el-switch>
    </el-form-item>
  </div>
</template>
<script lang="ts">
import {Component, Prop} from "web-decorator-vue";

/**
 * 条码
 * @author chen yu
 * @version 1.0.0
 */
@Component({
  name: "button-config"
})
export default class FDButton {
  /**
   * 参数
   */
  @Prop() props!: ButtonOption;

  /**
   * 设置按钮宽度
   * @param val
   */
  handlerShowLabel(val: number) {
    this.props.labelWidth = val ? 80 : 0;
  }
}

export interface ButtonOption {
  /**
   * id
   * @version 1.0.0
   */
  id: string;
  /**
   * 是否显示文本
   * @version 1.0.0
   */
  showLabel: boolean;
  /**
   * 类型
   * @version 1.0.0
   */
  compType: string;
  /**
   * 宽度
   */
  labelWidth: number;
  /**
   * 按钮文字
   */
  text: string;
  /**
   * 文本
   * @version 1.0.0
   */
  label: string;
  /**
   * 是否显示span
   * @version 1.0.0
   */
  span: number;
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
  /**
   * 是否禁用
   * @version 1.0.0
   */
  disabled: boolean;
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

/**
 * 按钮类型
 * @author chen yu
 * @version 1.0.0
 */
export type ButtonType = "primary" | "success" | "warning" | "danger" | "info" | "text";
/**
 * 按钮大小的类型
 * @author chen yu
 * @version 1.0.0
 */
export type ButtonSize = "large" | "default" | "small";
</script>
