<script setup lang="ts">
import { useUserStore } from "~/stores/userStore";

const firstName = ref("");
const lastName = ref("");
const age = ref("");
const bio = ref("");

const { user } = useUserStore()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const cancel = () => emit("close");
</script>

<template>
  <div>
    <h2 class="text-2xl">My account</h2>

    <div>
      <div class="mt-5 mb-5">
        Add some information about you. This will be visible when other players
        choose to play with you.
      </div>

      <BaseTextField type="text" v-model="user.email" label="Email" disabled />

      <BaseTextField type="text" v-model="firstName" label="First name" />

      <BaseTextField type="text" v-model="lastName" label="Last name" />

      <BaseTextField type="text" v-model="age" label="Age" />

      <BaseTextField type="text" v-model="bio" label="About me" />
    </div>

    <div class="flex justify-end">
      <BaseButton type="text" @click="cancel()" class="mr-2">Cancel</BaseButton>

      <BaseButton type="text">Confirm</BaseButton>
    </div>
  </div>
</template>
