<script>
import { mapActions } from "pinia";
import { useUserStore } from "~/stores/userStore";
import { useSnackbarStore } from "~/stores/snackbarStore";

export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
    };
  },

  methods: {
    ...mapActions(useUserStore, ["login"]),
    ...mapActions(useSnackbarStore, ["displayError"]),

    close() {
      this.$emit("close");
    },

    logUser() {
      const loginUserParams = {
        email: this.email,
        password: this.password,
      };

      this.login(loginUserParams)
        .then(() => {
          this.close();
        })
        .catch(() => {
          this.displayError("Adresse email ou mot de passe incorrect");
        });
    },
  },
};
</script>

<template>
  <div>
    <h2 class="headline">Login</h2>

    <div>
      <div class="mt-0 mb-10">
        Login to you Vue chess account to play with anybody around the world.
        You don't have an account yet ? Click <a>here</a> to sign up.
      </div>

      <input type="email" v-model="email" label="Email" />

      <input
        v-model="password"
        :type="showPassword ? 'text' : 'password'"
        label="Password"
        @click:append="showPassword = !showPassword"
      />
    </div>

    <div>
      <hr />

      <button text @click="close()">Cancel</button>

      <button class="white--text" @click="logUser()">Confirm</button>
    </div>
  </div>
</template>
