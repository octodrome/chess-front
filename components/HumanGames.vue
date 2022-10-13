<script setup lang="ts">
import { useBoardStore } from "~/stores/boardStore";
import { useHumanGameStore } from "~/stores/humanGameStore";
import { useUserStore } from "~/stores/userStore";

const route = useRoute();
const router = useRouter();
const { gameList, getGame } = useHumanGameStore();
const { user } = useUserStore();
const { continueGame } = useBoardStore();

const opponentEmail = (game) => {
  if (user) {
    return game.guest.email === user.email
      ? game.creator.email
      : game.guest.email;
  }
};

const goToGame = (gameId) => {
  if (route.params.id === gameId) return;

  getGame(gameId);
  continueGame("human");
  router.push({ name: "HumanGame", params: { id: gameId } });
};
</script>

<template>
  <ul v-if="gameList.length !== 0">
    <BaseDrawerItem
      v-for="game in gameList"
      :key="game._id"
      @click="goToGame(game._id)"
    >
      <BaseIcon name="account" />

      <h3>
        {{ opponentEmail(game) }}
      </h3>
    </BaseDrawerItem>
  </ul>
</template>