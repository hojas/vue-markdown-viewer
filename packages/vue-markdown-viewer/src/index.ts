import type { App } from 'vue'
import VueMdRender from './vue-markdown-viewer.vue'

export { VueMdRender }

export default {
  install: (app: App) => {
    app.component('VueMdRender', VueMdRender)
  },
}
