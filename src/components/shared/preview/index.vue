<template>
  <div class="mt-5">
    <label class="text-2xl">{{ label }}</label>
    <div>
      <base-layout>
        <template v-slot:main>
          <div class="text-white w-full bg-[#131925] rounded-md">
            <div class="p-5">
              <p class="text-6xl">{{ currencyType }}</p>
            </div>
            <hr />
            <div class="p-5">
              <h1>{{ currencyTypeDisplay }}</h1>
            </div>
          </div>
        </template>
      </base-layout>
    </div>
  </div>
</template>

<script setup>
import BaseLayout from "@/components/layout/BaseLayout.vue";
import { computed } from "@vue/runtime-core";
const props = defineProps({
  total: String,
  label: String,
  isDiscount: Boolean,
  isKhmerRiel: Boolean,
});
const currencyType = computed(() => {
  let tempTotal = null;
  if (props.isKhmerRiel) {
    tempTotal = parseInt(props.total) * 4100;
    return "៛ " + tempTotal;
  } else {
    return "$ " + props.total;
  }
});
const currencyTypeDisplay = computed(() => {
  return props.isKhmerRiel ? "Khmer Riel" : "Dollar";
});
</script>

<style>
</style>