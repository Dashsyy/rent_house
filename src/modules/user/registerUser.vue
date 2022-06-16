<template>
  <!-- <div class="grid grid-cols-12"> -->
  <!-- input info -->
  <div class="col-span-7">
    <base-layout class="w-1/2">
      <template v-slot:main>
        <main class="px-[50px] pt-10 text-black">
          <div class="mb-[50px]">
            <h1 class="text-xl">Basic Info</h1>
            <Input
              v-model="data.basic_info.first_name"
              placeholder="First Name"
            />
            <Input
              v-model="data.basic_info.last_name"
              placeholder="Last Name"
            />
            <Input
              v-model="data.basic_info.previous_address"
              placeholder="Previous Address"
            />
            <Input
              v-model="data.basic_info.workPlace"
              placeholder="Work Place"
            />
            <Input
              v-model="data.basic_info.phoneNumber"
              placeholder="Phone Number"
            />
            <div class="mt-10">
              <div class="text-xl">Reference</div>
              <Input v-model="data.reference.name" placeholder="Personal Reference" />
              <Input v-model="data.reference.phoneNumber" placeholder="Phone Number" />
            </div>
            <div class="mt-10">
              <div class="text-xl">Medical condition</div>
              <CheckBox :options="checkboxOption" />
            </div>
          </div>
          <!-- <div class="mb-[50px]">
            <h1 class="text-xl">Payment</h1>
            <Radio>
              <label for="discount" class="font-bold text-rose-600 italic"
                >Discount rate: 15%</label
              >
            </Radio>
            <Input placeholder="Number of people" type="number" />
            <h1 class="text-xl">Moving In</h1>
            <div class="w-1/2 p-3">
              <Datepicker v-model="date" placeholder="Select Moving Date" />
            </div>
          </div> -->
          <h1 class="text-xl">Received By</h1>
          <Input placeholder="Name" />
          <Input placeholder="Phone Number" />
          <div class="w-2/3 p-2">
            <Datepicker v-model="date" placeholder="Receive the document" />
          </div>
          <div class="border border-8 border-orange-500 rounded-md">
            <!-- <div class="w-full py-3 bg-[#030303]"></div> -->
            <div class="p-5">
              <CardPreview label="You need to pay in dollar" total="10" />
              <CardPreview
                label="You need to pay in khmer riel"
                total="10"
                isKhmerRiel
              />
            </div>
          </div>
          <div class="flex justify-center">
            <div>
              <Button name="Submit" />
            </div>
          </div>
        </main>
      </template>
    </base-layout>
  </div>
  <!-- preview info -->
  <!-- <div class="col-span-5">
      <base-layout>
      </base-layout>
    </div> -->
  <!-- </div> -->
</template>

<script setup>
import BaseLayout from "@/components/layout/BaseLayout.vue";
import { reactive, ref } from "vue";

const date = ref();
const data = reactive({
  basic_info: {
    first_name: null,
    last_name: null,
    previous_address: null,
    workPlace: null,
    phoneNumber: null,
  },
  reference: {
    name: null,
    phoneNumber: null,
  },
});
const checkboxOption = reactive([
  { name: "Blood Pressure", value: "Option 1" },
  { name: "Stroke", value: "Stroke" },
]);
</script>

<style>
</style>