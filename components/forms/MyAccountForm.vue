<script>
import { UserModule } from "~~/store";
import { IUser } from "@/types/user";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      age: "",
      bio: "",
    };
  },

  computed: {
    user() {
      return UserModule.user;
    },
  },

  methods: {
    cancel() {
      this.$emit("close");
    },
  },
};
</script>

<template>
  <v-card>
    <v-card-title class="headline"> My account </v-card-title>

    <v-card-text>
      <div class="mt-0 mb-10">
        Add some information about you. This will be visible when other players
        choose to play with you.
      </div>

      <v-text-field v-model="user.email" label="Email" disabled />

      <v-text-field v-model="firstName" label="First name" />

      <v-text-field v-model="lastName" label="Last name" />

      <v-text-field v-model="age" label="Age" />

      <v-textarea v-model="bio" label="About me" />
    </v-card-text>

    <v-card-actions>
      <v-spacer />

      <v-btn text color="blue-grey darken-3" @click="cancel()"> Cancel </v-btn>

      <v-btn color="blue-grey darken-3" class="white--text"> Confirm </v-btn>
    </v-card-actions>
  </v-card>
</template>
