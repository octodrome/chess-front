<script setup lang="ts">
import { useUserStore } from "~/stores/userStore";
import { useHumanGameStore } from "~/stores/humanGameStore";
import { useBoardStore } from "~/stores/boardStore";
import services from "@/services";

const route = useRoute();
const { user } = useUserStore();
const { board } = useBoardStore();
const { getGame } = useHumanGameStore();

watch(user, () => joinGame(route.params.id));
watch(route, (newValue, oldValue) => {
  leaveGame(oldValue.params.id);
  joinGame(newValue.params.id);
});

onMounted(() => joinGame(route.params.id));

const joinGame = (gameId) => {
  console.log("joining human game:", gameId);
  getGame(gameId);
  if (user) {
    services.socket.joinGame({
      gameId: gameId,
      userId: user.email,
    });
  }
};

const leaveGame = (gameId) => {
  console.log("leaving human game:", gameId);
  if (user) {
    services.socket.leaveGame({
      gameId: gameId,
      userId: user.email,
    });
  }
};
</script>

<template>
  <BoardContainer :board="board" />
</template>
