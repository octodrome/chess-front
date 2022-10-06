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
  <ul v-if="gameList.length !== 0">
    <BaseDrawerItem
      v-for="game in gameList"
      :key="game._id"
      @click="goToGame(game._id)"
    >
      <BaseIcon name="account" />

      <h3>
        {{ opponentEmail(game) }}
      </h3>
    </BaseDrawerItem>
  </ul>
</template>