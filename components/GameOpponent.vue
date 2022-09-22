<script>
import { mapState } from "pinia";
import { useBoardStore } from "~/stores/boardStore";

export default {
  computed: {
    ...mapState(useBoardStore, ["opponent"]),

    isAgainstHuman() {
      return this.opponent === "human";
    },
  },
};
</script>

<template>
  <div>
    <GameOpponentHuman v-if="isAgainstHuman" />
    <GameOpponentComputer v-else />
  </div>
</template>