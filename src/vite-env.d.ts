/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly REACT_APP_BASE_URL: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}