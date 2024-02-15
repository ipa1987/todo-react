/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SYNCFUSION_LICENSE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
