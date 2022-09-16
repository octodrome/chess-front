<script>
import { BoardModule, ComputerGameModule } from "~~/store";
import services from "@/services/index";

export default {
  computed: {
    computerLevel() {
      return services.engine.computerLevel;
    },

    computerName() {
      if (ComputerGameModule.currentGame)
        return ComputerGameModule.currentGame.computerName;
      return "";
    },

    isComputerThinking() {
      return !BoardModule.playerHasToPlay;
    },
  },
};
</script>

<template>
  <div>
    <v-list-item class="pt-1 pb-3">
      <v-icon v-if="isComputerThinking" color="blue-grey">
        mdi-robot-angry
      </v-icon>
      <v-icon v-else color="blue-grey">mdi-robot</v-icon>

      <h3 class="ml-2 blue-grey--text">{{ computerName }}</h3>
    </v-list-item>
    <v-list-item>
      <span class="blue-grey--text">
        {{ $t("gameInfos.level") }} {{ computerLevel }}
      </span>
    </v-list-item>
  </div>
</template>
