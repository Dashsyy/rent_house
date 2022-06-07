<template>
  <base-layout>
    <template v-slot:main>
      <main class="p-5 text-white">
        <h1>Report</h1>
      </main>
    </template>
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/components/layout/BaseLayout.vue";
import { reactive } from "@vue/reactivity";

function handleClick(data){
  console.log(data)
}
</script>

<style>

</style>