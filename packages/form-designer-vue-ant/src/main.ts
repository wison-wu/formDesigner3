import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import {
  renderWithQiankun,
  qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'
import type { QiankunProps } from "vite-plugin-qiankun/es/helper";
import { createPinia } from "pinia";

let instance: any = null;
instance = createApp(App)

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}

function render(props: QiankunProps = {}) {
  const {container} = props as any;
  instance = createApp(App)
  instance.use(createPinia())
  instance.mount(
    container ? container.querySelector('#app') : document.getElementById('app')
  )
  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log('我正在作为子应用运行')
  }
}

// some code
renderWithQiankun({
  bootstrap: function (): void | Promise<void> {
  },
  mount: function (props: QiankunProps): void | Promise<void> {
    render(props)
  },
  unmount: function (props: QiankunProps): void | Promise<void> {
    instance.unmount()
    instance._container = null
    instance = null;
  },
  update: function (props: QiankunProps): void {
  }
})
