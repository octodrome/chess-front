<script>
import { mapState, mapActions } from "pinia";
import { useBoardStore } from "~/stores/boardStore";
import { useLayoutStore } from "~/stores/layoutStore";

export default {
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
  <BaseDrawer v-if="opened">
    <div>
      <GameOpponent />

      <hr />

      <GameInfos />
    </div>

    <GameMoves />
  </BaseDrawer>
</template>
