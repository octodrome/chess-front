<script>
import { mapActions } from "pinia";
import { useBoardStore } from "~/stores/boardStore";

export default {
  props: {
    color: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    selected: {
      type: Boolean,
      required: false,
    },

    cell: {
      type: Object,
      required: false,
    },
  },

  methods: {
    ...mapActions(useBoardStore, ["selectOrigin"]),
  },
};
</script>

<template>
  <transition name="slide" appear>
    <div
      class="piece-container"
      :class="{ selected: selected }"
      @click="selectOrigin(cell)"
    >
      <img class="piece" :src="`/_nuxt/assets/pieces/${type}_${color}.svg`" />
    </div>
  </transition>
</template>

<style scoped lang="scss">
.piece-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.selected {
    background-color: #65d6a7;
  }

  .piece {
    width: 100%;
    height: 100%;

    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
}

/* PIECES TRANSITIONS */
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  transition: all 0.4s ease;
}
</style>
