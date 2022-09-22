<script>
export default {
  methods: {
    goToPreviousPosition() {
      // BoardModule.goToPreviousPosition();
    },

    goToNextPosition() {
      // BoardModule.goToNextPosition();
    },
  },
};
</script>

<template>
  <footer app color="transparent" flat dark inset>
    <button icon color="blue-grey" @click="goToPreviousPosition()">
      <span> mdi-arrow-left </span>
    </button>

    <hr />

    <button icon color="blue-grey">
      <span> mdi-arrow-right </span>
    </button>
  </footer>
</template>
