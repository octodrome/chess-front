<script setup lang="ts">
import { useBoardStore } from "~/stores/boardStore";
import { useComputerGameStore } from "~/stores/computerGameStore";
import services from "~/services/index";

const { playerHasToPlay } = useBoardStore();
const { currentGame } = useComputerGameStore();
const computerLevel = computed(() => services.engine.computerLevel);
const computerName = computed(() =>
  currentGame ? currentGame.computerName : ""
);
const isComputerThinking = computed(() => !playerHasToPlay);
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
