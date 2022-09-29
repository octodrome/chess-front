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
      <span class="mdi mdi-menu"></span>
    </button>

    <hr />

    <button @click="toggleRightDrawer()">
      <span class="mdi mdi-dots-vertical"></span>
    </button>
  </header>
</template>
