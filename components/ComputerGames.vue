<script setup lang="ts">
import { useBoardStore } from "~/stores/boardStore";
import { useComputerGameStore } from "~/stores/computerGameStore";
import { IComputerGame } from "~/types/computerGame";

defineProps<{
  gameList: IComputerGame[];
}>();

const route = useRoute();
const router = useRouter();
const { continueGame, playerHasToPlay } = useBoardStore();
const { deleteGame } = useComputerGameStore();

const goToGame = (gameId) => {
  if (route.params.id === gameId) return;
  continueGame("computer");
  navigateTo({
    path: `/ComputerGame/${gameId}`,
  });
};

const deleteThisGame = (gameId) => {
  deleteGame(gameId);
  if (route.params.id === gameId) router.push({ name: "EmptyGame" });
};
</script>

<template>
  <ul v-if="gameList && gameList.length !== 0">
    <BaseDrawerItem
      v-for="game in gameList"
      :key="game.id"
      @click="goToGame(game.id)"
    >
      <BaseIcon name="robot" :value="playerHasToPlay" />

      <h2>{{ game.computerName }}</h2>

      <BaseIcon name="delete" @click="deleteThisGame(game.id)" />
    </BaseDrawerItem>
  </ul>
</template>