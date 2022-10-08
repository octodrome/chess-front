<script setup lang="ts">
defineProps<{
  type?: string,
  modelValue?: string,
  label?: string,
  required?: boolean,
  disabled?: boolean,
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const uniqueName = ref(Date.now().toString())

const updateInput = (event) => emit("update:modelValue", event.target.value);
</script>

<template>
  <div class="mt-1 mb-1">
    <label v-if="label" :for="uniqueName" class="mb-1">{{ label }} :</label>

    <br />

    <input
      :id="uniqueName"
      :type="type"
      class="border border-solid border-slate-300 rounded"
      :value="modelValue"
      @input="updateInput"
      :required="required"
      :disabled="disabled"
    />
  </div>
</template>