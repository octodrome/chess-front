<script>
import { mapState } from "pinia";
import { useBoardStore } from "~~/stores/boardStore";
import Board from "~/components/Board.vue";
import CapturedPiecesArea from "~/components/CapturedPiecesArea.vue";
import HasToPlayLine from "~/components/HasToPlayLine.vue";

export default {
  components: {
    Board,
    CapturedPiecesArea,
    HasToPlayLine,
  },

  props: {
    game: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapState(useBoardStore, [
      "board",
      "isOpponentKingChecked",
      "isPlayerKingChecked",
    ]),
  },
};
</script>

<template>
  <v-container class="fill-height d-flex flex-column justify-center">
    <div class="board-container elevation-4">
      <captured-pieces-area side="computer" />

      <has-to-play-line
        color="black"
        :is-checked="opponentKingIsChecked"
        :is-check-mated="false"
      />

      <board :board="board" />

      <has-to-play-line
        :is-checked="playerKingIsChecked"
        :is-check-mated="false"
        color="white"
      />

      <captured-pieces-area side="player" />
    </div>
  </v-container>
</template>

<style scoped lang="scss">
.board-container {
  height: 400px;
  width: 400px;
  position: relative;
}
</style>
