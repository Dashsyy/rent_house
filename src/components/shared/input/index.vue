<template>
  <div class="border inline-block p-2">
    <div class="grid grid-cols-5 gap-2">
      <div class="col-span-2 border">
        <label class="" :for="label">{{ label }}</label>
      </div>
      <div class="col-span-3">
        <input type="text">
        <!-- <input
          type="text"
          placeholder="Name"
          class="
            text-black
            mt-1
            px-3
            py-2
            border
            shadow-sm
            border-slate-300
            palceholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1
            block
            rounded-md
          "
        /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  prefix: String,
  suffix: String,
});
</script>

<style>
</style>