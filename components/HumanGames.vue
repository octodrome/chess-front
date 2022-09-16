<script>
import { BoardModule, HumanGameModule, UserModule } from "~~/store";
// @TODO Make it possible to delete a human game

export default {
  computed: {
    gameList() {
      return HumanGameModule.gameList;
    },
  },

  methods: {
    opponentEmail(game) {
      if (UserModule.user) {
        return game.guest.email === UserModule.user.email
          ? game.creator.email
          : game.guest.email;
      }
    },

    goToGame(gameId) {
      if (this.$route.params.id === gameId) return;

      HumanGameModule.getGame(gameId);
      BoardModule.continueGame("human");
      this.$router.push({ name: "HumanGame", params: { id: gameId } });
    },
  },
};
</script>

<template>
  <div v-if="gameList.length !== 0">
    <v-list-item
      v-for="game in gameList"
      :key="game._id"
      link
      @click="goToGame(game._id)"
    >
      <v-list-item-action>
        <v-icon> mdi-account </v-icon>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title>
          {{ opponentEmail(game) }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>