<template>
  <label :for="label">{{ label }}</label>
  <select class="mx-2 bg-blue-900 p-1 rounded-md" :name="label" id="label">
    <option value="" disabled selected>Select your option</option>
    <!-- <option
      v-for="item in option"
      :key="item"
      :value="item"
      @click="handleClick(item)"
    >
      {{ item }}
    </option> -->
  </select>
</template>

<script setup>
const { reactive } = require("@vue/reactivity");
const { computed } = require("@vue/runtime-core");

const emit = defineEmits(["handleClick"]);

const dataProps = defineProps({
  label: String,
  data: Object,
});
function handleClick() {
  emit("handleClick");
}
</script>

<style>
</style>