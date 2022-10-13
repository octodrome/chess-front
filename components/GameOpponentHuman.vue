<script setup lang="ts">
import { useHumanGameStore } from "~/stores/humanGameStore";

const { opponentPseudo } = useHumanGameStore();
const isOpponentDialogOpened = ref(false);
</script>

<template>
  <div>
    <BaseDrawerItem class="flex" link @click="isOpponentDialogOpened = true">
      <BaseIcon color="blue-grey" name="account-circle" />

      <h4 class="mx-3 blue-grey--text">{{ opponentPseudo }}</h4>

      <BaseIcon color="blue-grey" name="message" />
    </BaseDrawerItem>

    <div v-if="isOpponentDialogOpened" max-width="500">
      <Chat @close="isOpponentDialogOpened = false" />
    </div>
  </div>
</template>
