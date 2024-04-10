<template>
  <form-designer v-model="form.data" ></form-designer>
</template>
<script setup lang="ts">
import {reactive} from 'vue';
const form = reactive({
  config:{},
  data:{}
})
</script>
<style scoped></style>
