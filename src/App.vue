<script setup lang="ts">
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import VueMarkdownRenderer from './components/vue-markdown-renderer'
import content from './example.md?raw'
</script>

<template>
  <vue-markdown-renderer :content="content" />
</template>
