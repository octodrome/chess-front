<script>
import { mapState } from "pinia";
import { useBoardStore } from "~/stores/boardStore";
import GameOpponentHuman from "~/components/GameOpponentHuman.vue";
import GameOpponentComputer from "~/components/GameOpponentComputer.vue";

export default {
  components: {
    GameOpponentHuman,
    GameOpponentComputer,
  },

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