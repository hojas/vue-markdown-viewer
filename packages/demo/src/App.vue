<script setup lang="ts">
import 'github-markdown-css'
import 'highlight.js/styles/night-owl.css'
import 'katex/dist/katex.css'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import remarkMath from 'remark-math'
import rehypeSlug from 'rehype-slug'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'

import { VueMdRender } from 'vue-md-render'
import MermaidRender from './components/MermaidRender.vue'
import NormalCode from './components/NormalCode.vue'
import content from './demo.md?raw'

function code(properties: any) {
  if (properties.className?.includes('language-mermaid'))
    return MermaidRender

  return NormalCode
}
</script>

<template>
  <VueMdRender
    class="markdown-body"
    :content="content"
    :components="{ code }"
    :remark-plugins="[remarkGfm, remarkToc, remarkMath]"
    :rehype-plugins="[
      rehypeSlug,
      rehypeRaw,
      [
        rehypeHighlight,
        {
          plainText: ['mermaid'],
        },
      ],
      [
        rehypeKatex,
        {
          macros: {
            '\\f': '#1f(#2)',
          },
        },
      ],
    ]"
  />
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
  background: #000;
  scroll-behavior: smooth;
}
</style>

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
