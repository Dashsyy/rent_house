<template>
  <div class="px-7 py-3 bg-[#5b8ae6] inline rounded-[5px] hover:bg-[#2a4988]">
    <button class="my-5" @click="handleClick()">{{ name ?? "button" }}</button>
  </div>
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