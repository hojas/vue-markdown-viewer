<script lang="ts" setup>
import { ref, onMounted } from "vue"
import mermaid from 'mermaid'

const pre = ref()

onMounted(async () => {
  mermaid.initialize({ startOnLoad: false })
  await mermaid.run({
    nodes: [pre.value],
    suppressErrors: true
  })
})
</script>

<template>
  <div>
    <div ref="pre" class="mermaid"><slot /></div>
  </div>
</template>
