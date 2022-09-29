<template>
  <span :class="`mdi mdi-${name}`"></span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      default: "sm",
    },

    color: {
      type: String,
      default: "black",
    },
  },
};
</script>
