<template>
  <BoardContainer />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BoardContainer from "@/components/BoardContainer.vue";
import { BoardModule } from "@/store/modules";

@Component<EmptyGame>({
  components: {
    BoardContainer,
  },
})
export default class EmptyGame extends Vue {
  mounted(): void {
    // @TODO empty captured pieces
    BoardModule.initEmptyBoard();
  }
}
</script>
