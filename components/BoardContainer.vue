<script>
import { mapState } from "pinia";
import { useBoardStore } from "~/stores/boardStore";

export default {
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
        :is-checked="isOpponentKingChecked"
        :is-check-mated="false"
      />

      <Board :board="board" />

      <HasToPlayLine
        :is-checked="isPlayerKingChecked"
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
