<script setup lang="ts">
defineProps<{
  name: string,
}>()
</script>

<template>
  <span :class="`mdi mdi-${name}`"></span>
</template>
