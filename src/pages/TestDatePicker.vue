<template>
    <div>
        <el-date-picker v-model="model.date" @change="handleChange"></el-date-picker>
    </div>
</template>
<script lang="ts" setup>
  import { h, reactive} from 'vue'
    const model = reactive({
        date:''
    })

  
  const handleChange = (value) => {
    console.log(value,666)
  }
  
  </script>
  
  <style scoped>

  </style>