<template>
  <base-layout>
    <template v-slot:main>
      <main class="p-5 text-white">
        <label for="summary">
          <h1 class="text-black">Components:</h1>
        </label>
        <!-- <Button name="Submit" @handleSubmit="greeting" />
        <Button name="Danger" isDanger @handleSubmit="greeting" />
        <Button name="Disable" isDisable @handleSubmit="greeting" /> -->
        <!-- <div class="grid grid-cols-12">
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
        </div> -->
        <!-- <Radio/> -->
        <!-- <TableView :items="[headerData, tableData]" /> -->
        <!-- <Pagination /> -->
        <div class="text-black">
          <CheckBox :options="checkboxOption" v-model="data" />
          {{ data }}
        </div>
      </main>
      <div></div>
    </template>
  </base-layout>
</template>

<script setup>
import BaseLayout from "@/components/layout/BaseLayout.vue";
import { reactive, ref } from "@vue/reactivity";
let data = ref([]);
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
const checkboxOption = reactive([
  { name: "Option 1", value: "Option 1" },
  { name: "Option 2", value: "Option 2" },
]);
</script>
