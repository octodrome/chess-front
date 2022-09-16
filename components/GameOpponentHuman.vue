<script>
import { HumanGameModule } from "~~/store";
import Chat from "@/components/Chat.vue";

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
    opponentPseudo() {
      return HumanGameModule.opponentPseudo;
    },
  },
};
</script>

<template>
  <div>
    <v-list-item class="pt-1 pb-3" link @click="isOpponentDialogOpened = true">
      <v-icon color="blue-grey">mdi-account-circle</v-icon>
      <h4 class="mx-3 blue-grey--text">{{ opponentPseudo }}</h4>
      <v-icon color="blue-grey">mdi-message</v-icon>
    </v-list-item>

    <v-dialog
      v-if="isOpponentDialogOpened"
      v-model="isOpponentDialogOpened"
      max-width="500"
    >
      <Chat @close="isOpponentDialogOpened = false" />
    </v-dialog>
  </div>
</template>
