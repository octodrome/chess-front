<script setup lang="ts">
import { useBoardStore } from "~/stores/boardStore";
import { useLayoutStore } from "~/stores/layoutStore";

const { drawerRightIsOpened, setDrawerRight } = useLayoutStore();
const { moves } = useBoardStore();

const opened = computed({
  get() {
    return this.drawerRightIsOpened;
  },

  set(value) {
    this.setDrawerRight(value);
  },
});
</script>

<template>
  <BaseDrawer v-if="opened">
    <div>
      <GameOpponent />

      <hr />

      <GameInfos />
    </div>

    <GameMoves />
  </BaseDrawer>
</template>
