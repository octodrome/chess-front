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
      <span class="mdi mdi-arrow-left"></span>
    </button>

    <hr />

    <button icon color="blue-grey">
      <span class="mdi mdi-arrow-right"></span>
    </button>
  </footer>
</template>
