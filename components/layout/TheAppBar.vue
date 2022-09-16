<script>
import { LayoutModule } from "~~/store";

export default {
  methods: {
    toggleLeftDrawer() {
      LayoutModule.toggleLeftDrawer();
    },

    toggleRightDrawer() {
      LayoutModule.toggleRightDrawer();
    },
  },
};
</script>

<template>
  <v-app-bar app color="transparent" flat dark>
    <v-btn icon color="blue-grey" @click="toggleLeftDrawer()">
      <v-icon> mdi-menu </v-icon>
    </v-btn>

    <v-spacer />

    <v-btn icon color="blue-grey" @click="toggleRightDrawer()">
      <v-icon> mdi-dots-vertical </v-icon>
    </v-btn>
  </v-app-bar>
</template>
