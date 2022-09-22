<script>
import { mapState, mapActions } from "pinia";
import { useBoardStore } from "~/stores/boardStore";
import { useLayoutStore } from "~/stores/layoutStore";
import GameOpponent from "~/components/GameOpponent.vue";
import GameInfos from "~/components/GameInfos.vue";
import GameMoves from "~/components/GameMoves.vue";

export default {
  components: {
    GameOpponent,
    GameInfos,
    GameMoves,
  },

  computed: {
    ...mapState(useLayoutStore, ["drawerRightIsOpened"]),
    ...mapState(useBoardStore, ["moves"]),

    opened: {
      get() {
        return this.drawerRightIsOpened;
      },

      set(value) {
        this.setDrawerRight(value);
      },
    },
  },

  methods: {
    ...mapActions(useLayoutStore, ["setDrawerRight"]),

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
