<script setup lang="ts">
defineProps<{
  optionList: { name: string; value: string | number }[];
  optionLabel: string;
  optionValue: string | number;
  modelValue: string | number;
}>();

const unique = ref(Date.now().toString());

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const updateInput = (event) => emit("update:modelValue", event.target.value);
</script>

<template>
  <div v-for="option in optionList" :key="option.value" class="mt-1 mb-1">
    <input
      type="radio"
      @change="updateInput"
      :value="option[optionValue]"
      :id="option[optionValue]"
      :name="unique"
    />
    <label :for="option[optionValue]">{{ option[optionLabel] }}</label>
  </div>
</template>