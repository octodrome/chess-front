<script>
import { mapState } from "pinia";
import { useHumanGameStore } from "~/stores/humanGameStore";

export default {
  data() {
    return {
      isOpponentDialogOpened: false,
    };
  },

  computed: {
    ...mapState(useHumanGameStore, ["opponentPseudo"]),
  },
};
</script>

<template>
  <div>
    <div class="pt-1 pb-3" link @click="isOpponentDialogOpened = true">
      <span color="blue-grey" class="mdi mdi-account-circle"></span>
      <h4 class="mx-3 blue-grey--text">{{ opponentPseudo }}</h4>
      <span color="blue-grey" class="mdi mdi-message"></span>
    </div>

    <div v-if="isOpponentDialogOpened" max-width="500">
      <Chat @close="isOpponentDialogOpened = false" />
    </div>
  </div>
</template>
