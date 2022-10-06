<script>
import { useSnackbarStore } from "~/stores/snackbarStore";
import { mapState, mapActions } from "pinia";
import { useComputerGameStore } from "./stores/computerGameStore";
import { useUserStore } from "./stores/userStore";
import { useHumanGameStore } from "./stores/humanGameStore";

export default {
  mounted() {
    const LocalStorage = process.client ? localStorage : null;

    function parseToken(token) {
      return JSON.parse(atob(token.split(".")[1]));
    }
    const userToken = LocalStorage.getItem("token");

    if (userToken) {
      const userId = parseToken(userToken).userId;
      this.getUser(userId);
      this.getUserGames(userId);
    }

    this.getGames();
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
    ...mapActions(useUserStore, ["getUser"]),
    ...mapActions(useHumanGameStore, ["getUserGames"]),
    ...mapActions(useComputerGameStore, ["getGames"]),
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
