import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue',"@vueup/vue-quill","vue3-barcode","vuedraggable","codemirror-editor-vue3","china-area-data","element-plus"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'vuedraggable': 'draggable',
          'codemirror-editor-vue3': 'codeMirror',
          '@vueup/vue-quill': 'vueQuill',
          'vue3-barcode': 'fancyBarCode',
          "element-plus":"elementPlus",
        },
      },
    },
    cssCodeSplit: false,
    lib: {
      entry: './src/components/index.ts',
      name: 'form-designer',
    },
  },
})
