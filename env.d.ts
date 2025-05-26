/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_BASEURL: string
}

declare module '*.ts'

declare module '*.js'

declare module "*.vue" {
  import { Component } from "vue";
  const component: Component;
  export default component;
}