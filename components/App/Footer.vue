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
    <BaseButton icon @click="goToPreviousPosition()">
      <BaseIcon name="arrow-left" />
    </BaseButton>

    <hr />

    <BaseButton icon>
      <BaseIcon name="arrow-right" />
    </BaseButton>
  </footer>
</template>
