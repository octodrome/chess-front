<script setup lang="ts">
import { useUserStore } from "~/stores/userStore";
import { useHumanGameStore } from "~/stores/humanGameStore";
import { useBoardStore } from "~/stores/boardStore";

const selectedUserId = ref("");

const emit = defineEmits<{
  (e: "close"): void;
}>();

const userStore = useUserStore();
const humanGameStore = useHumanGameStore();
const boardStore = useBoardStore();

const cancel = () => emit("close");

const start = () => {
  emit("close");
  if (userStore.user && selectedUserId.value) {
    humanGameStore
      .createGame({
        guest: selectedUserId.value,
        hasToPlay: userStore.user._id,
        moves: [],
      })
      .then((game) => {
        emit("close");
        boardStore.startNewGame("human");
        navigateTo({ path: `/HumanGame/${game._id}` });
      });
  }
};

onMounted(async () =>
  userStore.user ? await userStore.getAllOpponents(userStore.user._id) : null
);
</script>
  
<template>
  <BaseCardHeader title="New game VS human" />

  <BaseCardMain text="Choose your opponent among the players list.">
    Players :
    <BaseRadioGroup
      :option-list="userStore.users"
      v-model="selectedUserId"
      option-label="email"
      option-value="_id"
    />
  </BaseCardMain>

  <BaseCardFooter>
    <BaseButton type="text" @click="cancel" class="mr-2">Cancel</BaseButton>

    <BaseButton type="text" :disabled="!selectedUserId" @click="start">
      Start
    </BaseButton>
  </BaseCardFooter>
</template>
