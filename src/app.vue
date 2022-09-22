<script setup lang="ts">
import VueMdRender from './components/vue-md-render'
import content from './example.md?raw'
</script>

<template>
  <vue-md-render :content="content" />
</template>
