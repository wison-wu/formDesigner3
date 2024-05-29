<template>
  <div v-show="props.compType === 'checkbox'">
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
    <el-form-item label="提示符">
      <el-input class="input" v-model="props.placeholder" placeholder="请输入提示符" />
    </el-form-item>
    <el-form-item label="栅格间隔">
      <el-input-number v-model="props.gutter" :min="0"></el-input-number>
    </el-form-item>
    <el-form-item label="标签宽度">
      <el-input-number v-model="props.labelWidth" :min="1" :max="200"></el-input-number>
    </el-form-item>
    <el-form-item label="显示标签">
      <el-switch v-model="props.showLabel" @change="handlerChangeLabel"></el-switch>
    </el-form-item>
    <el-form-item label="必填">
      <el-switch v-model="props.required"></el-switch>
    </el-form-item>
    <el-form-item label="垂直">
      <el-switch v-model="props.vertical"></el-switch>
    </el-form-item>
    <el-form-item label="最小数量">
      <el-input-number v-model="props.min" :min="1"></el-input-number>
    </el-form-item>
    <el-form-item label="最大数量">
      <el-input-number v-model="props.max" :min="1"></el-input-number>
    </el-form-item>
    <el-form-item label="选项样式">
      <el-radio-group v-model="props.optionType">
        <el-radio-button value="default">默认</el-radio-button>
        <el-radio-button value="button">按钮</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="显示边框">
      <el-switch v-model="props.border"></el-switch>
    </el-form-item>
    <el-form-item label="选项尺寸" v-show="props.border || props.optionType === 'button'">
      <el-radio-group v-model="props.size">
        <el-radio-button value="large">大</el-radio-button>
        <el-radio-button value="default">中</el-radio-button>
        <el-radio-button value="small">小</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="禁用">
      <el-switch v-model="props.disabled" @change="handlerChangeDisStatus('disabled')"></el-switch>
    </el-form-item>
    <el-form-item label="默认值">
      <el-input
        class="input"
        v-model="defaultValue"
        placeholder="请输入默认值"
        @input="onDefaultValueInput"
      />
    </el-form-item>
    <el-form-item label="数据类型">
      <el-radio-group v-model="props.dataType" @change="handlerChangeDataType">
        <el-radio-button value="static">静态数据</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <div v-show="props.dataType === 'static'">
      <el-divider>选项</el-divider>
      <draggable :list="props.options" handle=".option-drag" item-key="id">
        <template #item="{ element }">
          <div class="select-item option-drag">
            <el-icon>
              <DCaret />
            </el-icon>
            <el-input v-model="element.label" placeholder="选项名" size="small" />
            <el-input v-model="element.value" placeholder="选项值" size="small" />
            <el-icon class="remove-icon">
              <Remove />
            </el-icon>
          </div>
        </template>
      </draggable>
      <div style="margin-left: 20px">
        <el-button
          style="padding-bottom: 0"
          icon="el-icon-circle-plus-outline"
          type="primary"
          link
          @click="addSelectItem"
        >
          添加选项
        </el-button>
      </div>
    </div>
    <div v-show="props.dataType === 'dynamic'">
      <el-form-item label="地址">
        <el-input v-model="props.action"></el-input>
      </el-form-item>
    </div>
  </div>
</template>
<script lang="ts">
/**
 * 多选按钮
 * @author chen yu
 * @version 1.0.0
 */
import { Component, Prop } from 'web-decorator-vue';
import type { CheckboxOption } from '@/components/model/CheckboxOption';
import { isNumberStr } from '../../utils/index';

@Component({
  name: 'checkbox-config'
})
export default class CheckboxConfig {
  /**
   * CheckboxConfig
   * @version 1.0.0
   */
  @Prop() props!: CheckboxOption;
  /**
   *
   */
  @Prop() getFormId: any;
  /**
   * 默认值
   * @version 1.0.0
   */
  defaultValue: string = '';
  // TODO 补全说明
  /**
   *
   * @param val
   */
  handlerChangeLabel(val: any) {
    this.props.labelWidth = val ? 80 : 1;
  }

  // TODO 补全说明
  /**
   *
   * @param val
   */
  handlerChangeDisStatus(val: any) {
    this.props.readOnly = !val;
  }
  // TODO 补全说明
  /**
   *
   * @param str
   */
  onDefaultValueInput(str: any) {
    if (Array.isArray(this.props.modelValue)) {
      this.props.modelValue = str.split(',').map((val: any) => (isNumberStr(val) ? +val : val));
    }
  }
  // TODO 补全说明
  /**
   *
   */
  addSelectItem() {
    this.props.options.push({
      label: '',
      value: ''
    });
  }
  // TODO 补全说明
  /**
   *
   * @param value
   */
  handlerChangeDataType(value: any) {
    if (value === 'static') {
      this.props.options = [];
      // TODO 错误待处理
      // @ts-ignore
      this.props.options = this.tempOptions;
    } else {
      // TODO 错误待处理
      // @ts-ignore
      this.tempOptions = this.props.options;
      this.props.options = [];
    }
  }
  // TODO 补全说明
  /**
   * @param val
   */
  handlerChangeId(val: any) {
    let idArray = this.getFormId(this.props._id);
    console.log(idArray);
    if (idArray.includes(val)) {
      // @ts-ignore 如果存在id相等，则提示
      this.$message.error('该ID已经存在,请修改');
      this.props.id = this.props._id;
    } else {
      this.props._id = val;
    }
  }
}
</script>
<style scoped>
.input {
  width: 75%;
}

.remove-icon {
  color: #f56c6c;
}
</style>
