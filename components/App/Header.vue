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
  <header class="p-2">
    <BaseButton @click="toggleLeftDrawer()" type="icon">
      <BaseIcon name="menu" />
    </BaseButton>

    <hr />

    <BaseButton @click="toggleRightDrawer()" type="icon">
      <BaseIcon name="dots-vertical" />
    </BaseButton>
  </header>
</template>
