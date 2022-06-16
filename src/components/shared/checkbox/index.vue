<template>
  <div class="px-3" v-for="(data, index) in options" :key="index">
    <input type="checkbox" v-model="setValue" :value="data.value" />
    <label class="px-1" :for="data.name">{{ data.name }}</label>
  </div>
</template>

<script setup>
const { computed } = require("@vue/runtime-core");

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: null,
  options: null,
});

const setValue = computed({
  get: () => {
    return props.modelValue;
  },
  set: (value) => {
    emit("update:modelValue", value);
  },
});
</script>
<style>
</style>