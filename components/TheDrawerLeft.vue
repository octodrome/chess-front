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
  <div v-if="opened">
    <ul>
      <li :to="{ name: 'EmptyGame' }" class="pt-1 pb-3">
        <span color="blue-grey" class="mdi mdi-chess-knight"></span>

        <h3 class="text-3xl font-bold">Vue chess</h3>
      </li>

      <hr />

      <li v-if="!loggedIn" @click="signupDialogIsOpened = true">
        <div>
          <span class="mdi mdi-login"></span>
        </div>

        <div>
          <h3>
            {{ $t("options.signup") }}
          </h3>
        </div>
      </li>

      <li v-if="!loggedIn" @click="loginDialogIsOpened = true">
        <div>
          <span class="mdi mdi-account"></span>
        </div>

        <div>
          <h3>
            {{ $t("options.login") }}
          </h3>
        </div>
      </li>

      <li v-if="loggedIn" @click="logout">
        <div>
          <span class="mdi mdi-logout"></span>
        </div>

        <div>
          <h3>
            {{ $t("options.logout") }}
          </h3>
        </div>
      </li>

      <li v-if="loggedIn" @click="myAccountDialogIsOpened = true">
        <div>
          <span class="mdi mdi-card-account-details"></span>
        </div>

        <div>
          <h3>My account</h3>
        </div>
      </li>

      <hr />

      <li @click="newGameVsComputerDialogIsOpened = true">
        <div>
          <span class="mdi mdi-plus"></span>
        </div>

        <div>
          <h3>
            {{ $t("options.newComputerGame") }}
          </h3>
        </div>
      </li>

      <ComputerGames />

      <hr />

      <li :disabled="!loggedIn" @click="newGameVsHumanDialogIsOpened = true">
        <div>
          <span :disabled="!loggedIn" class="mdi mdi-plus"></span>
        </div>

        <div>
          <h3>
            {{ $t("options.newHumanGame") }}
          </h3>
        </div>
      </li>

      <HumanGames v-if="loggedIn" />

      <hr />

      <li>
        <div>
          <span class="mdi mdi-cog"></span>
        </div>

        <div>
          <h3>
            {{ $t("options.settings") }}
          </h3>
        </div>
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
