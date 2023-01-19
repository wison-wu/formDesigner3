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
import {ref,reactive,watch,onMounted,getCurrentInstance} from 'vue';

import {getRemoteData} from './composition';
//const emit = defineEmits(['timeChange']);
const props = defineProps(['conf','modelValue']);
const { appContext } = getCurrentInstance();
watch(()=>props.conf.dataType,(newVal,oldVal)=>{
    getRemoteData(appContext,props.conf);
})
</script>
<template>
    <!--输入框-->
    <el-input v-if="props.conf.compType==='input'" 
        v-model="props.conf.modelValue"
        :readonly ="props.conf.readonly" 
        :clear ="props.conf.clear" 
        :placeholder="props.conf.placeholder"
        :suffix-icon="props.conf['suffix-icon']"
        :prefix-icon="props.conf['prefix-icon']"
    >
        <template #prepend v-if="props.conf.prepend!==''">{{ props.conf.prepend }}</template>
        <template #append v-if="props.conf.append!==''">{{ props.conf.append }}</template>
    </el-input>
    <!--下拉-->
    <el-select v-if="props.conf.compType==='select'"
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
            v-for="item in props.conf.options" >
        </el-option> 
    </el-select>
    <!--单选-->
    <el-radio-group v-if="props.conf.compType==='radio'"
        v-model="props.conf.modelValue"
    >
        <el-radio 
            :label="item.value" 
            :key="item" 
            v-for="item in props.conf.options" 
            :border="props.conf.border"
            v-if="props.conf.optionType==='default'"
        >
            {{ item.label }}
        </el-radio>
        <el-radio-button 
        :label="item.value"
        :key="item" 
        v-for="item in props.conf.options" 
        v-if="props.conf.optionType==='button'"
        >
            {{ item.label }}
        </el-radio-button>
    </el-radio-group>
    <!--多选-->
    <el-checkbox-group v-if="props.conf.compType==='checkbox'"
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
            v-if="props.conf.optionType==='default'"
        >
            {{ item.label }}
        </el-checkbox>
        <el-checkbox-button 
            :label="item.value" 
            :key="item" 
            v-for="item in props.conf.options"
            v-if="props.conf.optionType==='button'"
        >
            {{ item.label }}
        </el-checkbox-button>
    </el-checkbox-group>
    <!--开关-->
    <el-switch v-if="props.conf.compType==='Switch'"
        v-model="props.conf.modelValue"
        :disabled="props.conf.disabled"
        :active-color="props.conf['active-color']"
        :inactive-color="props.conf['inactive-color']"
        :active-value="props.conf['active-value']"
        :inactive-value="props.conf['inactive-value']"
    >
    </el-switch>
    <!--计数器-->
    <el-input-number v-if="props.conf.compType==='inputNumber'" 
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
    <el-input v-if="props.conf.compType==='textarea'" 
        v-model="props.conf.modelValue"
        :readonly ="props.conf.readonly" 
        :clear ="props.conf.clear" 
        :type="props.conf.type"
        :maxlength="props.conf.maxlength"
        :show-word-limit="props.conf['show-word-limit']"
        :disabled="props.conf.disabled"
        :rows="props.conf.rows"
    >
    </el-input>
    <!--滑块-->
    <el-slider v-if="props.conf.compType==='slider'"
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
    <el-rate v-if="props.conf.compType==='rate'"
        v-model="props.conf.modelValue"
        :disabled="props.conf.disabled"
        :max="props.conf.max"
        :allow-half="props.conf['allow-half']"
        :show-score="props.conf['show-score']"
    ></el-rate>
    <!--日期-->
    <el-date-picker v-if="props.conf.compType==='date'"></el-date-picker>
    <!--时间-->
    <el-time-picker v-if="props.conf.compType==='time'"
        v-model="props.conf.modelValue"
        :disabled="props.conf.disabled"
        :readonly="props.conf.readonly"
        :clearable="props.conf.clearable"
    >
    </el-time-picker>
    <!--颜色选择器-->
    <el-color-picker v-if="props.conf.compType==='colorPicker'"></el-color-picker>
    <!--级联选择器-->
    <el-cascader v-if="props.conf.compType==='cascader'"></el-cascader>
    <!--附件-->
    <el-upload v-if="props.conf.compType==='upload'"></el-upload>
    <!--按钮-->
    <el-button v-if="props.conf.compType==='divider'"></el-button>
    <!--分割线-->
    <el-divider v-if="props.conf.compType==='divider'"></el-divider>
    <!--提示-->
    <el-alert v-if="props.conf.compType==='alert'"></el-alert>
    <!--文字链接-->
    <el-link v-if="props.conf.compType==='link'"></el-link>
    <!--文本-->
    <fancy-text v-if="props.conf.compType==='text'"></fancy-text>
    <!--编辑器-->
    <fancy-editor v-if="props.conf.compType==='editor'"></fancy-editor>
    <!--选择列表-->
    <fancy-dialog-list v-if="props.conf.compType==='dialogList'"></fancy-dialog-list>
    <!--条码-->
    <fancy-bar-code v-if="props.conf.compType==='barCode'"></fancy-bar-code>

</template>