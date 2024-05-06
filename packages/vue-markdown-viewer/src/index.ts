import type { App } from 'vue'
import VueMarkdownRender from './vue-markdown-viewer.vue'

export { VueMarkdownRender }

export default {
  install: (app: App) => {
    app.component('VueMarkdownRender', VueMarkdownRender)
  },
}
