<script setup lang="ts">
import { useUserStore } from "~/stores/userStore";
const { signup, login } = useUserStore();

const email = ref("");
const password = ref("");

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => emit("close");

const signupUser = () => {
  const signupUserParams = {
    email: email.value,
    password: password.value,
  };

  signup(signupUserParams)
    .then(() => login(signupUserParams))
    .then(() => close());
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
