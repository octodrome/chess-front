<script>
import { mapState, mapActions } from "pinia";
import { useBoardStore } from "~/stores/boardStore";
import { useHumanGameStore } from "~/stores/humanGameStore";
import { useUserStore } from "~/stores/userStore";
// @TODO Make it possible to delete a human game

export default {
  computed: {
    ...mapState(useHumanGameStore, ["gameList"]),

    ...mapState(useUserStore, ["user"]),
  },

  methods: {
    ...mapActions(useHumanGameStore, ["getGame"]),

    ...mapActions(useBoardStore, ["continueGame"]),

    opponentEmail(game) {
      if (this.user) {
        return game.guest.email === this.user.email
          ? game.creator.email
          : game.guest.email;
      }
    },

    goToGame(gameId) {
      if (this.$route.params.id === gameId) return;

      this.getGame(gameId);
      this.continueGame("human");
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