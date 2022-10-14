<script setup lang="ts">
import { useUserStore } from "~/stores/userStore";
import { useComputerGameStore } from "~/stores/computerGameStore";
import { useLayoutStore } from "~~/stores/layoutStore";

const userStore = useUserStore();
const computerGameStore = useComputerGameStore();
const layoutStore = useLayoutStore();
</script>

<template>
  <BaseDrawer>
    <ul>
      <NuxtLink to="/">
        <BaseDrawerItem>
          <BaseIcon name="chess-knight" />

          <h3>Vue chess</h3>
        </BaseDrawerItem>
      </NuxtLink>

      <BaseDrawerSeparator />

      <BaseDrawerItem
        v-if="!userStore.loggedIn"
        @click="layoutStore.openModal('Signup')"
      >
        <BaseIcon name="login" />

        <h3>{{ $t("options.signup") }}</h3>
      </BaseDrawerItem>

      <BaseDrawerItem
        v-if="!userStore.loggedIn"
        @click="layoutStore.openModal('Login')"
      >
        <BaseIcon name="account" />

        <h3>{{ $t("options.login") }}</h3>
      </BaseDrawerItem>

      <BaseDrawerItem v-if="userStore.loggedIn" @click="userStore.logout">
        <BaseIcon name="logout" />

        <h3>{{ $t("options.logout") }}</h3>
      </BaseDrawerItem>

      <BaseDrawerItem
        v-if="userStore.loggedIn"
        @click="layoutStore.openModal('MyAccount')"
      >
        <BaseIcon name="card-account-details" />

        <h3>My account</h3>
      </BaseDrawerItem>

      <BaseDrawerSeparator />

      <BaseDrawerItem @click="layoutStore.openModal('NewGameComputer')">
        <BaseIcon name="plus" />

        <h3>{{ $t("options.newComputerGame") }}</h3>
      </BaseDrawerItem>

      <ComputerGames
        v-if="computerGameStore.gameList.length"
        :gameList="computerGameStore.gameList"
      />

      <BaseDrawerSeparator />

      <BaseDrawerItem
        :disabled="!userStore.loggedIn"
        @click="layoutStore.openModal('NewGameHuman')"
      >
        <BaseIcon name="plus" />

        <h3>{{ $t("options.newHumanGame") }}</h3>
      </BaseDrawerItem>

      <HumanGames v-if="userStore.loggedIn" />

      <BaseDrawerSeparator />

      <BaseDrawerItem>
        <BaseIcon name="settings" />

        <h3>{{ $t("options.settings") }}</h3>
      </BaseDrawerItem>
    </ul>
  </BaseDrawer>
</template>
