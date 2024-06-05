<template>
  <div v-show="props.compType === 'alert'">
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
    <el-form-item label="标题">
      <el-input class="input" v-model="props.title"></el-input>
    </el-form-item>
    <el-form-item label="类型">
      <el-select v-model="props.type" placeholder="请选择">
        <el-option label="success" value="success" />
        <el-option label="warning" value="warning" />
        <el-option label="error" value="error" />
        <el-option label="info" value="info" />
      </el-select>
    </el-form-item>
    <el-form-item label="辅助文字">
      <el-input class="input" v-model="props.description"></el-input>
    </el-form-item>
    <el-form-item label="关闭">
      <el-switch v-model="props.closable"></el-switch>
    </el-form-item>
    <el-form-item label="居中">
      <el-switch v-model="props.center"></el-switch>
    </el-form-item>
    <el-form-item label="关闭文本">
      <el-input class="input" v-model="props['close-text']" />
    </el-form-item>
    <el-form-item label="显示图标">
      <el-switch v-model="props['show-icon']"></el-switch>
    </el-form-item>
    <el-form-item label="主题">
      <el-radio-group v-model="props.effect">
        <el-radio-button value="light">light</el-radio-button>
        <el-radio-button value="dark">dark</el-radio-button>
      </el-radio-group>
    </el-form-item>
  </div>
</template>
<script lang="ts">
import { Component, Prop } from 'web-decorator-vue';

@Component()
export default class Alert {
  // TODO 补齐作用
  /**
   * 参数
   */
  @Prop() props!: any;
  // TODO 不知道有没有用
  /**
   *
   * @param val
   */
  handlerShowLabel(val: any) {
    if (val) {
      this.props.labelWidth = 80;
    } else {
      this.props.labelWidth = 0;
    }
  }
}
</script>
