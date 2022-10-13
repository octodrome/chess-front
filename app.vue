<script setup lang="ts">
import { useSnackbarStore } from "~/stores/snackbarStore";
import { useComputerGameStore } from "./stores/computerGameStore";
import { useUserStore } from "./stores/userStore";
import { useHumanGameStore } from "./stores/humanGameStore";

useHead({
  title: 'Vue chess',
})

const { showSnackbar, snackbarMessage, hide } = useSnackbarStore()
const { getUser } = useUserStore();
const { getUserGames } = useHumanGameStore()
const { getGames } = useComputerGameStore();

onMounted(() => {
  const LocalStorage = process.client ? localStorage : null;

  function parseToken(token) {
    return JSON.parse(atob(token.split(".")[1]));
  }
  const userToken = LocalStorage.getItem("token");

  if (userToken) {
    const userId = parseToken(userToken).userId;
    getUser(userId);
    getUserGames(userId);
  }

  getGames();
});

const showTheSnackbar = computed({
  get: () => showSnackbar,
  set: (value) => !value ? hide() : undefined
});
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

    <div v-if="showTheSnackbar">
      <span class="mr-3">{{ snackbarMessage }}</span>

      <button @click="hide()">
        <BaseIcon name="close" />
      </button>
    </div>
  </div>
</template>
