<script>
import { mapActions, mapState } from "pinia";
import { useComputerGameStore } from "~/stores/computerGameStore";
import { useBoardStore } from "~/stores/boardStore";

export default {
  mounted() {
    this.getGame(this.$route.params.id);
  },

  computed: {
    ...mapState(useBoardStore, ["board"]),
  },

  methods: {
    ...mapActions(useComputerGameStore, ["getGame"]),
  },
};
</script>

<template>
  <BoardContainer :board="board" />
</template>
