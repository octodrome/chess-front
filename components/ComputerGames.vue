<script setup lang="ts">
import { useBoardStore } from "~/stores/boardStore";
import { useComputerGameStore } from "~/stores/computerGameStore";
import { IComputerGame } from "~/types/computerGame";

defineProps<{
  gameList: IComputerGame[];
}>();

const route = useRoute();
const boardStore = useBoardStore();
const computerGameStore = useComputerGameStore();

const goToGame = (gameId) => {
  if (route.params.id === gameId) return;
  boardStore.continueGame("computer");
  navigateTo({
    path: `/ComputerGame/${gameId}`,
  });
};

const deleteThisGame = (gameId) => {
  computerGameStore.deleteGame(gameId);
  if (route.params.id === gameId) navigateTo({ path: "/" });
};
</script>

<template>
  <ul v-if="gameList && gameList.length !== 0">
    <BaseDrawerItem
      v-for="game in gameList"
      :key="game.id"
      @click="goToGame(game.id)"
    >
      <BaseIcon name="robot" :value="boardStore.playerHasToPlay" />

      <h2>{{ game.computerName }}</h2>

      <BaseIcon name="delete" @click.stop="deleteThisGame(game.id)" />
    </BaseDrawerItem>
  </ul>
</template>