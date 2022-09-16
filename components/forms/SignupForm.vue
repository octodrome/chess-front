<script>
import { UserModule } from "~~/store";

export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
    };
  },

  methods: {
    close() {
      this.$emit("close");
    },

    signup() {
      const signupUserParams = {
        email: this.email,
        password: this.password,
      };

      UserModule.signup(signupUserParams).then(() => {
        UserModule.login(signupUserParams).then(() => {
          this.close();
        });
      });
    },
  },
};
</script>
  

<template>
  <v-card>
    <v-card-title class="headline"> Sign up </v-card-title>

    <v-card-text>
      <div class="mt-0 mb-10">
        Create your Vue chess account to play with anybody around the world. You
        already have an account ? Click <a>here</a> to log in.
      </div>

      <v-text-field v-model="email" label="Email" />

      <v-text-field
        v-model="password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="showPassword ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="showPassword = !showPassword"
      />
    </v-card-text>

    <v-card-actions>
      <v-spacer />

      <v-btn color="blue-grey darken-3" text @click="close()"> Cancel </v-btn>

      <v-btn color="blue-grey darken-3" class="white--text" @click="signup()">
        Confirm
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
