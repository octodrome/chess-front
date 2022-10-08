<script setup lang="ts">
defineProps<{
  optionList: [],
  optionLabel: string,
  optionValue: string,
  modelValue: string,
}>()

const uniqueName = ref(Date.now().toString())

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const updateInput = (event) => emit("update:modelValue", event.target.value);
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