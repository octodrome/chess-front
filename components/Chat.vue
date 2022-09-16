<script>
import moment from "moment";
import { HumanGameModule, UserModule } from "~~/store";
import services from "@/services";

export default {
  data() {
    return {
      messageContent: "",
    };
  },

  methods: {
    close() {
      this.$emit("close");
    },
  },

  computed: {
    isMessageEmpty() {
      return this.messageContent.trim().length === 0;
    },

    createdAt() {
      if (this.opponent) return moment(this.opponent.createdAt).fromNow();
      return "";
    },

    email() {
      if (this.opponent) return this.opponent.email;
      return "";
    },

    opponent() {
      return HumanGameModule.opponent;
    },

    isUserMessage() {
      return (message) => {
        if (this.opponent) return message.from !== this.opponent.email;
        return false;
      };
    },

    messages() {
      if (HumanGameModule.currentGame) {
        return HumanGameModule.currentGame.messages;
      }
      return [];
    },
  },

  methods: {
    sendMessage() {
      if (UserModule.user && !this.isMessageEmpty) {
        services.socket.sendMessage({
          from: UserModule.user.email,
          content: this.messageContent,
        });
        this.messageContent = "";
      }
    },
  },

  mounted() {
    HumanGameModule.getGame(this.$route.params.id);
  },
};
</script>

<template>
  <v-card>
    <v-card-title class="headline">{{ opponent.email }}</v-card-title>

    <v-card-text class="d-flex flex-column">
      <div class="mt-0 mb-10">Registered {{ createdAt }}</div>

      <div
        v-for="message in messages"
        :key="message._id"
        class="message"
        :class="{
          'is-right': isUserMessage(message),
          'is-left': !isUserMessage(message),
          'align-self-end': isUserMessage(message),
        }"
      >
        {{ message.content }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-text-field
        v-model="messageContent"
        label="Your message"
        outlined
        dense
        hide-details="auto"
        class="mr-2"
        @keyup.enter="sendMessage()"
      ></v-text-field>

      <v-btn
        color="blue-grey darken-3"
        :disabled="isMessageEmpty"
        @click="sendMessage()"
      >
        <v-icon color="white">mdi-send</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.message {
  width: 70%;
  margin-top: 1px;
  padding: 2px 6px 2px 6px;
}
.is-right {
  text-align: right;
  background-color: #607d8b;
  color: white;
  border-radius: 8px 8px 0 8px;
}
.is-left {
  background-color: #d5d5d5;
  border-radius: 8px 8px 8px 0;
}
/* Add a space between groups of same user messages */
.is-right + .is-left,
.is-left + .is-right {
  margin-top: 4px;
}
</style>
