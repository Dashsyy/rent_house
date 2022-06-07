<template>
  <div class="px-7 py-3 bg-[#5b8ae6] inline rounded-[5px] hover:bg-[#2a4988] cursor-pointer">
    <button class="my-5" @click="handleClick()">{{ name ?? "button" }}</button>
  </div>
    <p>props estimate: background color(also when hover), cursorEvent </p>
    <br>
</template>

<script setup>
const emit = defineEmits(['handleSubmit'])
defineProps({
  name: String,
});
function handleClick(){
  emit('handleSubmit')
}
</script>

<style>
</style>