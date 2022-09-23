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

    async created() {
      if (this.user) await this.getAllOpponents(this.user._id);
    },
  },
};
</script>
  
<template>
  <div>
    <h2 class="headline">New game VS human</h2>

    <div>
      <div class="mt-0 mb-10">Choose your opponent among the players list.</div>

      <label>
        Players :
        <input
          type="radio"
          v-for="user in users"
          :key="user._id"
          :label="`${user.email}`"
          :value="user._id"
        />
      </label>
    </div>

    <div>
      <hr />

      <button color="blue-grey darken-3" @click="cancel">Cancel</button>

      <button
        color="blue-grey darken-3"
        class="white--text"
        :disabled="!selectedUserId"
        @click="start"
      >
        Start
      </button>
    </div>
  </div>
</template>
