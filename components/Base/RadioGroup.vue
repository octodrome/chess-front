<script>
export default {
  data() {
    return {
      newValue: "",
      uniqueName: Date.now(),
    };
  },

  props: {
    optionList: {
      type: Array,
      required: true,
    },

    optionLabel: {
      type: String,
      required: true,
    },

    optionValue: {
      type: String,
      required: true,
    },

    modelValue: {
      type: String,
      required: false,
    },
  },

  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<template>
  <div v-for="option in optionList" :key="option" class="mt-1 mb-1">
    <input
      type="radio"
      @change="updateInput"
      :value="option[optionValue]"
      :id="option[optionValue]"
      :name="uniqueName"
    />
    <label :for="option[optionValue]">{{ option[optionLabel] }}</label>
  </div>
</template>