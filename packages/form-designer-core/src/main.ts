import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/assets/style/designer.css'
import '@/assets/iconfont/iconfont.js'

//挂载相关的插件
import plugins from '@/components/formDesigner.vue';
import { GlobalCmComponent } from "codemirror-editor-vue3";
import Axios from 'axios';

const app = createApp(App)

app.use(createPinia())
app.use(router)
//挂载相关的插件
app.use(plugins);
app.use(GlobalCmComponent);
app.config.globalProperties.$axios = Axios;
app.mount('#app')
