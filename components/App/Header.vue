<script setup lang="ts">
import { useLayoutStore } from "~/stores/layoutStore";
const {toggleLeftDrawer, toggleRightDrawer} = useLayoutStore()
</script>

<template>
  <header class="p-2">
    <BaseButton @click="toggleLeftDrawer" type="icon">
      <BaseIcon name="menu" />
    </BaseButton>

    <BaseButton @click="toggleRightDrawer" type="icon">
      <BaseIcon name="dots-vertical" />
    </BaseButton>
  </header>
</template>
