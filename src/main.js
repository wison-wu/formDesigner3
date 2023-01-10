import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import plugins from './components';
//import 'default-passive-events'

import './assets/iconfont/iconfont.js'
// 导入element-plus
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import "./components/style/designer.css";
import { GlobalCmComponent } from "codemirror-editor-vue3";
import Axios from 'axios';



const app = createApp(App);
app.use(router);
app.use(ElementPlus, {
    locale: zhCn
})
app.use(plugins);
app.use(GlobalCmComponent);

/* 挂载全局对象 start */
app.config.globalProperties.$axios = Axios;

app.mount('#app')
