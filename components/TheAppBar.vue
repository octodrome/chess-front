<script>
import { mapActions } from "pinia";
import { useLayoutStore } from "~/stores/layoutStore";

export default {
  methods: {
    ...mapActions(useLayoutStore, ["toggleLeftDrawer", "toggleRightDrawer"]),
  },
};
</script>

<template>
  <header>
    <button @click="toggleLeftDrawer()">
      <span> mdi-menu </span>
    </button>

    <hr />

    <button @click="toggleRightDrawer()">
      <span> mdi-dots-vertical </span>
    </button>
  </header>
</template>
