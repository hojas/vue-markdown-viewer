<script lang="ts" setup>
import 'mermaid'
</script>

<template>
  <div>
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
