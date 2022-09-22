<template>
  <BoardContainer />
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import BoardContainer from "@/components/BoardContainer.vue";
import { ComputerGameModule } from "@/store/modules";

@Component<ComputerGame>({
  components: {
    BoardContainer,
  },
})
export default class ComputerGame extends Vue {
  mounted(): void {
    this.joinGame(this.$route.params.id);
  }

  @Watch("$route")
  onRouteChange(newValue: Route): void {
    this.joinGame(newValue.params.id);
  }

  joinGame(gameId: string): void {
    console.log("joining computer game:", gameId);
    ComputerGameModule.getGame(gameId);
  }
}
</script>
