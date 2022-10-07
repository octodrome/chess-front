<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "~/stores/userStore";
import { useHumanGameStore } from "~/stores/humanGameStore";
import services from "@/services";
// @TODO init board from human game id

export default {
  computed: {
    ...mapState(useUserStore, ["user"]),
  },

  watch: {
    user() {
      this.joinGame(this.$route.params.id);
    },

    $route(newValue, oldValue) {
      this.leaveGame(oldValue.params.id);
      this.joinGame(newValue.params.id);
    },
  },

  mounted() {
    this.joinGame(this.$route.params.id);
  },

  methods: {
    ...mapActions(useHumanGameStore, ["getGame"]),

    joinGame(gameId) {
      console.log("joining human game:", gameId);
      this.getGame(gameId);
      if (this.user) {
        services.socket.joinGame({
          gameId: gameId,
          userId: this.user.email,
        });
      }
    },

    leaveGame(gameId) {
      console.log("leaving human game:", gameId);
      if (this.user) {
        services.socket.leaveGame({
          gameId: gameId,
          userId: this.user.email,
        });
      }
    },
  },
};
</script>

<template>
  <BoardContainer />
</template>
