import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/vue-markdown-viewer/',
  plugins: [vue()],
})
