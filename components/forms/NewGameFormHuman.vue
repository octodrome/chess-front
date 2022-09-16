<script>
import { UserModule, HumanGameModule, BoardModule } from "~~/store";

export default {
  data() {
    return {
      selectedUserId: "",
    };
  },

  computed: {
    users() {
      return UserModule.users;
    },
  },

  methods: {
    cancel() {
      this.$emit("close");
    },

    start() {
      this.$emit("close");
      if (UserModule.user && this.selectedUserId) {
        HumanGameModule.createGame({
          guest: this.selectedUserId,
          hasToPlay: UserModule.user._id,
          moves: [],
        }).then((game) => {
          this.$emit("close");
          BoardModule.startNewGame("human");
          this.$router.push({ name: "HumanGame", params: { id: game._id } });
        });
      }
    },

    async created() {
      if (UserModule.user)
        await UserModule.getAllOpponents(UserModule.user._id);
    },
  },
};
</script>
  
<template>
  <v-card>
    <v-card-title class="headline"> New game VS human </v-card-title>

    <v-card-text>
      <div class="mt-0 mb-10">Choose your opponent among the players list.</div>

      <v-radio-group v-model="selectedUserId" label="Players :">
        <v-radio
          v-for="user in users"
          :key="user._id"
          :label="`${user.email}`"
          :value="user._id"
        />
      </v-radio-group>
    </v-card-text>

    <v-card-actions>
      <v-spacer />

      <v-btn color="blue-grey darken-3" text @click="cancel"> Cancel </v-btn>

      <v-btn
        color="blue-grey darken-3"
        class="white--text"
        :disabled="!selectedUserId"
        @click="start"
      >
        Start
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
