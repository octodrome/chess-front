<script setup lang="ts">
import { useComputerGameStore } from "~/stores/computerGameStore";

const emit = defineEmits<{
  (e: "close"): void;
}>();

const computerGameStore = useComputerGameStore();

const levels = ref([
  {
    name: "Easy",
    value: 1,
  },
  {
    name: "Medium",
    value: 2,
  },
  {
    name: "Hard",
    value: 3,
  },
]);

const color = ref("white");

const colors = ref([
  {
    name: "White",
    value: "white",
  },
  {
    name: "Black",
    value: "black",
  },
]);

const computerLevel = computed(() => 1);

const cancel = () => emit("close");

const start = () => {
  computerGameStore
    .createGame({
      playerColor: color.value,
      computerLevel: computerLevel.value,
    })
    .then((game) => {
      emit("close");

      navigateTo({
        path: `/ComputerGame/${game.id}`,
      });
    });
};
</script>
  

<template>
  <div>
    <h2 class="text-2xl">New game VS computer</h2>

    <div>
      <div class="mt-5 mb-5">
        Set your new game choosing the level and which color you will play with.
      </div>

      Choose your level :
      <BaseRadioGroup
        :option-list="levels"
        option-label="name"
        option-value="value"
      />

      Choose your color :
      <BaseRadioGroup
        :option-list="colors"
        option-label="name"
        option-value="value"
      />
    </div>

    <div class="flex justify-end">
      <BaseButton type="text" @click="cancel" class="mr-2">Cancel</BaseButton>

      <BaseButton type="text" @click="start">Start</BaseButton>
    </div>
  </div>
</template>
