<script>
import { mapActions, mapState } from "pinia";
import { useBoardStore } from "~~/stores/boardStore";

export default {
  mounted() {
    // @TODO empty captured pieces
    this.initEmptyBoard();
  },

  computed: {
    ...mapState(useBoardStore, ["board"]),
  },

  methods: {
    ...mapActions(useBoardStore, ["initEmptyBoard"]),
  },
};
</script>

<template>
  <BoardContainer :board="board" />
</template>