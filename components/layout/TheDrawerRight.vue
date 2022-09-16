<script>
import { BoardModule, LayoutModule } from "~~/store";
import GameOpponent from "@/components/GameOpponent.vue";
import GameInfos from "@/components/GameInfos.vue";
import GameMoves from "@/components/GameMoves.vue";

export default {
  components: {
    GameOpponent,
    GameInfos,
    GameMoves,
  },

  computed: {
    drawerRightIsOpened() {
      return LayoutModule.drawerRightIsOpened;
    },

    opened: {
      get() {
        return this.drawerRightIsOpened;
      },

      set(value) {
        LayoutModule.setDrawerRight(value);
      },
    },

    moves() {
      return BoardModule.moves;
    },
  },

  methods: {
    moveColor(index) {
      return index % 2 === 0 ? "white" : "black";
    },
  },
};
</script>

<template>
  <v-navigation-drawer
    v-model="opened"
    right
    app
    color="blue-grey darken-4"
    dark
  >
    <v-list dense>
      <GameOpponent />

      <v-divider />

      <GameInfos />
    </v-list>

    <GameMoves />
  </v-navigation-drawer>
</template>
