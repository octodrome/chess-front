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
  <div v-if="gameList.length !== 0">
    <v-list-item
      v-for="game in gameList"
      :key="game.id"
      link
      @click="goToGame(game.id)"
    >
      <v-list-item-action>
        <v-badge :value="playerHasToPlay" color="#65d6a7" dot overlap>
          <v-icon> mdi-robot </v-icon>
        </v-badge>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title>
          {{ game.computerName }}
        </v-list-item-title>
      </v-list-item-content>

      <v-list-item-action @click="deleteGame(game.id)">
        <v-icon> mdi-delete </v-icon>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>