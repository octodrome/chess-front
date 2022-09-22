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

    deleteGame(gameId) {
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
  <ul v-if="gameList.length !== 0">
    <li v-for="game in gameList" :key="game.id" link @click="goToGame(game.id)">
      <div>
        <div :value="playerHasToPlay" color="#65d6a7" dot overlap>
          <span> mdi-robot </span>
        </div>
      </div>

      <div>
        <h2>
          {{ game.computerName }}
        </h2>
      </div>

      <div @click="deleteGame(game.id)">
        <span> mdi-delete </span>
      </div>
    </li>
  </ul>
</template>