<template>
  <div
    v-if="isVisible"
    class="
      h-full
      w-full
      top-0
      left-0
      fixed
      bg-gradient-to-r
      from-cyan-500/[0.6]
      to-blue-500/[0.6]
    "
  >
    <div>
      <base-layout class="fixed top-[40%] left-[50%] centered w-1/2 p-5">
        <template v-slot:main>
          <div class="flex justify-between">
            <h1 class="text-xl">{{ title ?? "..." }}</h1>
            <!-- <h1>x</h1> -->
          </div>
          <hr />
          <div class="py-3">
            <p>{{ content ?? "..." }}</p>
          </div>
          <hr />
          <div class="flex justify-center py-3">
            <div
              class="
                cursor-pointer
                inline-block
                px-[35px]
                py-1
                rounded-md
                text-white
                bg-[#2dcc25]
              "
            >
            {{isVisible}}
              <button>OK</button>
            </div>
          </div>
        </template>
      </base-layout>
    </div>
  </div>
</template>

<script setup>
import BaseLayout from "@/components/layout/BaseLayout.vue";
const emits = ["handleClick"];
const props = defineProps({
  isVisible: Boolean,
  title: String,
  content: String,
});
</script>

<style>
.centered {
  transform: translate(-50%, 0);
}
</style>