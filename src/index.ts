import VueMdRender from './vue-md-render.vue'
import { App } from 'vue'

export { VueMdRender }

export default {
  install: (app: App) => {
    app.component('VueMdRender', VueMdRender)
  },
}
