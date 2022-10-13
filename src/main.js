import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import plugins from './components';

import './assets/iconfont/iconfont.js'
// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./components/style/designer.css";
import 'default-passive-events'
import { GlobalCmComponent } from "codemirror-editor-vue3";


const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(plugins);
app.use(GlobalCmComponent);

app.mount('#app')
