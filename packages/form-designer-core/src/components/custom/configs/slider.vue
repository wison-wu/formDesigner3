<template>
  <div v-show="props.compType === 'slider'">
    <el-form-item label="ID">
      <el-tooltip
          class="item"
          effect="dark"
          content="请注意,ID的修改可能会导致该组件相关事件失效！"
          placement="left"
      >
        <el-input class="input" v-model="props.id" @change="handlerChangeId"></el-input>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="标题">
      <el-input class="input" v-model="props.label"></el-input>
    </el-form-item>
    <el-form-item label="栅格间隔">
      <el-input-number v-model="props.gutter" :min="0"></el-input-number>
    </el-form-item>
    <el-form-item label="标签宽度">
      <el-input-number v-model="props.labelWidth" :min="1" :max="200"></el-input-number>
    </el-form-item>
    <el-form-item label="显示标签">
      <el-switch v-model="props.showLabel"></el-switch>
    </el-form-item>
    <el-form-item label="必填">
      <el-switch v-model="props.required"></el-switch>
    </el-form-item>

    <el-form-item label="最小值">
      <el-input-number v-model="props.min" :min="0"></el-input-number>
    </el-form-item>
    <el-form-item label="最大值">
      <el-input-number v-model="props.max" placeholder="字符长度"/>
    </el-form-item>
    <el-form-item label="步长">
      <el-input-number v-model="props.step"></el-input-number>
    </el-form-item>
    <el-form-item label="显示断点">
      <el-switch v-model="props['show-stops']"></el-switch>
    </el-form-item>
    <el-form-item label="显示提示消息">
      <el-switch v-model="props['show-tooltip']"></el-switch>
    </el-form-item>
    <el-form-item label="禁用">
      <el-switch v-model="props.disabled"></el-switch>
    </el-form-item>
    <el-form-item label="默认值">
      <el-input class="input" v-model="props.modelValue"></el-input>
    </el-form-item>
  </div>
</template>
<script lang="ts">
import { changeId, type FormDesignerMixin } from '../mixin/FormDesignerMixin';
import { Component, Prop } from 'web-decorator-vue';

@Component({
  name: 'slider-config',
  mixins: [changeId],
})
export default class InputNumber implements FormDesignerMixin {
  // TODO 补齐作用
  @Prop() props: any;
  // TODO 补齐作用
  @Prop() getFormId: any;
  // TODO 补齐注释
  handlerChangeId?: Function;
}
</script>
<style scoped>
.input {
  width: 75%;
}
</style>
