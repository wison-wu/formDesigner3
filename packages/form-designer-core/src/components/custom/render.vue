<script setup>
/**
    const time = ref();
    watch(()=>props.conf.modelValue,(newVal,oldVal)=>{
        console.log('modelValue   ',newVal);
    })
    const handlerChangeTime = (val)=>{
        emit('timeChange',val);
    }
 */
//import * as dayjs from 'dayjs';
import { Plus } from '@element-plus/icons-vue'
import { watch, getCurrentInstance, ref } from 'vue'
import { ElMessage as message } from 'element-plus'

import { getRemoteData } from './composition'
//const emit = defineEmits(['timeChange']);
const props = defineProps(['conf', 'modelValue'])
const { appContext } = getCurrentInstance()
watch(
  () => props.conf.dataType,
  (newVal, oldVal) => {
    getRemoteData(appContext, props.conf)
  }
)
//upload组件
const fileList = ref([])
const beforeUpload = (file) => {
  //非限定后缀不允许上传
  const fileName = file.name
  const suffixName = fileName.split('.').pop()

  if (!props.conf.accept.includes(suffixName)) {
    message.error('该后缀文件不允许上传')
    return false
  }
  const fileSize = file.size
  if (fileSize > props.conf.fileSize * 1024 * 1024) {
    message.error('文件大小超出限制，请检查！')
    return false
  }
  return true
}
</script>
<template>
  <!--输入框-->
  <el-input
    v-if="props.conf.compType === 'input'"
    v-model="props.conf.modelValue"
    :readonly="props.conf.readonly"
    :clear="props.conf.clear"
    :disabled="props.conf.disabled"
    :placeholder="props.conf.placeholder"
    :suffix-icon="props.conf['suffix-icon']"
    :prefix-icon="props.conf['prefix-icon']"
  >
    <template #prepend v-if="props.conf.prepend !== ''">{{ props.conf.prepend }}</template>
    <template #append v-if="props.conf.append !== ''">{{ props.conf.append }}</template>
  </el-input>
  <!--下拉-->
  <el-select
    v-if="props.conf.compType === 'select'"
    v-model="props.conf.modelValue"
    :placeholder="props.conf.placeholder"
    :multiple="props.conf.multiple"
    :collapse-tags="props.conf['collapse-tags']"
    :disabled="props.conf.disabled"
    :filterable="props.conf.filterable"
    :clearable="props.conf.clearable"
  >
    <el-option
      :label="item.label"
      :value="item.value"
      :key="item"
      v-for="item in props.conf.options"
    >
    </el-option>
  </el-select>
  <!--单选-->
  <el-radio-group v-if="props.conf.compType === 'radio'" v-model="props.conf.modelValue">
    <el-radio
      :label="item.value"
      :key="item"
      v-for="item in props.conf.options"
      :border="props.conf.border"
      v-if="props.conf.optionType === 'default'"
    >
      {{ item.label }}
    </el-radio>
    <el-radio-button
      :label="item.value"
      :key="item"
      v-for="item in props.conf.options"
      v-if="props.conf.optionType === 'button'"
    >
      {{ item.label }}
    </el-radio-button>
  </el-radio-group>
  <!--多选-->
  <el-checkbox-group
    v-if="props.conf.compType === 'checkbox'"
    v-model="props.conf.modelValue"
    :clearable="props.conf.clearable"
    :disabled="props.conf.disabled"
    :size="props.conf.size"
    :max="props.conf.max"
    :min="props.conf.min"
  >
    <el-checkbox
      :border="props.conf.border"
      :label="item.value"
      :key="item"
      v-for="item in props.conf.options"
      v-if="props.conf.optionType === 'default'"
    >
      {{ item.label }}
    </el-checkbox>
    <el-checkbox-button
      :label="item.value"
      :key="item"
      v-for="item in props.conf.options"
      v-if="props.conf.optionType === 'button'"
    >
      {{ item.label }}
    </el-checkbox-button>
  </el-checkbox-group>
  <!--开关-->
  <el-switch
    v-if="props.conf.compType === 'Switch'"
    v-model="props.conf.modelValue"
    :disabled="props.conf.disabled"
    :active-color="props.conf['active-color']"
    :inactive-color="props.conf['inactive-color']"
    :active-value="props.conf['active-value']"
    :inactive-value="props.conf['inactive-value']"
  >
  </el-switch>
  <!--计数器-->
  <el-input-number
    v-if="props.conf.compType === 'inputNumber'"
    v-model="props.conf.modelValue"
    :placeholder="props.conf.placeholder"
    :min="props.conf.min"
    :max="props.conf.max"
    :step="props.conf.step"
    :precision="props.conf.precision"
    :step-strictly="props.conf['step-strictly']"
    :controls-position="props.conf['controls-position']"
    :disabled="props.conf.disabled"
    :readonly="props.conf.readonly"
  >
  </el-input-number>
  <!--多行文本-->
  <el-input
    v-if="props.conf.compType === 'textarea'"
    v-model="props.conf.modelValue"
    :readonly="props.conf.readonly"
    :clear="props.conf.clear"
    :type="props.conf.type"
    :maxlength="props.conf.maxlength"
    :show-word-limit="props.conf['show-word-limit']"
    :disabled="props.conf.disabled"
    :rows="props.conf.rows"
  >
  </el-input>
  <!--滑块-->
  <el-slider
    v-if="props.conf.compType === 'slider'"
    v-model="props.conf.modelValue"
    :min="props.conf.min"
    :max="props.conf.max"
    :step="props.conf.step"
    :show-stops="props.conf['show-stops']"
    :show-tooltip="props.conf['show-tooltip']"
    :range="props.conf.range"
    :disabled="props.conf.disabled"
  ></el-slider>
  <!--评分-->
  <el-rate
    v-if="props.conf.compType === 'rate'"
    v-model="props.conf.modelValue"
    :disabled="props.conf.disabled"
    :max="props.conf.max"
    :allow-half="props.conf['allow-half']"
    :show-score="props.conf['show-score']"
  ></el-rate>
  <!--日期-->
  <el-date-picker
    v-if="props.conf.compType === 'date'"
    v-model="props.conf.modelValue"
    :placeholder="props.conf.placeholder"
    :disabled="props.conf.disabled"
    :clearable="props.conf.clearable"
    :readonly="props.conf.readonly"
    :type="props.conf.type"
    :format="props.conf.format"
    :range-separator="props.conf['range-separator']"
    :start-placeholder="props.conf['start-placeholder']"
    :end-placeholder="props.conf['end-placeholder']"
  ></el-date-picker>
  <!--时间-->
  <el-time-picker
    v-if="props.conf.compType === 'time'"
    v-model="props.conf.modelValue"
    :placeholder="props.conf.placeholder"
    :disabled="props.conf.disabled"
    :readonly="props.conf.readonly"
    :clearable="props.conf.clearable"
  >
  </el-time-picker>
  <!--颜色选择器-->
  <el-color-picker
    v-if="props.conf.compType === 'colorPicker'"
    v-model="props.conf.modelValue"
    :disabled="props.conf.disabled"
    :predefine="props.conf.predefine"
    :size="props.conf.size"
  ></el-color-picker>
  <!--级联选择器-->
  <el-cascader
    v-if="props.conf.compType === 'cascader'"
    v-model="props.conf.modelValue"
    :disabled="props.conf.disabled"
    :clearable="props.conf.clearable"
    :size="props.conf.size"
    :show-all-levels="props.conf['show-all-levels']"
    :separator="props.conf.separator"
    :props="props.conf.props"
    :options="props.conf.options"
    :filterable="props.conf.filterable"
  ></el-cascader>
  <!--附件(待定)-->
  <el-upload
    v-if="props.conf.compType === 'upload'"
    v-model:file-list="props.conf.modelValue"
    :action="props.conf.action"
    :multiple="props.conf.multiple"
    :show-file-list="props.conf['show-file-list']"
    :list-type="props.conf['list-type']"
    :before-upload="beforeUpload"
  >
    <el-button type="primary" v-if="props.conf['list-type'] === 'text'">{{
      props.conf.buttonText
    }}</el-button>
    <template #tip v-if="props.conf['list-type'] === 'text' && props.conf.showTip">
      <div class="el-upload__tip">
        {{ props.conf.tips }}
      </div>
    </template>
    <img :src="imageUrl" class="avatar" v-if="props.conf['list-type'] === 'picture-card'" />
    <el-icon v-if="props.conf['list-type'] === 'picture-card'"><Plus /></el-icon>
  </el-upload>
  <!--按钮-->
  <el-button
    v-if="props.conf.compType === 'button'"
    :disabled="props.conf.disabled"
    :size="props.conf.size"
    :type="props.conf.type"
    :plain="props.conf.plain"
    :round="props.conf.round"
    :circle="props.conf.circle"
  >
    {{ props.conf.text }}
  </el-button>
  <!--分割线-->
  <el-divider
    v-if="props.conf.compType === 'divider'"
    :content-position="props.conf['content-position']"
  >
    {{ props.conf.text }}
  </el-divider>
  <!--提示-->
  <el-alert
    v-if="props.conf.compType === 'alert'"
    :title="props.conf.title"
    :type="props.conf.type"
    :effect="props.conf.effect"
    :center="props.conf.center"
    :closable="props.conf.closable"
    :close-text="props.conf['close-text']"
    :show-icon="props.conf['show-icon']"
    :description="props.conf.description"
  ></el-alert>
  <!--文字链接-->
  <el-link
    v-if="props.conf.compType === 'link'"
    :type="props.conf.type"
    :href="props.conf.href"
    :underline="props.conf.underline"
    :disabled="props.conf.disabled"
    :target="props.conf.target"
  >
    {{ props.conf.text }}
  </el-link>
  <!--文本-->
  <fancy-text
    v-if="props.conf.compType === 'text'"
    :align="props.conf.align"
    :size="props.conf.size"
    :bold="props.conf.bold"
    :color="props.conf.color"
  >
    {{ props.conf.text }}
  </fancy-text>
  <!--编辑器-->
  <fancy-editor
    v-if="props.conf.compType === 'editor'"
    v-model="props.conf.modelValue"
    :max="props.conf.max"
    :validateMaxText="props.conf.validateMaxText"
  ></fancy-editor>
  <!--选择列表-->
  <fancy-dialog-list
    v-if="props.conf.compType === 'dialogList'"
    v-model="props.conf.modelValue"
    :disabled="props.conf.disabled"
    :title="props.conf.title"
    :multi="props.conf.multi"
    :showIndex="props.conf.showIndex"
    :action="props.conf.action"
    :height="props.conf.height"
    :colConf="props.conf.colConf"
    :dval="props.conf.dval"
    :dlabel="props.conf.dlabel"
  ></fancy-dialog-list>
  <!--条码-->
  <fancy-bar-code
    v-if="props.conf.compType === 'barCode'"
    :value="props.conf.modelValue"
    :format="props.conf.format"
    :lineColor="props.conf.lineColor"
    :background="props.conf.background"
    :height="props.conf.height"
    :fontSize="props.conf.fontSize"
  ></fancy-bar-code>
</template>
