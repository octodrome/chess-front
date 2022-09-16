<script>
import moment from "moment";
import { BoardModule, HumanGameModule } from "~~/store";

export default {
  computed: {
    round() {
      return BoardModule.round;
    },

    hasToPlay() {
      return BoardModule.hasToPlay;
    },

    game() {
      return HumanGameModule.currentGame;
    },

    gameStartedSince() {
      if (this.game) return moment(this.game.createdAt).fromNow();
      return "";
    },
  },
};
</script>

<template>
  <div>
    <div class="mt-4 ml-4 mb-2">Started {{ gameStartedSince }}</div>

    <v-list-item link> {{ $t("gameInfos.round") }} {{ round }} </v-list-item>

    <v-list-item link>
      <span v-if="hasToPlay === 'black'">
        {{ $t("gameInfos.blackToPlay") }}
      </span>
      <span v-if="hasToPlay === 'white'">
        {{ $t("gameInfos.whiteToPlay") }}
      </span>
    </v-list-item>
  </div>
</template>
