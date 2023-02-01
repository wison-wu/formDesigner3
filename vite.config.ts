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
  build:{
    minify:true,  //打包结果取消minify，方便我们看打包后结果对比
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',  // 引入文件名的名称
        entryFileNames: 'js/[name]-[hash].js',  // 包的入口文件名称
        assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
        manualChunks(id: any): string {  
          if (id.includes("node_modules")) {
              return id
                      .toString()
                      .split("node_modules/")[1]
                      .split("/")[0]
                      .toString();
          }
      }
      }
    }
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
