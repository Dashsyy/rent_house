<template>
  <base-layout>
    <template v-slot:main>
      <main class="p-5 text-white">
        <label for="">
          <h1>Components:</h1>
        </label>
        <!-- <Button name="Submit" @handleSubmit="greeting" /> -->
        <!-- <div class="grid grid-cols-12">
          <div class="col-span-1"></div>
          <div class="grid grid-rows-3 inline col-span-10">
            <Input label="Name" placeholder="Name" prefix="prefix" suffix="suffix" />
            <Input label="Room" placeholder="Room" prefix="prefix" suffix="suffix" />
            <Input label="Due Date" placeholder="Due Date" prefix="prefix" suffix="suffix" />
          </div>
          <div class="col-span-1"></div>
        </div> -->

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
