<script>
import { mapState, mapActions } from "pinia";
import { useHumanGameStore } from "~/stores/humanGameStore";
import { useUserStore } from "~/stores/userStore";
import moment from "moment";
import services from "~/services";

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
    ...mapState(useHumanGameStore, ["opponent", "currentGame"]),

    ...mapState(useUserStore, ["user"]),

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

    isUserMessage() {
      return (message) => {
        if (this.opponent) return message.from !== this.opponent.email;
        return false;
      };
    },

    messages() {
      if (this.currentGame) {
        return this.currentGame.messages;
      }
      return [];
    },
  },

  methods: {
    ...mapActions(useHumanGameStore, ["getGame"]),

    sendMessage() {
      if (this.user && !this.isMessageEmpty) {
        services.socket.sendMessage({
          from: this.user.email,
          content: this.messageContent,
        });
        this.messageContent = "";
      }
    },
  },

  mounted() {
    this.getGame(this.$route.params.id);
  },
};
</script>

<template>
  <div>
    <h2 class="headline">{{ opponent.email }}</h2>

    <div class="d-flex flex-column">
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
    </div>

    <div>
      <input
        v-model="messageContent"
        label="Your message"
        outlined
        dense
        hide-details="auto"
        class="mr-2"
        @keyup.enter="sendMessage()"
      />

      <button
        color="blue-grey darken-3"
        :disabled="isMessageEmpty"
        @click="sendMessage()"
      >
        <div color="white">mdi-send</div>
      </button>
    </div>
  </div>
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
