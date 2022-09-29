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
  <div v-if="opened" class="bg-gray-800 text-gray-200 basis-80 shrink-0">
    <div>
      <GameOpponent />

      <hr />

      <GameInfos />
    </div>

    <GameMoves />
  </div>
</template>
