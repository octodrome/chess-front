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
  <div class="board-container">
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
</template>

<style scoped lang="scss">
.board-container {
  height: 400px;
  width: 400px;
  position: relative;
}
</style>
