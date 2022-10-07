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

    signupUser() {
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
    <h2 class="text-2xl">Sign up</h2>

    <div>
      <div class="mt-5 mb-5">
        Create your Vue chess account to play with anybody around the world. You
        already have an account ? Click <a>here</a> to log in.
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
      <BaseButton type="text" @click="close()" class="mr-2">Cancel</BaseButton>

      <BaseButton type="text" @click="signupUser()">Confirm</BaseButton>
    </div>
  </div>
</template>
