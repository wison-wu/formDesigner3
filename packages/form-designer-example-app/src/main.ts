// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "form-designer-core/dist/style.css";
import plugins from "form-designer-core";
const app = createApp(App)

app.use(createPinia())
app.use(router)
//挂载相关的插件
app.use(plugins);

app.mount('#app')
