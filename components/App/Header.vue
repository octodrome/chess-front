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
    <BaseButton @click="toggleLeftDrawer()" icon>
      <BaseIcon name="menu" />
    </BaseButton>

    <hr />

    <BaseButton @click="toggleRightDrawer()" icon>
      <BaseIcon name="dots-vertical" />
    </BaseButton>
  </header>
</template>
