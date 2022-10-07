<script>
import { useBoardStore } from "~/stores/boardStore";
import { useComputerGameStore } from "~/stores/computerGameStore";
import { mapState, mapActions } from "pinia";

export default {
  props: {
    gameList: {
      type: Array,
      required: true,
    }
  },

  methods: {
    ...mapActions(useBoardStore, ["continueGame"]),
    ...mapActions(useComputerGameStore, ["deleteGame"]),

    goToGame(gameId) {
      if (this.$route.params.id === gameId) return;

      this.continueGame("computer");
      
      navigateTo({
        path: `/ComputerGame/${gameId}`,
      });
    },

    deleteThisGame(gameId) {
      this.deleteGame(gameId);
      if (this.$route.params.id === gameId)
        this.$router.push({ name: "EmptyGame" });
    },
  },

  computed: {
    ...mapState(useBoardStore, ["playerHasToPlay"]),
  },
};
</script>

<template>
  <ul v-if="gameList && gameList.length !== 0">
    <BaseDrawerItem v-for="game in gameList" :key="game.id" @click="goToGame(game.id)">
      <BaseIcon name="robot" :value="playerHasToPlay"/>

      <h2>{{ game.computerName }}</h2>

      <BaseIcon name="delete" @click="deleteThisGame(game.id)"/>
    </BaseDrawerItem>
  </ul>
</template>