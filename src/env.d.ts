/// <reference types="vite/client" />

// Konstanta global yang diinjeksi lewat opsi `define` pada vitest.config.ts / nuxt.config.ts
declare const DELCOM_BASEURL: string;

// ✅ Deklarasi module untuk file .vue agar TypeScript mengenali import
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}