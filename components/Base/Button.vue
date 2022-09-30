<script>
export default {
  props: {
    icon: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div>
    <button
      v-if="icon"
      :disabled="disabled"
      class="hover:bg-gray-300 transition duration-300 w-12 h-12 rounded-full"
    >
      <slot />
    </button>

    <button
      v-if="text"
      :disabled="disabled"
      class="hover:bg-gray-300 transition duration-300 p-2 rounded"
    >
      <slot />
    </button>
  </div>
</template>