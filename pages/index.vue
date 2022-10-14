<script setup lang="ts">
import { useBoardStore } from "~~/stores/boardStore";
const boardStore = useBoardStore();

onMounted(() => boardStore.initEmptyBoard());
</script>

<template>
  <BoardContainer :board="boardStore.board" />
</template>