<script setup lang="ts">
import { useComputerGameStore } from "~/stores/computerGameStore";
import { useBoardStore } from "~/stores/boardStore";

const route = useRoute();
const { getGame } = useComputerGameStore();
const { board } = useBoardStore();

onMounted(() => getGame(route.params.id));
</script>

<template>
  <BoardContainer :board="board" />
</template>
