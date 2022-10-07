<script>
import { mapActions } from "pinia";
import { useComputerGameStore } from "~/stores/computerGameStore";

export default {
  mounted() {
    this.getGame(this.$route.params.id);
  },

  methods: {
    ...mapActions(useComputerGameStore, ["getGame"]),
  },

  watch: {
    $route(newValue) {
      this.getGame(newValue.params.id);
    },
  },
};
</script>

<template>
  <BoardContainer />
</template>
