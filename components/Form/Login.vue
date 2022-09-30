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
    <h2 class="text-2xl">Login</h2>

    <div>
      <div class="mt-5 mb-5">
        Login to you Vue chess account to play with anybody around the world.
        You don't have an account yet ? Click <a>here</a> to sign up.
      </div>

      <BaseTextField type="email" v-model="email" label="Email" />

      <BaseTextField
        type="password"
        v-model="password"
        label="Password"
        required
      />
    </div>

    <div class="flex justify-end">
      <button @click="close()">Cancel</button>

      <button @click="logUser()">Confirm</button>
    </div>
  </div>
</template>
