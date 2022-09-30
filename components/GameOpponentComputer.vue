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
    <BaseDrawerItem class="flex">
      <BaseIcon
        v-if="isComputerThinking"
        name="angry-robot"
        color="blue-grey"
      />

      <BaseIcon v-else name="robot" color="blue-grey" />

      <h3 class="ml-2 blue-grey--text">{{ computerName }}</h3>
    </BaseDrawerItem>

    <BaseDrawerItem>
      <span class="blue-grey--text">
        {{ $t("gameInfos.level") }} {{ computerLevel }}
      </span>
    </BaseDrawerItem>
  </ul>
</template>
