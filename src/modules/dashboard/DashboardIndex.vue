<template>
  <base-layout>
    <template v-slot:main>
      <main class="p-5 text-white">
        <label for="">
          <h1>Components:</h1>
        </label>
        <!-- <Button name="Submit" @handleSubmit="greeting" /> -->
        <div class="flex">
          <Input label="Name" prefix="prefix" suffix="suffix" />
          <!-- <Input label="Room" prefix="prefix" suffix="suffix" /> -->
          <!-- <Input label="Due Date" prefix="prefix" suffix="suffix" /> -->
        </div>
        <!-- <TableView :items="[headerData, tableData]" /> -->
      </main>
      <div></div>
    </template>
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/components/layout/BaseLayout.vue";
import { reactive } from "@vue/reactivity";
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
  {
    id: 2,
    name: "Sunhour",
    room: "11",
    due_date: "13 September 2022",
  },
]);
function greeting() {
  console.log("greeting");
}
</script>
