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
  <v-app>
    <the-app-bar />

    <the-drawer-left />

    <the-drawer-right />

    <v-main class="main">
      <router-view />
    </v-main>

    <the-footer />

    <v-snackbar v-model="showSnackbar" top :color="snackbarColor">
      <span class="mr-3" v-text="snackbarMessage" />

      <v-btn text icon @click="hide()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<style scoped>
.main {
  background-color: #dfdfdf;
}
</style>
