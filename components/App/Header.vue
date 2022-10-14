<script setup lang="ts">
import { useLayoutStore } from "~/stores/layoutStore";
const layoutStore = useLayoutStore();
</script>

<template>
  <header class="p-2">
    <BaseButton @click="layoutStore.toggleLeftDrawer" type="icon">
      <BaseIcon name="menu" />
    </BaseButton>

    <BaseButton @click="layoutStore.toggleRightDrawer" type="icon">
      <BaseIcon name="dots-vertical" />
    </BaseButton>
  </header>
</template>
