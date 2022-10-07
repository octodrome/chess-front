<script setup lang="ts">
defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <div
    class="flex p-4 transition duration-300 select-none"
    :class="{
      'cursor-pointer': !disabled,
      'hover:bg-gray-600': !disabled,
      'text-gray-400': disabled,
    }"
  >
    <slot />
  </div>
</template>
