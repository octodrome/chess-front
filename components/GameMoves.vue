<script>
import { mapState, mapActions } from "pinia";
import { useLayoutStore } from "~/stores/layoutStore";
import { useBoardStore } from "~/stores/boardStore";

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
  <div class="ml-4 white--text">
    <div v-for="(move, index) in moves" :key="index">
      <span :color="moveColor(index)" class="mdi mdi-brightness-1"></span>
      {{ index + 1 }}. {{ move }}
    </div>
  </div>
</template>