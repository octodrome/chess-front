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
  <div v-if="opened" class="bg-gray-800 text-gray-200 basis-80 shrink-0">
    <ul>
      <li :to="{ name: 'EmptyGame' }" class="flex">
        <BaseIcon name="chess-knight" />

        <h3>Vue chess</h3>
      </li>

      <hr />

      <li v-if="!loggedIn" @click="signupDialogIsOpened = true" class="flex">
        <BaseIcon name="login" />

        <h3>{{ $t("options.signup") }}</h3>
      </li>

      <li v-if="!loggedIn" @click="loginDialogIsOpened = true" class="flex">
        <BaseIcon name="account" />

        <h3>{{ $t("options.login") }}</h3>
      </li>

      <li v-if="loggedIn" @click="logout" class="flex">
        <BaseIcon name="logout" />

        <h3>{{ $t("options.logout") }}</h3>
      </li>

      <li v-if="loggedIn" @click="myAccountDialogIsOpened = true" class="flex">
        <BaseIcon name="card-account-details" />

        <h3>My account</h3>
      </li>

      <hr />

      <li @click="newGameVsComputerDialogIsOpened = true" class="flex">
        <BaseIcon name="plus" />

        <h3>{{ $t("options.newComputerGame") }}</h3>
      </li>

      <ComputerGames />

      <hr />

      <li
        :disabled="!loggedIn"
        @click="newGameVsHumanDialogIsOpened = true"
        class="flex"
      >
        <BaseIcon name="plus" />

        <h3>{{ $t("options.newHumanGame") }}</h3>
      </li>

      <HumanGames v-if="loggedIn" />

      <hr />

      <li class="flex">
        <BaseIcon name="settings" />

        <h3>{{ $t("options.settings") }}</h3>
      </li>
    </ul>

    <div v-if="signupDialogIsOpened">
      <FormSignup @close="signupDialogIsOpened = false" />
    </div>

    <div v-if="loginDialogIsOpened">
      <FormLogin @close="loginDialogIsOpened = false" />
    </div>

    <div v-if="myAccountDialogIsOpened">
      <FormMyAccount @close="myAccountDialogIsOpened = false" />
    </div>

    <div v-if="newGameVsComputerDialogIsOpened">
      <FormNewGameComputer @close="newGameVsComputerDialogIsOpened = false" />
    </div>

    <div v-if="newGameVsHumanDialogIsOpened">
      <FormNewGameHuman @close="newGameVsHumanDialogIsOpened = false" />
    </div>
  </div>
</template>
