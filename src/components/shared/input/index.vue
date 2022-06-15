<template>
  <div class="inline-block p-2">
    <div class="grid grid-cols-4 gap-2">
      <div class="col-span-4">
        <input
          :type="type ? type : 'text'"
          :placeholder="placeholder"
          :value="modelValue"
          class="
            text-black
            mt-1
            px-3
            py-2
            w-full
            bg-[#F1F3F5]
            placeholder-grey
            focus:outline
            outline-1 outline-cyan-500
            drop-shadow
            rounded-md
          "
          @input="$emit('update:modelValue', $event.target.value)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["change", "update:modelValue"]);
const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  prefix: String,
  suffix: String,
  type: String,
});
</script>

<style>
</style>