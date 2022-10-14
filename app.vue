<script setup lang="ts">
import { useLayoutStore } from "~/stores/layoutStore";
import { useSnackbarStore } from "~/stores/snackbarStore";
import { useComputerGameStore } from "./stores/computerGameStore";
import { useUserStore } from "./stores/userStore";
import { useHumanGameStore } from "./stores/humanGameStore";

useHead({
  title: "Vue chess",
});

const layoutStore = useLayoutStore();
const snackbarStore = useSnackbarStore();
const { getUser } = useUserStore();
const { getUserGames } = useHumanGameStore();
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
</script>

<template>
  <div class="bg-gray-200 h-screen flex justify-between">
    <AppDrawerLeft v-if="layoutStore.drawerLeftIsOpened" />

    <div class="basis-full flex flex-col justify-between">
      <AppHeader class="flex justify-between" />

      <main class="flex justify-center items-center">
        <NuxtPage />
      </main>

      <AppFooter class="flex justify-between" />
    </div>

    <AppDrawerRight v-if="layoutStore.drawerRightIsOpened" />

    <div v-if="snackbarStore.showSnackbar">
      <span class="mr-3">{{ snackbarStore.snackbarMessage }}</span>

      <button @click="snackbarStore.hide">
        <BaseIcon name="close" />
      </button>
    </div>
  </div>
</template>
