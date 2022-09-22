<template>
  <BoardContainer />
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import { UserModule, HumanGameModule } from "@/store/modules";
import services from "@/services";
import { IUser } from "@/types/user";
import { IHumanGame } from "@/types/humanGame";
import BoardContainer from "@/components/BoardContainer.vue";

// @TODO init board from human game id

@Component<HumanGame>({
  components: {
    BoardContainer,
  },
})
export default class HumanGame extends Vue {
  get user(): IUser | null {
    return UserModule.user;
  }

  get game(): IHumanGame | null {
    return HumanGameModule.currentGame;
  }

  @Watch("user")
  onUserChange(): void {
    this.joinGame(this.$route.params.id);
  }

  @Watch("$route")
  onRouteChange(newValue: Route, oldValue: Route): void {
    this.leaveGame(oldValue.params.id);
    this.joinGame(newValue.params.id);
  }

  mounted(): void {
    this.joinGame(this.$route.params.id);
  }

  joinGame(gameId: string): void {
    console.log("joining human game:", gameId);
    HumanGameModule.getGame(gameId);
    if (this.user) {
      services.socket.joinGame({
        gameId: gameId,
        userId: this.user.email,
      });
    }
  }

  leaveGame(gameId: string): void {
    console.log("leaving human game:", gameId);
    if (this.user) {
      services.socket.leaveGame({
        gameId: gameId,
        userId: this.user.email,
      });
    }
  }
}
</script>
