<script>
import { mapState } from "pinia";
import { useBoardStore } from "~/stores/boardStore";
import { useComputerGameStore } from "~/stores/computerGameStore";
import services from "~/services/index";

export default {
  computed: {
    ...mapState(useBoardStore, ["playerHasToPlay"]),
    ...mapState(useComputerGameStore, ["currentGame"]),

    computerLevel() {
      return services.engine.computerLevel;
    },

    computerName() {
      if (this.currentGame) return this.currentGame.computerName;
      return "";
    },

    isComputerThinking() {
      return !this.playerHasToPlay;
    },
  },
};
</script>

<template>
  <ul>
    <li class="pt-1 pb-3">
      <span
        v-if="isComputerThinking"
        color="blue-grey"
        class="mdi mdi-robot-angry"
      ></span>
      <span v-else color="blue-grey" class="mdi mdi-robot"></span>

      <h3 class="ml-2 blue-grey--text">{{ computerName }}</h3>
    </li>
    <li>
      <span class="blue-grey--text">
        {{ $t("gameInfos.level") }} {{ computerLevel }}
      </span>
    </li>
  </ul>
</template>
