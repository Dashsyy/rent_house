<template>
  <base-layout>
    <template v-slot:main>
      <main class="p-5">
        <label for="summary">
          <h1 class="text-black">Components:</h1>
        </label>
        <Dialog
          title="Sucess"
          content="You have sucessfully create new user"
        />
        <button class="bg-blue-300 px-5 rounded-md" @click="handleClick">Click</button>
        <!-- <TableView :items="[headerData, tableData]" /> -->
      </main>
    </template>
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/components/layout/BaseLayout.vue";
import { reactive, ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
let isVisible = ref(null);
const headerData = reactive([
  {
    id: "id",
    name: "name",
    room_number: "Room number",
    due_date: "Due date",
  },
]);
const tableData = reactive([
  {
    id: 1,
    name: "Sunhour",
    room: "10",
    due_date: "13 September 2022",
  },
]);
const option = ref(["January", "Feburary", "Match", "Aprial"]);
function handleClick() {
  isVisible = !isVisible;
  console.log(isVisible)
}
</script>
