<script setup lang="ts">
import { useUserStore } from "~/stores/userStore";
import { useHumanGameStore } from "~/stores/humanGameStore";
import { useBoardStore } from "~/stores/boardStore";

const selectedUserId = ref("");

const emit = defineEmits<{
  (e: 'close'): void
}>()

const {users, user, getAllOpponents} = useUserStore();
const {createGame} = useHumanGameStore();
const {startNewGame} = useBoardStore();

const cancel = () => emit("close");

const start = () => {
  emit("close");
  if (user && selectedUserId.value) {
    createGame({ guest: selectedUserId.value, hasToPlay: user._id, moves: [] })
      .then((game) => {
        emit("close");
        startNewGame("human");
        navigateTo({ path: `/HumanGame/${game._id}`});
      });
  }
}

onMounted(async() => user ? await getAllOpponents(user._id) : null)
</script>
  
<template>
  <div>
    <h2 class="text-2xl">New game VS human</h2>

    <div>
      <div class="mt-5 mb-5">Choose your opponent among the players list.</div>

      Players :
      <BaseRadioGroup
        :option-list="users"
        v-model="selectedUserId"
        option-label="email"
        option-value="_id"
      />
    </div>

    <div class="flex justify-end">
      <BaseButton type="text" @click="cancel" class="mr-2">Cancel</BaseButton>

      <BaseButton type="text" :disabled="!selectedUserId" @click="start">
        Start
      </BaseButton>
    </div>
  </div>
</template>
