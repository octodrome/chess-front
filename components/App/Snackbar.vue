<script setup lang="ts">
const props = defineProps<{
  message: string;
  color: string;
}>();
</script>

<template>
  <div>
    <span class="mr-3">{{ props.message }}</span>

    <button @click="$emit('click')">
      <BaseIcon name="close" />
    </button>
  </div>
</template>
