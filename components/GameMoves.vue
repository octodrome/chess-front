<script>
import { BoardModule, LayoutModule } from "~~/store";

export default {
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
  <div class="ml-4 white--text">
    <div v-for="(move, index) in moves" :key="index">
      <v-icon small :color="moveColor(index)"> mdi-brightness-1 </v-icon>
      {{ index + 1 }}. {{ move }}
    </div>
  </div>
</template>