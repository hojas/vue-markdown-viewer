<script setup lang="ts">
import VueMarkdownRenderer from './components/vue-md-render'
import content from './example.md?raw'
</script>

<template>
  <vue-md-render :content="content" />
</template>
