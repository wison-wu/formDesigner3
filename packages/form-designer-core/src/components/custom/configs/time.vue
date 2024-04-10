<template>
  <div v-show="props.compType === 'time'">
    <!-- <el-form-item label="字段名">
      <el-input class="input" v-model="props"></el-input>
    </el-form-item> -->
    <el-form-item label="ID">
      <el-tooltip class="item" effect="dark" content="请注意,ID的修改可能会导致该组件相关事件失效！" placement="left">
        <el-input class="input" v-model="props.id" @change="handlerChangeId"></el-input>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="标题">
      <el-input class="input" v-model="props.label"></el-input>
    </el-form-item>
    <!-- <el-form-item label="表单栅格">
      <el-slider class="input" v-model="props.span" :max="24" :min="1" :marks="{12:''}"></el-slider>
    </el-form-item> -->
    <el-form-item label="栅格间隔">
      <el-input-number v-model="props.gutter"  :min="0"></el-input-number>
    </el-form-item>
    <el-form-item label="标签宽度">
      <el-input-number v-model="props.labelWidth"  :min="1" :max="200"></el-input-number>
    </el-form-item>
    <el-form-item label="显示标签">
      <el-switch v-model="props.showLabel"></el-switch>
    </el-form-item>
    <el-form-item label="显示标签">
      <el-input class="input" v-model="props.placeholder"></el-input>
    </el-form-item>
    <el-form-item label="必填">
      <el-switch v-model="props.required"></el-switch>
    </el-form-item>
    <el-form-item label="清空">
      <el-switch v-model="props.clearable"></el-switch>
    </el-form-item>
    <el-form-item label="只读">
      <el-switch v-model="props.readonly"></el-switch>
    </el-form-item>
    <el-form-item label="禁用">
      <el-switch v-model="props.disabled"></el-switch>
    </el-form-item>
    <el-form-item label="默认值">
      <el-time-picker class="input" v-model="props.modelValue" placeholder="选择默认时间" />
    </el-form-item>
  </div>
</template>
<script>
import dayjs from 'dayjs';
import {changeId} from '../mixin'
export default {
  name:"timeConfig",
  mixins:[changeId],
  props:['props','getFormId'],
  data(){
    return {
      time:''
    }
  },
  methods:{
    handlerChangeTime(val){
      //时间需要格式化之后再赋给modelValue，否则render会报错
      if(val!==null){
        const d = dayjs(val).format('HH:mm:ss');
        this.props.modelValue = d;
      }
    },
    handlerChangeRange(val){
      if(val){
        this.props.modelValue=[];
      }else{
        this.props.modelValue='';
      }
    }
  }
}
</script>
<style scoped>
.input{
  width:75%
}
</style>