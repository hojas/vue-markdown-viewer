<script setup lang="ts">
import 'github-markdown-css'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import rehypeRaw from 'rehype-raw'

import VueMdRender from '../src/vue-md-render.vue'
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
  <vue-md-render
    class-name="markdown-body"
    :content="content"
    :components="{ code }"
    :rehype-plugins="[rehypeRaw]"
    link-target="_blank"
  />
</template>

<style scoped>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
