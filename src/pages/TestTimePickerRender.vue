<template>
    <div>
        <timePickerRender v-model="model.date1"></timePickerRender>
        <el-time-picker v-model="model.date"></el-time-picker>
    </div>
</template>
<script lang="ts" setup>
  import {reactive} from 'vue'
  import timePickerRender from './timePickerRender.vue';
    const model = reactive({
        date:'12:23:00',
        date1:'12:23:00',
    })
  </script>
  
  <style scoped>

  </style>