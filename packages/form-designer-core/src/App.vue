<template>
  <RouterView />
  <div>
    <form-designer v-model="form.data" ></form-designer>
  </div>
</template>
<script setup lang="ts">
import FormDesigner from "@/components/formDesigner.vue";
import {reactive} from 'vue';
const form = reactive({
  config:{},
  data:{}
})
</script>
<style scoped>

</style>
