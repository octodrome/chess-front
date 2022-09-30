<script>
export default {
  props: {
    icon: {
      type: Boolean,
      defalut: false,
    },
  },
};
</script>

<template>
  <button
    v-if="icon"
    class="hover:bg-gray-300 transition duration-300 w-12 h-12 rounded-full"
  >
    <slot />
  </button>
</template>