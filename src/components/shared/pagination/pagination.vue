<template>
  <div class="text-black">
    <base-layout>
      <template v-slot:main>
        <div>Data</div>
        <div v-for="(data, index) in randomUser" :key="index">
          {{ data.name }}
        </div>
        <div class="p-4">
          <div class="flex border border-2"></div>
        </div>
      </template>
    </base-layout>
  </div>
</template>

<script setup>
import BaseLayout from "@/components/layout/BaseLayout.vue";
import { computed, reactive, ref } from "@vue/runtime-core";
const tempPagination = reactive({
  results: 15,
  current_page: 1,
  per_page: 5,
});
const randomUser = reactive([]);
fetch("https://randomuser.me/api/?page=3&results=10&seed=abc", {
  headers: { "Content-type": "application/json" },
})
  .then((res) => res.json())
  .then((response) => {
    randomUser.push(response.results);
  })
  .catch((error) => {
    randomUser = error;
  });
const baseButton = computed(() => {
  let baseStyle = "";
  let isSelected = "text-white bg-[#3399fd]";
  let notSelected = " text-[#a8a8a8] bg-[#80b7ed]";
  return "text-center font-[900] p-2 px-5 mx-1 rounded-md" + notSelected;
});
</script>
<style>
</style>
