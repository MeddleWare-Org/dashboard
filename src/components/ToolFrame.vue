<script setup lang="ts">
defineProps<{ src: string; title: string }>()
</script>

<template>
  <iframe
    :src="src"
    :title="title"
    class="tool-frame"
    allow="camera; clipboard-read; clipboard-write"
  />
</template>

<style scoped>
.tool-frame {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
