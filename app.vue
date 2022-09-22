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
  <div>
    <TheAppBar />

    <TheDrawerLeft />

    <TheDrawerRight />

    <main class="main">
      <NuxtPage />
    </main>

    <TheFooter />

    <div v-if="showSnackbar">
      <span class="mr-3">{{ snackbarMessage }}</span>

      <button @click="hide()">
        <div>mdi-close</div>
      </button>
    </div>
  </div>
</template>

<style scoped>
.main {
  background-color: #dfdfdf;
}
</style>
