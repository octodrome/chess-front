<script>
import { mapState, mapActions } from "pinia";
import { useUserStore } from "~/stores/userStore";
import { useHumanGameStore } from "~/stores/humanGameStore";
import { useBoardStore } from "~/stores/boardStore";

export default {
  data() {
    return {
      selectedUserId: "",
    };
  },

  computed: {
    ...mapState(useUserStore, ["users", "user"]),
  },

  methods: {
    ...mapActions(useUserStore, ["getAllOpponents"]),
    ...mapActions(useHumanGameStore, ["createGame"]),
    ...mapActions(useBoardStore, ["startNewGame"]),

    cancel() {
      this.$emit("close");
    },

    start() {
      this.$emit("close");
      if (this.user && this.selectedUserId) {
        this.createGame({
          guest: this.selectedUserId,
          hasToPlay: this.user._id,
          moves: [],
        }).then((game) => {
          this.$emit("close");
          this.startNewGame("human");
          navigateTo({
            path: `/HumanGame/${game._id}`,
          });
          // this.$router.push({ path: "/HumanGame", params: { id: game._id } });
        });
      }
    },
  },

  async mounted() {
    if (this.user) await this.getAllOpponents(this.user._id);
  },
};
</script>
  
<template>
  <div>
    <h2 class="text-2xl">New game VS human</h2>

    <div>
      <div class="mt-5 mb-5">Choose your opponent among the players list.</div>

      Players :
      <BaseRadioGroup
        :option-list="users"
        v-model="selectedUserId"
        option-label="email"
        option-value="_id"
      />
    </div>

    <div class="flex justify-end">
      <BaseButton text @click="cancel" class="mr-2">Cancel</BaseButton>

      <BaseButton text :disabled="!selectedUserId" @click="start">
        Start
      </BaseButton>
    </div>
  </div>
</template>
