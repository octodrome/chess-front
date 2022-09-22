<script>
import { mapActions } from "pinia";
import { useUserStore } from "~/stores/userStore";

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
    ...mapActions(useUserStore, ["signup", "login"]),

    close() {
      this.$emit("close");
    },

    signup() {
      const signupUserParams = {
        email: this.email,
        password: this.password,
      };

      this.signup(signupUserParams).then(() => {
        this.login(signupUserParams).then(() => {
          this.close();
        });
      });
    },
  },
};
</script>

<template>
  <div>
    <h2 class="headline">Sign up</h2>

    <div>
      <div class="mt-0 mb-10">
        Create your Vue chess account to play with anybody around the world. You
        already have an account ? Click <a>here</a> to log in.
      </div>

      <input type="email" v-model="email" label="Email" />

      <input
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
    </div>

    <div>
      <hr />

      <button color="blue-grey darken-3" text @click="close()">Cancel</button>

      <button color="blue-grey darken-3" class="white--text" @click="signup()">
        Confirm
      </button>
    </div>
  </div>
</template>
