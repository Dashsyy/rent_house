<template>
  <base-layout>
    <template v-slot:main>
      <main class="p-5 text-white">
        <h1>Components:</h1>
        <Button name="Submit" @handleSubmit="greeting"/>
      </main>
      <div></div>
    </template>
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/components/layout/BaseLayout.vue";
function greeting(){
  console.log("greeting")
}
</script>
