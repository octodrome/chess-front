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
    <div class="flex" link @click="isOpponentDialogOpened = true">
      <BaseIcon color="blue-grey" name="account-circle" />

      <h4 class="mx-3 blue-grey--text">{{ opponentPseudo }}</h4>

      <BaseIcon color="blue-grey" name="message" />
    </div>

    <div v-if="isOpponentDialogOpened" max-width="500">
      <Chat @close="isOpponentDialogOpened = false" />
    </div>
  </div>
</template>
