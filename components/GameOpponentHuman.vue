<script>
import { mapState } from "pinia";
import { useHumanGameStore } from "~/stores/humanGameStore";
import Chat from "~/components/Chat.vue";

export default {
  components: {
    Chat,
  },

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
      <span color="blue-grey">mdi-account-circle</span>
      <h4 class="mx-3 blue-grey--text">{{ opponentPseudo }}</h4>
      <span color="blue-grey">mdi-message</span>
    </div>

    <div v-if="isOpponentDialogOpened" max-width="500">
      <Chat @close="isOpponentDialogOpened = false" />
    </div>
  </div>
</template>
