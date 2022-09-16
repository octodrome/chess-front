<script>
import { LayoutModule, UserModule } from "~~/store";

import NewGameFormComputer from "@/components/forms/NewGameFormComputer.vue";
import NewGameFormHuman from "@/components/forms/NewGameFormHuman.vue";
import SignupForm from "@/components/forms/SignupForm.vue";
import LoginForm from "@/components/forms/LoginForm.vue";
import MyAccountForm from "@/components/forms/MyAccountForm.vue";
import HumanGames from "@/components/HumanGames.vue";
import ComputerGames from "@/components/ComputerGames.vue";

export default {
  components: {
    NewGameFormComputer,
    NewGameFormHuman,
    SignupForm,
    LoginForm,
    MyAccountForm,
    HumanGames,
    ComputerGames,
  },

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
    drawerLeftIsOpened() {
      return LayoutModule.drawerLeftIsOpened;
    },

    loggedIn() {
      return UserModule.loggedIn;
    },

    opened: {
      get() {
        return this.drawerLeftIsOpened;
      },

      set(value) {
        LayoutModule.setDrawerLeft(value);
      },
    },
  },

  methods: {
    logout() {
      UserModule.logout();
    },
  },
};
</script>

<template>
  <v-navigation-drawer v-model="opened" app color="blue-grey darken-4" dark>
    <v-list dense>
      <v-list-item :to="{ name: 'EmptyGame' }" class="pt-1 pb-3">
        <v-icon color="blue-grey"> mdi-chess-knight </v-icon>

        <h3 class="ml-2 blue-grey--text">Vue chess</h3>
      </v-list-item>

      <v-divider />

      <v-list-item v-if="!loggedIn" link @click="signupDialogIsOpened = true">
        <v-list-item-action>
          <v-icon> mdi-login </v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>
            {{ $t("options.signup") }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-if="!loggedIn" link @click="loginDialogIsOpened = true">
        <v-list-item-action>
          <v-icon> mdi-account </v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>
            {{ $t("options.login") }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-if="loggedIn" link @click="logout">
        <v-list-item-action>
          <v-icon> mdi-logout </v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>
            {{ $t("options.logout") }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-if="loggedIn" link @click="myAccountDialogIsOpened = true">
        <v-list-item-action>
          <v-icon> mdi-card-account-details </v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title> My account </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item link @click="newGameVsComputerDialogIsOpened = true">
        <v-list-item-action>
          <v-icon> mdi-plus </v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>
            {{ $t("options.newComputerGame") }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <ComputerGames />

      <v-divider />

      <v-list-item
        :disabled="!loggedIn"
        link
        @click="newGameVsHumanDialogIsOpened = true"
      >
        <v-list-item-action>
          <v-icon :disabled="!loggedIn"> mdi-plus </v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>
            {{ $t("options.newHumanGame") }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <HumanGames v-if="loggedIn" />

      <v-divider />

      <v-list-item link>
        <v-list-item-action>
          <v-icon> mdi-cog </v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>
            {{ $t("options.settings") }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-dialog
      v-if="signupDialogIsOpened"
      v-model="signupDialogIsOpened"
      max-width="500"
    >
      <signup-form @close="signupDialogIsOpened = false" />
    </v-dialog>

    <v-dialog
      v-if="loginDialogIsOpened"
      v-model="loginDialogIsOpened"
      max-width="500"
    >
      <login-form @close="loginDialogIsOpened = false" />
    </v-dialog>

    <v-dialog
      v-if="myAccountDialogIsOpened"
      v-model="myAccountDialogIsOpened"
      max-width="500"
    >
      <my-account-form @close="myAccountDialogIsOpened = false" />
    </v-dialog>

    <v-dialog
      v-if="newGameVsComputerDialogIsOpened"
      v-model="newGameVsComputerDialogIsOpened"
      max-width="500"
    >
      <new-game-form-computer
        @close="newGameVsComputerDialogIsOpened = false"
      />
    </v-dialog>

    <v-dialog
      v-if="newGameVsHumanDialogIsOpened"
      v-model="newGameVsHumanDialogIsOpened"
      max-width="500"
    >
      <new-game-form-human @close="newGameVsHumanDialogIsOpened = false" />
    </v-dialog>
  </v-navigation-drawer>
</template>
