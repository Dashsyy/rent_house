<template>
  <base-layout>
    <template v-slot:main>
      <main class="p-5 text-white">
        <label for="">
          <h1>Components:</h1>
        </label>
        <!-- <Button name="Submit" @handleSubmit="greeting" /> -->
        <!-- <Button name="Danger" isDanger @handleSubmit="greeting" /> -->
        <!-- <Button name="Disable" isDisable @handleSubmit="greeting" /> -->
        <div class="grid grid-cols-12">
          {{ data }}
          <div class="col-span-1"></div>
          <div class="grid grid-rows-3 inline col-span-10">
            <Input
              v-model="data"
              label="Name"
              placeholder="Name"
              prefix="prefix"
              suffix="suffix"
            />
            <Input
              v-model="data"
              label="Room"
              placeholder="Room"
              prefix="prefix"
              suffix="suffix"
            />
            <Input
              label="Due Date"
              placeholder="Due Date"
              prefix="prefix"
              suffix="suffix"
            />
          </div>
          <div class="col-span-1"></div>
        </div>
        <!-- <Radio/> -->
        <!-- <Select label="Select Option" v-model="option"/> -->
        <!-- <TableView :items="[headerData, tableData]" /> -->
      </main>
      <div></div>
    </template>
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/components/layout/BaseLayout.vue";
import { reactive, ref } from "@vue/reactivity";
let data = ref("hello");
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
const option = reactive([1, 2, 3, 4]);
</script>
