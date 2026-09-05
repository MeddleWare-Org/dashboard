<script setup lang="ts">
import ToolFrame from '../components/ToolFrame.vue'

defineProps<{ src: string; title: string }>()
</script>

<template>
  <ToolFrame :src="src" :title="title" />
</template>
