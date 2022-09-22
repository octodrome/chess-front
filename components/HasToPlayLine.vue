<script>
import { mapState } from "pinia";
import { useBoardStore } from "~/stores/boardStore";

export default {
  computed: {
    ...mapState(useBoardStore, ["hasToPlay"]),

    lineClasses() {
      return {
        "has-to-play": true,
        "has-to-play--white": this.color === "white",
        "has-to-play--black": this.color === "black",
        "has-to-play--checked": this.isChecked,
        "has-to-play--checkmated": this.isCheckMated,
      };
    },
  },

  props: {
    color: {
      type: String,
      required: true,
    },

    isChecked: {
      type: Boolean,
      required: false,
    },

    isCheckMated: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<template>
  <div v-if="hasToPlay === color" :class="lineClasses" />
</template>

<style scoped lang="scss">
.has-to-play {
  position: absolute;
  height: 5px;
  border-radius: 2.5px;
  opacity: 0.6;
  width: 100%;
  background-color: #65d6a7;
  filter: blur(1px);
  z-index: 0;

  &--black {
    top: -5px;
  }

  &--white {
    bottom: -5px;
  }

  &--checked {
    background-color: orange;
  }

  &--checkmated {
    background-color: red;
  }
}
</style>
