<script>
import { mapState } from "pinia";
import { useBoardStore } from "~/stores/boardStore";

export default {
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
  <div class="fill-height d-flex flex-column justify-center">
    <div class="board-container elevation-4">
      <CapturedPiecesArea side="computer" />

      <HasToPlayLine
        color="black"
        :is-checked="opponentKingIsChecked"
        :is-check-mated="false"
      />

      <Board :board="board" />

      <HasToPlayLine
        :is-checked="playerKingIsChecked"
        :is-check-mated="false"
        color="white"
      />

      <CapturedPiecesArea side="player" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.board-container {
  height: 400px;
  width: 400px;
  position: relative;
}
</style>
