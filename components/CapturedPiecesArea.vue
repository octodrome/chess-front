<script>
import { mapState } from "pinia";
import { useBoardStore } from "~/stores/boardStore";

export default {
  props: {
    side: {
      type: String,
      required: true,
    },
  },

  computed: {
    ...mapState(useBoardStore, [
      "playerCapturedPieces",
      "computerCapturedPieces",
    ]),

    capturedPieces() {
      if (this.side === "computer") {
        return this.computerCapturedPieces;
      } else {
        return this.playerCapturedPieces;
      }
    },
  },
};
</script>

<template>
  <div class="captured-pieces flex" :class="`captured-pieces--${side}`">
    <div v-for="(capturedPiece, index) in capturedPieces" :key="index">
      <Piece :color="capturedPiece.color" :type="capturedPiece.type" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.captured-pieces {
  position: absolute;
  width: 100%;

  &--computer {
    top: -50px;
  }

  &--player {
    bottom: -50px;
  }
}
</style>
