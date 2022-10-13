<script setup lang="ts">
import { useLayoutStore } from "~/stores/layoutStore";
import { useBoardStore } from "~/stores/boardStore";

const { drawerRightIsOpened, setDrawerRight } = useLayoutStore()
const { moves } = useBoardStore()

const opened = computed({
  get() {
    return drawerRightIsOpened;
  },
  set(value) {
    setDrawerRight(value);
  },
});

const moveColor = (index) => index % 2 === 0 ? "white" : "black";
</script>

<template>
  <div class="ml-4 white--text">
    <div v-for="(move, index) in moves" :key="index">
      <BaseIcon name="brightness-1" :color="moveColor(index)" />
      {{ index + 1 }}. {{ move }}
    </div>
  </div>
</template>