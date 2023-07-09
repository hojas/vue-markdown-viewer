<script lang="ts" setup>
import { onMounted } from 'vue'
import mermaid from 'mermaid'

onMounted(() => {
  mermaid.initialize({ startOnLoad: true, theme: 'dark' })
})
</script>

<template>
  <div>
    <div class="mermaid">
      <slot />
    </div>
  </div>
</template>
