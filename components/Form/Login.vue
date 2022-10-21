<script setup lang="ts">
import { useUserStore } from "~/stores/userStore";
import { useLayoutStore } from "~/stores/layoutStore";

const userStore = useUserStore();
const layoutStore = useLayoutStore();

const email = ref("");
const password = ref("");

const emit = defineEmits<{
  (e: "close"): void;
}>();

const close = () => emit("close");

const logUser = () => {
  userStore
    .login({ email: email.value, password: password.value })
    .then(() => close())
    .catch(() =>
      layoutStore.openSnackbarError("Adresse email ou mot de passe incorrect")
    );
};
</script>

<template>
  <BaseCardHeader title="Login" />

  <BaseCardMain
    text="Login to you Vue chess account to play with anybody around the world. You don't have an account yet ? Click here to sign up."
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

    <BaseButton type="text" @click="logUser()">Confirm</BaseButton>
  </BaseCardFooter>
</template>
