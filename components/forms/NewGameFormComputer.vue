<script>
import { BoardModule, ComputerGameModule } from "~~/store";
import { IColor } from "@/services/localGame/localDB";
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

    playerColor() {
      return BoardModule.playerColor;
    },
  },

  methods: {
    cancel() {
      this.$emit("close");
    },

    start() {
      ComputerGameModule.createGame({
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
  <v-card>
    <v-card-title class="headline"> New game VS computer </v-card-title>

    <v-card-text>
      <div class="mt-0 mb-10">
        Set your new game choosing the level and which color you will play with.
      </div>

      <v-radio-group v-model="level" label="Choose your level :">
        <v-radio
          v-for="level in levels"
          :key="level.index"
          :label="`${level.name}`"
          :value="level.value"
        />
      </v-radio-group>

      <v-radio-group v-model="color" label="Choose your color :">
        <v-radio
          v-for="color in colors"
          :key="color.index"
          :label="`${color.name}`"
          :value="color.value"
        />
      </v-radio-group>
    </v-card-text>

    <v-card-actions>
      <v-spacer />

      <v-btn text color="blue-grey darken-3" @click="cancel()"> Cancel </v-btn>

      <v-btn color="blue-grey darken-3" class="white--text" @click="start()">
        Start
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
