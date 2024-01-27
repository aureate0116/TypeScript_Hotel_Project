/// <reference types="vite/client" />

// 讓 TypeScript 能夠理解 VITE_BACKEND_HOST 是一個環境變數，並指定它的類型為字串 (string)
declare namespace NodeJS {
  interface ProcessEnv {
    VITE_BACKEND_HOST: string
  }
}
