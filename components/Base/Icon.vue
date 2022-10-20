<script setup lang="ts">
const props = defineProps<{
  name: string;
  color: "black" | "white";
}>();

const iconColor = computed(() => {
  if (props.color === "black") return "text-black";
  if (props.color === "white") return "text-white";
});
</script>

<template>
  <span :class="`mdi mdi-${name} ${iconColor}`"></span>
</template>
