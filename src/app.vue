<script setup lang="ts">
import VueMdRender from './components/vue-md-render'
import content from './example.md?raw'
import MyCode from './my-code.vue'
import NormalCode from './normal-code.vue'

const code = (properties: any)  => {
  if (properties.className?.includes('language-video')) {
    return MyCode
  }
  return NormalCode
}
</script>

<template>
  <vue-md-render
    :content="content"
    :components="{
      code,
    }"
    :skip-html="false"
  />
</template>
