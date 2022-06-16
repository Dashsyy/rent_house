<template>
  <label :for="label">{{ label }}</label>
  <select
    class="mx-2 p-1 px-3 py-2 rounded-md"
    :name="label"
    id="label"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <option value="" disabled selected>Select your option</option>
    <option v-for="item in data" :key="item" :value="item">
      {{ item }}
    </option>
  </select>
</template>

<script setup>
const emit = defineEmits(["change", "update:modelValue"]);

const dataProps = defineProps({
  data: null,
  modelValue: null,
  label: String,
});
</script>

<style>
</style>