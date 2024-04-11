# form-designer-v3
## 安装
```sh
// 安装 form-designer-v3
npm i form-designer-v3
// 安装 element-plus
npm i element-plus
```
## 注册form-designer-v3组件
````ts
// main.ts
// 导入 form-designer css
import "form-designer-v3/dist/style.css";
// 导入 form-designer
import plugins from "form-designer-v3";
// 导入element-plus
import ElementPlus from 'element-plus';
// 导入element-plus中文
import ZH_CN from 'element-plus/dist/locale/zh-cn.mjs';
//挂载form-designer的组件
app.use(plugins);
// 挂载element-plus
app.use(ElementPlus, {
    locale: ZH_CN
})
````
## 使用组件
````vue
// app.vue
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
````