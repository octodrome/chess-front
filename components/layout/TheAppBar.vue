<script>
import { mapActions } from "pinia";
import { useLayoutStore } from "~~/stores/layoutStore";

export default {
  methods: {
    ...mapActions(useLayoutStore, ["toggleLeftDrawer", "toggleRightDrawer"]),
  },
};
</script>

<template>
  <header app color="transparent" flat dark>
    <button icon color="blue-grey" @click="toggleLeftDrawer()">
      <span> mdi-menu </span>
    </button>

    <hr />

    <button icon color="blue-grey" @click="toggleRightDrawer()">
      <span> mdi-dots-vertical </span>
    </button>
  </header>
</template>
