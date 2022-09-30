<script>
import { useLayoutStore } from "~/stores/layoutStore";
import { useUserStore } from "~/stores/userStore";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      newGameVsComputerDialogIsOpened: false,
      newGameVsHumanDialogIsOpened: false,
      signupDialogIsOpened: false,
      loginDialogIsOpened: false,
      myAccountDialogIsOpened: false,
    };
  },

  computed: {
    ...mapState(useLayoutStore, ["drawerLeftIsOpened"]),
    ...mapState(useUserStore, ["loggedIn"]),

    opened: {
      get() {
        return this.drawerLeftIsOpened;
      },

      set(value) {
        setDrawerLeft(value);
      },
    },
  },

  methods: {
    ...mapActions(useUserStore, ["logout"]),
    ...mapActions(useLayoutStore, ["setDrawerLeft"]),
  },
};
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

      <BaseDrawerItem v-if="!loggedIn" @click="signupDialogIsOpened = true">
        <BaseIcon name="login" />

        <h3>{{ $t("options.signup") }}</h3>
      </BaseDrawerItem>

      <BaseDrawerItem v-if="!loggedIn" @click="loginDialogIsOpened = true">
        <BaseIcon name="account" />

        <h3>{{ $t("options.login") }}</h3>
      </BaseDrawerItem>

      <BaseDrawerItem v-if="loggedIn" @click="logout">
        <BaseIcon name="logout" />

        <h3>{{ $t("options.logout") }}</h3>
      </BaseDrawerItem>

      <BaseDrawerItem v-if="loggedIn" @click="myAccountDialogIsOpened = true">
        <BaseIcon name="card-account-details" />

        <h3>My account</h3>
      </BaseDrawerItem>

      <hr />

      <BaseDrawerItem @click="newGameVsComputerDialogIsOpened = true">
        <BaseIcon name="plus" />

        <h3>{{ $t("options.newComputerGame") }}</h3>
      </BaseDrawerItem>

      <ComputerGames />

      <hr />

      <BaseDrawerItem
        :disabled="!loggedIn"
        @click="newGameVsHumanDialogIsOpened = true"
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

    <div v-if="signupDialogIsOpened">
      <BaseModal @close="signupDialogIsOpened = false">
        <FormSignup @close="signupDialogIsOpened = false" />
      </BaseModal>
    </div>

    <div v-if="loginDialogIsOpened">
      <BaseModal @close="loginDialogIsOpened = false">
        <FormLogin @close="loginDialogIsOpened = false" />
      </BaseModal>
    </div>

    <div v-if="myAccountDialogIsOpened">
      <BaseModal @close="myAccountDialogIsOpened = false">
        <FormMyAccount @close="myAccountDialogIsOpened = false" />
      </BaseModal>
    </div>

    <div v-if="newGameVsComputerDialogIsOpened">
      <BaseModal @close="newGameVsComputerDialogIsOpened = false">
        <FormNewGameComputer @close="newGameVsComputerDialogIsOpened = false" />
      </BaseModal>
    </div>

    <div v-if="newGameVsHumanDialogIsOpened">
      <BaseModal @close="newGameVsHumanDialogIsOpened = false">
        <FormNewGameHuman @close="newGameVsHumanDialogIsOpened = false" />
      </BaseModal>
    </div>
  </BaseDrawer>
</template>
