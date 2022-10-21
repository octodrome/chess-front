<script setup lang="ts">
import { useUserStore } from "~/stores/userStore";
const userStore = useUserStore();

const email = ref("");
const password = ref("");

const emit = defineEmits<{
  (e: "close"): void;
}>();

const close = () => emit("close");

const signupUser = () => {
  const signupUserParams = {
    email: email.value,
    password: password.value,
  };

  userStore
    .signup(signupUserParams)
    .then(() => userStore.login(signupUserParams))
    .then(() => close());
};
</script>

<template>
  <BaseCardHeader title="Sign up" />

  <BaseCardMain
    text="Create your Vue chess account to play with anybody around the world. You already have an account ? Click here to log in."
  >
    <BaseTextField type="email" v-model="email" label="Email" />

    <BaseTextField
      type="password"
      v-model="password"
      label="Password"
      required
    />
  </BaseCardMain>

  <BaseCardFooter>
    <BaseButton type="text" @click="close()" class="mr-2">Cancel</BaseButton>

    <BaseButton type="text" @click="signupUser()">Confirm</BaseButton>
  </BaseCardFooter>
</template>
