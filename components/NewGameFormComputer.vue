<script>
import { mapState, mapActions } from "pinia";
import { useBoardStore } from "~/stores/boardStore";
import { useComputerGameStore } from "~/stores/computerGameStore";
// @TODO make computer level work

export default {
  data() {
    return {
      levels: [
        {
          name: "Easy",
          value: 1,
        },
        {
          name: "Medium",
          value: 2,
        },
        {
          name: "Hard",
          value: 3,
        },
      ],
      color: "white",
      colors: [
        {
          name: "White",
          value: "white",
        },
        {
          name: "Black",
          value: "black",
        },
      ],
    };
  },

  computed: {
    ...mapState(useBoardStore, ["playerColor"]),

    computerLevel() {
      return 1;
      // return StockfishModule.computerLevel;
    },

    level: {
      get() {
        return this.computerLevel;
      },

      set(value) {
        // StockfishModule.setComputerLevel(value);
      },
    },
  },

  methods: {
    ...mapActions(useComputerGameStore, ["createGame"]),

    cancel() {
      this.$emit("close");
    },

    start() {
      this.createGame({
        playerColor: this.color,
        computerLevel: this.computerLevel,
      }).then((game) => {
        this.$emit("close");
        this.$router.push({ name: "ComputerGame", params: { id: game.id } });
      });
    },
  },
};
</script>
  

<template>
  <div>
    <h2 class="headline">New game VS computer</h2>

    <div>
      <div class="mt-0 mb-10">
        Set your new game choosing the level and which color you will play with.
      </div>

      <label>
        Choose your level :
        <input
          type="radio"
          v-for="level in levels"
          :key="level.index"
          :label="`${level.name}`"
          :value="level.value"
        />
      </label>

      <label>
        Choose your color :
        <input
          v-for="color in colors"
          :key="color.index"
          :label="`${color.name}`"
          :value="color.value"
        />
      </label>
    </div>

    <div>
      <hr />

      <button text color="blue-grey darken-3" @click="cancel()">Cancel</button>

      <button color="blue-grey darken-3" class="white--text" @click="start()">
        Start
      </button>
    </div>
  </div>
</template>
