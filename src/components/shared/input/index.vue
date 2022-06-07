<template>
  <div class="border inline-block p-2">
    <div class="grid grid-cols-4 gap-2">
      <div class="col-span-1 text-left">
        <label class="text-black" :for="label">{{ label }}</label>
      </div>
      <div class="col-span-3">
        <input
          type="text"
          :placeholder="placeholder"
          class="
            text-black
            text-xl
            mt-1
            px-3
            py-2
            w-full
            border
            placeholder-black
            focus:outline  outline-5 outline-cyan-500
            rounded-md
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  placeholder:String,
  prefix: String,
  suffix: String,
});
</script>

<style>
</style>