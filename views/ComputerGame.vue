<script>
import { mapActions } from "pinia";
import { useComputerGameStore } from "~/stores/computerGameStore";
import BoardContainer from "@/components/BoardContainer.vue";

export default {
  components: {
    BoardContainer,
  },

  mounted() {
    this.joinGame(this.$route.params.id);
  },

  methods: {
    ...mapActions(useComputerGameStore, ["getGame"]),
  },

  watch: {
    $route(newValue) {
      this.getGame(newValue.params.id);
    },
  },
};
</script>

<template>
  <BoardContainer />
</template>
