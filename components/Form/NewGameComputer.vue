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

      Choose your level :
      <BaseRadioGroup
        :option-list="levels"
        option-label="name"
        option-value="value"
      />

      Choose your color :
      <BaseRadioGroup
        :option-list="colors"
        option-label="name"
        option-value="value"
      />
    </div>

    <div class="flex justify-end">
      <BaseButton type="text" @click="cancel()" class="mr-2">Cancel</BaseButton>

      <BaseButton type="text" @click="start()">Start</BaseButton>
    </div>
  </div>
</template>
