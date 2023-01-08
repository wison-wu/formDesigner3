<template>
    <div>
        <demoRender></demoRender>
    </div>
</template>
<script lang="ts" setup>
  import {reactive} from 'vue'
  import demoRender from './demoRender.vue';
    const model = reactive({
        date:''
    })

  
  const handleChange = (value) => {
    console.log(value,666)
  }
  
  </script>
  
  <style scoped>

  </style>