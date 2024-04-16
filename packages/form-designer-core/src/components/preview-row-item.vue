<template>
  <el-col>
    <el-row :gutter="model.gutter">
      <slot></slot>
    </el-row>
  </el-col>
</template>
<script lang="ts">
import { Component, Prop } from 'web-decorator-vue'

@Component({
  name: 'preview-row-item'
})
export default class PreviewRowItem {
  // TODO 补齐注释
  @Prop() model: any
  // TODO 补齐注释
  @Prop() value: any
}
</script>
