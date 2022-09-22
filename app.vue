<script>
import { useSnackbarStore } from "~/stores/snackbarStore";
import { mapState, mapActions } from "pinia";
import TheDrawerLeft from "~/components/layout/TheDrawerLeft.vue";
import TheDrawerRight from "~/components/layout/TheDrawerRight.vue";
import TheAppBar from "~/components/layout/TheAppBar.vue";
import TheFooter from "~/components/layout/TheFooter.vue";

export default {
  components: {
    TheDrawerLeft,
    TheDrawerRight,
    TheAppBar,
    TheFooter,
  },

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
    <the-app-bar />

    <the-drawer-left />

    <the-drawer-right />

    <main class="main">
      <NuxtPage />
    </main>

    <the-footer />

    <div v-if="showSnackbar" :color="snackbarColor">
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
