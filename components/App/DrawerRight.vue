<script setup lang="ts">
import { useLayoutStore } from "~/stores/layoutStore";

const { drawerRightIsOpened, setDrawerRight } = useLayoutStore();

const opened = computed({
  get: () => drawerRightIsOpened,
  set: (value) => setDrawerRight(value),
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
