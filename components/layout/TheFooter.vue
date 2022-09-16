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
  <v-footer app color="transparent" flat dark inset>
    <v-btn icon color="blue-grey" @click="goToPreviousPosition()">
      <v-icon> mdi-arrow-left </v-icon>
    </v-btn>

    <v-spacer />

    <v-btn icon color="blue-grey">
      <v-icon> mdi-arrow-right </v-icon>
    </v-btn>
  </v-footer>
</template>
