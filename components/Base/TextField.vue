<script>
export default {
  data() {
    return {
      newValue: "",
    };
  },

  props: {
    type: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },

  mounted() {
    this.newValue = this.value;
  },

  watch: {
    value: function () {
      this.$emit("input", value);
    },
  },
};
</script>

<template>
  <div class="mt-1 mb-1">
    <label v-if="label" for="base-input" class="mb-1">{{ label }} :</label>

    <br />

    <input
      id="base-input"
      :type="type"
      class="border border-solid border-slate-300 rounded"
      value=""
      :required="required"
      :disabled="disabled"
    />
  </div>
</template>