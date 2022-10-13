<script setup lang="ts">
import { useBoardStore } from "~~/stores/boardStore";
const { board, initEmptyBoard } = useBoardStore();

onMounted(() => initEmptyBoard());
</script>

<template>
  <BoardContainer :board="board" />
</template>