<template>
<h1>Yes</h1>
  <div v-for="(data, index) in options" :key="index">
    <input type="checkbox" :value="data.value" @input="$emit('update:modelValue', $event.target.value)"/>
    <label :for="data.name">{{ data.name }}</label>
  </div>
</template>

<script setup>
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: null,
  options: null,
});
function handleChange(value){
    emit['update:modelValue']
}
</script>
<style>
</style>