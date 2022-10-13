<script setup lang="ts">
import { useBoardStore } from "~/stores/boardStore";
import { useHumanGameStore } from "~/stores/humanGameStore";
import moment from "moment";

const { round, hasToPlay } = useBoardStore();
const { currentGame } = useHumanGameStore();

const gameStartedSince = computed(() => {
  if (currentGame) return moment(currentGame.createdAt).fromNow();
  return "";
});
</script>

<template>
  <div>
    <div class="mt-4 ml-4 mb-2">Started {{ gameStartedSince }}</div>

    <div link>{{ $t("gameInfos.round") }} {{ round }}</div>

    <div link>
      <span v-if="hasToPlay === 'black'">
        {{ $t("gameInfos.blackToPlay") }}
      </span>
      <span v-if="hasToPlay === 'white'">
        {{ $t("gameInfos.whiteToPlay") }}
      </span>
    </div>
  </div>
</template>
