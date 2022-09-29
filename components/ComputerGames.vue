<script>
import { useBoardStore } from "~/stores/boardStore";
import { useComputerGameStore } from "~/stores/computerGameStore";
import { mapState, mapActions } from "pinia";

export default {
  computed: {
    ...mapState(useComputerGameStore, ["gameList"]),
  },

  methods: {
    ...mapActions(useBoardStore, ["continueGame"]),
    ...mapActions(useComputerGameStore, ["deleteGame"]),

    goToGame(gameId) {
      if (this.$route.params.id === gameId) return;

      this.continueGame("computer");
      this.$router.push({ name: "ComputerGame", params: { id: gameId } });
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
    <li v-for="game in gameList" :key="game.id" @click="goToGame(game.id)">
      <div>
        <div :value="playerHasToPlay">
          <BaseIcon name="robot" />
        </div>
      </div>

      <div>
        <h2>
          {{ game.computerName }}
        </h2>
      </div>

      <div @click="deleteThisGame(game.id)">
        <BaseIcon name="delete" />
      </div>
    </li>
  </ul>
</template>