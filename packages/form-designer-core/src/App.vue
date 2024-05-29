<template>
  <RouterView />
  <div>
    <form-designer v-model="form.data"></form-designer>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
const form = reactive({
  config: {},
  data: {}
});
</script>
<style scoped></style>
