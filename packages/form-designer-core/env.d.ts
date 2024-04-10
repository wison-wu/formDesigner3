/// <reference types="vite/client" />
declare module "*.mjs"
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
declare module 'vue3-barcode' {
  const Vue3Barcode: any;
  export default Vue3Barcode;
}
