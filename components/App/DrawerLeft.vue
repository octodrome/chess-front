<script setup lang="ts">
import { useLayoutStore } from "~/stores/layoutStore";
import { useUserStore } from "~/stores/userStore";
import { useComputerGameStore } from "~/stores/computerGameStore";

const { drawerLeftIsOpened, setDrawerLeft } = useLayoutStore()
const { loggedIn, logout } = useUserStore()
const { gameList } = useComputerGameStore()

const modals = reactive({
  newGameVsComputerIsOpened: false,
  newGameVsHumanIsOpened: false,
  signupIsOpened: false,
  loginIsOpened: false,
  myAccountIsOpened: false,
})

const opened = computed({
  get: () => drawerLeftIsOpened,
  set: (value) => setDrawerLeft(value),
});
</script>

<template>
  <BaseDrawer v-if="opened">
    <ul>
      <NuxtLink to="/">
        <BaseDrawerItem>
          <BaseIcon name="chess-knight" />

          <h3>Vue chess</h3>
        </BaseDrawerItem>
      </NuxtLink>

      <hr />

      <BaseDrawerItem v-if="!loggedIn" @click="modals.signupIsOpened = true">
        <BaseIcon name="login" />

        <h3>{{ $t("options.signup") }}</h3>
      </BaseDrawerItem>

      <BaseDrawerItem v-if="!loggedIn" @click="modals.loginIsOpened = true">
        <BaseIcon name="account" />

        <h3>{{ $t("options.login") }}</h3>
      </BaseDrawerItem>

      <BaseDrawerItem v-if="loggedIn" @click="logout">
        <BaseIcon name="logout" />

        <h3>{{ $t("options.logout") }}</h3>
      </BaseDrawerItem>

      <BaseDrawerItem v-if="loggedIn" @click="modals.myAccountIsOpened = true">
        <BaseIcon name="card-account-details" />

        <h3>My account</h3>
      </BaseDrawerItem>

      <hr />

      <BaseDrawerItem @click="modals.newGameVsComputerIsOpened = true">
        <BaseIcon name="plus" />

        <h3>{{ $t("options.newComputerGame") }}</h3>
      </BaseDrawerItem>

      <ComputerGames v-if="gameList.length" :gameList="gameList"/>

      <hr />

      <BaseDrawerItem
        :disabled="!loggedIn"
        @click="modals.newGameVsHumanIsOpened = true"
      >
        <BaseIcon name="plus" />

        <h3>{{ $t("options.newHumanGame") }}</h3>
      </BaseDrawerItem>

      <HumanGames v-if="loggedIn" />

      <hr />

      <BaseDrawerItem>
        <BaseIcon name="settings" />

        <h3>{{ $t("options.settings") }}</h3>
      </BaseDrawerItem>
    </ul>

    <div v-if="modals.signupIsOpened">
      <BaseModal @close="modals.signupIsOpened = false">
        <FormSignup @close="modals.signupIsOpened = false" />
      </BaseModal>
    </div>

    <div v-if="modals.loginIsOpened">
      <BaseModal @close="modals.loginIsOpened = false">
        <FormLogin @close="modals.loginIsOpened = false" />
      </BaseModal>
    </div>

    <div v-if="modals.myAccountIsOpened">
      <BaseModal @close="modals.myAccountIsOpened = false">
        <FormMyAccount @close="modals.myAccountIsOpened = false" />
      </BaseModal>
    </div>

    <div v-if="modals.newGameVsComputerIsOpened">
      <BaseModal @close="modals.newGameVsComputerIsOpened = false">
        <FormNewGameComputer @close="modals.newGameVsComputerIsOpened = false" />
      </BaseModal>
    </div>

    <div v-if="modals.newGameVsHumanIsOpened">
      <BaseModal @close="modals.newGameVsHumanIsOpened = false">
        <FormNewGameHuman @close="modals.newGameVsHumanIsOpened = false" />
      </BaseModal>
    </div>
  </BaseDrawer>
</template>
