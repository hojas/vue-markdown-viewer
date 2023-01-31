<script setup lang="ts">
import 'github-markdown-css'
import 'prismjs/themes/prism-tomorrow.css'
import 'katex/dist/katex.css'
import 'prismjs'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import remarkMath from 'remark-math'
import rehypeSlug from 'rehype-slug'
import rehypeRaw from 'rehype-raw'
import rehypeKatex from 'rehype-katex'
import { VueMdRender } from 'vue-md-render'
import RenderMermaid from './components/render-mermaid.vue'
import NormalCode from './components/normal-code.vue'
import content from './example.md?raw'

// Extends code to render mermaid
const code = (properties: any) => {
  if (properties.className?.includes('language-mermaid')) {
    return RenderMermaid
  }
  return NormalCode
}
</script>

<template>
  <vue-md-render
    class="markdown-body"
    :content="content"
    :components="{ code }"
    :remark-plugins="[remarkGfm, remarkToc, remarkMath]"
    :rehype-plugins="[
      rehypeSlug,
      rehypeRaw,
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
html {
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
