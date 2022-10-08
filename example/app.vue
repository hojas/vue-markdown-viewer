<script setup lang="ts">
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

import VueMdRender from '../src/vue-md-render'
import content from './example.md?raw'
import MyVideo from './components/my-video.vue'
import NormalCode from './components/normal-code.vue'

const code = (properties: any) => {
  // extends code
  if (properties.className?.includes('language-video')) {
    return MyVideo
  }
  return NormalCode
}
</script>

<template>
  <vue-md-render :content="content" :components="{ code }" :skip-html="true" />
</template>
