<script>
import { BoardModule } from "~~/store";
import GameOpponentHuman from "@/components/GameOpponentHuman.vue";
import GameOpponentComputer from "@/components/GameOpponentComputer.vue";

export default {
  components: {
    GameOpponentHuman,
    GameOpponentComputer,
  },

  computed: {
    isAgainstHuman() {
      return BoardModule.opponent === "human";
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