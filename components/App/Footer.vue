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
  <footer class="p-2">
    <BaseButton type="icon" @click="goToPreviousPosition()">
      <BaseIcon name="arrow-left" />
    </BaseButton>

    <hr />

    <BaseButton type="icon">
      <BaseIcon name="arrow-right" />
    </BaseButton>
  </footer>
</template>
