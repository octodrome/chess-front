<script>
import { BoardModule } from "~~/store";
import Piece from "@/components/Piece.vue";
import CapturedPiecesArea from "@/components/CapturedPiecesArea.vue";

export default {
  components: {
    Piece,
    CapturedPiecesArea,
  },

  props: {
    board: {
      type: Array,
      required: true,
    },
  },

  methods: {
    selectDestination(cellPosition) {
      BoardModule.selectDestination(cellPosition);
    },
  },
};
</script>

<template>
  <div class="board">
    <div
      v-for="(column, columnIndex) in board"
      :key="columnIndex"
      class="board-row"
    >
      <div
        v-for="(cell, rowIndex) in column"
        :key="rowIndex"
        class="cell"
        :class="`cell--${cell.color}`"
      >
        <piece
          v-if="cell.piece"
          :color="cell.piece.color"
          :type="cell.piece.type"
          :selected="cell.piece.selected"
          :cell="{ columnIndex, rowIndex }"
        />

        <div
          v-if="cell.possibleDestination"
          class="possible-destination"
          @click="selectDestination({ columnIndex, rowIndex })"
        />

        <div
          v-if="cell.possibleKill"
          class="possible-kill"
          @click="selectDestination({ columnIndex, rowIndex })"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.board {
  display: flex;
  position: relative;
}

.board-row {
  display: flex;
  flex-direction: column-reverse;
  width: 400px;
}

.cell {
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &--white {
    background-color: #e2d7d7;
  }
  &--black {
    background-color: #526670;
  }

  .possible-destination,
  .possible-kill {
    width: 35%;
    height: 35%;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }
  }

  .possible-destination {
    background-color: #65d6a7;

    &:hover {
      background-color: #4ea782;
    }
  }

  .possible-kill {
    position: absolute;
    background-color: #d34444;
    opacity: 0.8;

    &:hover {
      background-color: #b32f2f;
    }
  }
}
</style>
