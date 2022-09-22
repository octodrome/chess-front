<script>
import BoardContainer from "@/components/BoardContainer.vue";
import { mapActions } from "pinia";
import { useBoardStore } from "~~/stores/boardStore";

export default {
  components: {
    BoardContainer,
  },

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