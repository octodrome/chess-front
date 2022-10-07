<script>
import { mapActions } from "pinia";
import { useBoardStore } from "~~/stores/boardStore";

export default {
  mounted() {
    // @TODO empty captured pieces
    this.initEmptyBoard();
  },

  methods: {
    ...mapActions(useBoardStore, ["initEmptyBoard"]),
  },
};
</script>

<template>
  <BoardContainer />
</template>