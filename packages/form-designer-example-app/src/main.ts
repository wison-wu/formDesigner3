// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "form-designer-core/dist/style.css";
import plugins from "form-designer-core";
// 导入element-plus
import ElementPlus from 'element-plus';
import ZH_CN from 'element-plus/dist/locale/zh-cn.mjs';
const app = createApp(App)

app.use(createPinia())
app.use(router)
//挂载相关的插件
app.use(plugins);

// 挂载饿了么plus
app.use(ElementPlus, {
  locale: ZH_CN
})

app.mount('#app')
