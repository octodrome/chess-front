<script>
import { useSnackbarStore } from "~/stores/snackbarStore";
import { mapState, mapActions } from "pinia";

export default {
  computed: {
    ...mapState(useSnackbarStore, [
      "showSnackbar",
      "snackbarMessage",
      "showSnackbarColor",
    ]),

    showSnackbar: {
      get() {
        return this.showSnackbar;
      },
      set(value) {
        if (!value) {
          this.hideSnackbar();
        }
      },
    },
  },

  methods: {
    ...mapActions(useSnackbarStore, ["hide"]),
  },
};
</script>

<template>
  <div class="bg-gray-200 h-screen flex justify-between">
    <AppDrawerLeft />

    <div class="basis-full flex flex-col justify-between">
      <AppHeader class="flex justify-between" />

      <main class="flex justify-center items-center">
        <NuxtPage />
      </main>

      <AppFooter class="flex justify-between" />
    </div>

    <AppDrawerRight />

    <div v-if="showSnackbar">
      <span class="mr-3">{{ snackbarMessage }}</span>

      <button @click="hide()">
        <BaseIcon name="close" />
      </button>
    </div>
  </div>
</template>
