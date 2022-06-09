<template>
  <div class=" mx-[60px]">
    <div
      v-for="item in data"
      :key="item"
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
        <input type="radio" :value="item" class="scale-[1.5]" />
        <label class="px-4">{{ item }}</label>
      </div>
      <div>100$/year</div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
const { ref, reactive } = require("@vue/reactivity");

const menu = reactive([
  {
    isBorder: true,
    colorSelected: "#d5bbf8",
    colorNotSelected: "#dddddd",
  },
]);
const data = ref(["One month", "Two_Month"]);
</script>

<style>
</style>