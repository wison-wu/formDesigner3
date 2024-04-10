/// <reference types="vite/client" />
declare module "*.mjs"
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}