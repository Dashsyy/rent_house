<template>
  <div class="mx-[60px]">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="
        flex flex-row
        justify-between
        inline-block
        border
        bg-[#c4e0fb]/[0.9]
        text-black
        capitalize
        mt-1
        py-4
        px-5
        rounded-md
      "
    >
      <div>
        <input
          type="radio"
          :name="name"
          :value="item.value"
          class="scale-[1.5]"
        />
        <label class="px-4">{{ item.label }}</label>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
const { ref, reactive } = require("@vue/reactivity");

const props = defineProps({
  data: null,
  modelValue: null,
  label: String,
  name: String,
});
</script>

<style>
</style>