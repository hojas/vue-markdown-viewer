<script lang="ts" setup>
import { ref, onMounted } from "vue"
import mermaid from 'mermaid'

const pre = ref()

onMounted(() => {
  mermaid.initialize({ startOnLoad: true, theme: 'dark' })
  mermaid.run({
    nodes: [pre.value],
    suppressErrors: true
  })
})
</script>

<template>
  <ClientOnly>
    <pre ref="pre" class="mermaid"><slot /></pre>
  </ClientOnly>
</template>
