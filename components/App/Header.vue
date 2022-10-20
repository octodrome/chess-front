<script setup lang="ts">
import { useLayoutStore } from "~/stores/layoutStore";
const layoutStore = useLayoutStore();
</script>

<template>
  <header class="p-2">
    <BaseButton @click="layoutStore.toggleLeftDrawer" type="icon">
      <BaseIcon v-if="!layoutStore.drawer.leftIsOpened" name="menu" />
      <BaseIcon v-else name="arrow-left" />
    </BaseButton>

    <BaseButton @click="layoutStore.toggleRightDrawer" type="icon">
      <BaseIcon v-if="!layoutStore.drawer.rightIsOpened" name="dots-vertical" />
      <BaseIcon v-else name="arrow-right" />
    </BaseButton>
  </header>
</template>
