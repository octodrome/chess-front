<script setup lang="ts">
import { useBoardStore } from "~/stores/boardStore";
import { useComputerGameStore } from "~/stores/computerGameStore";
import services from "~/services/index";

const boardStore = useBoardStore();
const computerGameStore = useComputerGameStore();
const computerLevel = computed(() => services.engine.computerLevel);
const computerName = computed(() =>
  computerGameStore.currentGame
    ? computerGameStore.currentGame.computerName
    : ""
);
const isComputerThinking = computed(() => !boardStore.playerHasToPlay);
</script>

<template>
  <ul>
    <BaseDrawerItem class="flex">
      <BaseIcon
        v-if="isComputerThinking"
        name="angry-robot"
        color="blue-grey"
      />

      <BaseIcon v-else name="robot" color="blue-grey" />

      <h3 class="ml-2 blue-grey--text">{{ computerName }}</h3>
    </BaseDrawerItem>

    <BaseDrawerItem>
      <span class="blue-grey--text">
        {{ $t("gameInfos.level") }} {{ computerLevel }}
      </span>
    </BaseDrawerItem>
  </ul>
</template>
