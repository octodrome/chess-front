<script>
import { mapState } from "pinia";
import { useUserStore } from "~/stores/userStore";

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
    ...mapState(useUserStore, ["user"]),
  },

  methods: {
    cancel() {
      this.$emit("close");
    },
  },
};
</script>

<template>
  <div>
    <h2 class="headline">My account</h2>

    <div>
      <div class="mt-0 mb-10">
        Add some information about you. This will be visible when other players
        choose to play with you.
      </div>

      <input v-model="user.email" label="Email" disabled />

      <input v-model="firstName" label="First name" />

      <input v-model="lastName" label="Last name" />

      <input v-model="age" label="Age" />

      <input v-model="bio" label="About me" />
    </div>

    <div>
      <hr />

      <button text @click="cancel()">Cancel</button>

      <button class="white--text">Confirm</button>
    </div>
  </div>
</template>
