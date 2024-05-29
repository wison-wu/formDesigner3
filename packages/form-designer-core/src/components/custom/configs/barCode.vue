<template>
  <div v-show="props.compType === 'barCode'">
    <!-- <el-form-item label="字段名">
      <el-input class="input" v-model="props"></el-input>
    </el-form-item> -->
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
    <el-form-item label="标签文字" v-show="props.showLabel">
      <el-input class="input" v-model="props.label"></el-input>
    </el-form-item>
    <el-form-item label="标签长度" v-show="props.showLabel">
      <el-input-number v-model="props.labelWidth" :min="1" :max="200"></el-input-number>
    </el-form-item>
    <el-form-item label="占用列数" v-show="props.span">
      <el-input-number v-model="props.span" :min="1" :max="24"></el-input-number>
    </el-form-item>
    <el-form-item label="条码值">
      <el-input v-model="props.modelValue"></el-input>
    </el-form-item>
    <el-form-item label="条码颜色" v-show="props.lineColor">
      <el-color-picker v-model="props.lineColor" @change="handlerChangeBarCode" />
    </el-form-item>
    <el-form-item label="背景颜色" v-show="props.background">
      <el-color-picker v-model="props.background" @change="handlerChangeBackground" />
    </el-form-item>
    <!--暂不启用-->
    <!-- <el-form-item label="条码宽度">
      <el-input-number v-model="props.width"  :min="1" :max="10" :step="1"></el-input-number>
    </el-form-item> -->
    <el-form-item label="条码高度">
      <el-input-number v-model="props.height" :min="10" :max="100" :step="1"></el-input-number>
    </el-form-item>
    <el-form-item label="显示值">
      <el-switch v-model="props.displayValue"></el-switch>
    </el-form-item>
  </div>
</template>
<script lang="ts">
import { Component, Prop } from 'web-decorator-vue';
import type { BarCodeOption } from '@/components/model/BarCodeOption';

/**
 * 条码
 * @author chen yu
 * @version 1.0.0
 */
@Component()
export default class BarCode {
  // TODO 补齐作用
  /**
   * 参数
   */
  @Prop() props!: BarCodeOption;

  // TODO 补齐作用
  /**
   *
   * @param val
   */
  handlerChangeBarCode(val: any) {
    if (val == null) this.props.lineColor = '#000';
  }

  // TODO 补齐作用
  /**
   *
   * @param val
   */
  handlerChangeBackground(val: any) {
    if (val == null) this.props.background = '#fff';
  }
}
</script>
