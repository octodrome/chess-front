<script>
import { mapActions } from "pinia";
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
        console.log("game", game);
        navigateTo({
          path: `/ComputerGame/${game.id}`,
        });
      });
    },
  },
};
</script>
  

<template>
  <div>
    <h2 class="text-2xl">New game VS computer</h2>

    <div>
      <div class="mt-5 mb-5">
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

    <div class="flex justify-end">
      <button @click="cancel()">Cancel</button>

      <button @click="start()">Start</button>
    </div>
  </div>
</template>
