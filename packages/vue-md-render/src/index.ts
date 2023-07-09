import type { App } from 'vue'
import VueMdRender from './vue-md-render.vue'

export { VueMdRender }

export default {
  install: (app: App) => {
    app.component('VueMdRender', VueMdRender)
  },
}
