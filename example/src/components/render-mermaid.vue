<script lang="ts" setup>
import mermaid from 'mermaid'

mermaid.initialize({ startOnLoad: true })
</script>

<template>
  <div>
    <div>mermaid</div>
    <div class="mermaid">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.mermaid {
  margin: -16px;
  padding: 20px;
  background: #fff;
}
</style>
