<template>
  <div
    :class="
      cssClassModifier
        ? cssClassModifier
        : cssClassModifier + 'bg-[#5b8ae6] hover:bg-[#2a4988]'
    "
  >
    <button type="button"  class="my-5" @click="handleClick()">
      {{ name ?? "button" }}
    </button>
  </div>
</template>

<script setup>
const { computed } = require("@vue/runtime-core");
const emit = defineEmits(["handleSubmit"]);
const data = defineProps({
  name: String,
  isDanger: Boolean,
  isDisable: Boolean,
});
const cssClassModifier = computed(() => {
  let baseStyle =
    "text-white font-semibold mx-1 px-[48px] py-3  inline rounded-[5px]  cursor-pointer";
  if (data.isDanger) {
    let bg = " bg-red-500 hover:bg-red-900";
    return baseStyle+bg;
  }
  else if (data.isDisable) {
    let bg = " bg-neutral-400";
    return baseStyle+bg;
  }else{
    return baseStyle + " bg-[#413df6] hover:bg-[#312eb8]";
  }
});
function handleClick() {
  emit("handleSubmit");
}
</script>

<style>
</style>