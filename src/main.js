import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/iconfont/iconfont.js'
// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./components/style/designer.css";

// 引入所有图标
import * as Icons from '@element-plus/icons-vue';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
// 循环注册所有图标
for(const name in Icons){
  app.component(name,Icons[name]);
}

app.mount('#app')
