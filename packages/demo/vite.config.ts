import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/vue-markdown-viewer/',
  plugins: [vue()],
})
