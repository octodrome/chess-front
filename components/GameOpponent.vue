<script setup lang="ts">
import { useBoardStore } from "~/stores/boardStore";

const { opponent } = useBoardStore();
const isAgainstHuman = computed(() => opponent === "human");
</script>

<template>
  <GameOpponentHuman v-if="isAgainstHuman" />
  <GameOpponentComputer v-else />
</template>