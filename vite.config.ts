import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path';
const resolve = (dir: string) => path.join(__dirname, dir)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx()],
  resolve: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      pages: resolve('src/pages'),
      utils: resolve('src/utils'),
      router: resolve('src/router'),
      styles: resolve('src/assets/style')
    },
    extensions: ['.vue', '.ts', '.tsx', '.js', '.jsx']
  },
  server: {
    //服务器主机名
    host: '',
    //端口号
    port: 9999,
    //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,
    //服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
    open: false
  }
})
