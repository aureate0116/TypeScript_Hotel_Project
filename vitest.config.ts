// import { fileURLToPath } from 'node:url'
// // import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
// import { defineConfig } from "vite";

// import viteConfig from './vite.config'

// export default defineConfig(
//   viteConfig,
//   // defineConfig({
//   //   test: {
//   //     environment: 'jsdom',
//   //     exclude: [...configDefaults.exclude, 'e2e/*'],
//   //     root: fileURLToPath(new URL('./', import.meta.url))
//   //   }
//   // })
// )
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production'
  ? '/TypeScript_Hotel_Project/' : '/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "@/assets/scss/bootstrap";` },
    },
  }
})