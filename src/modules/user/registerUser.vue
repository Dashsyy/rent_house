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
              Iv-model="data.basic_info.last_name"
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
            <div class="mt-10 mb-[50px]">
              <div class="text-xl">Reference</div>
              <Input
                v-model="data.reference.name"
                placeholder="Personal Reference"
              />
              <Input
                v-model="data.reference.phoneNumber"
                placeholder="Phone Number"
              />
            </div>
            <!-- <div class="mt-10">
              <div class="text-xl">Medical condition</div>
              <CheckBox v-model="data.medical_condition" :options="checkboxOption" />
            </div> -->
          </div>
          <div class="mb-[50px]">
            <h1 class="text-xl">Moving In</h1>
            <Input
              v-model="data.moving_in.number_of_people"
              placeholder="Number of people"
              type="number"
            />
            <div class="text-2xl">
              Expect user moving in
              <base-layout class="bg-[#1a53ff] text-white">
                <template v-slot:main>
                  <p class="p-3">
                    {{
                      data.moving_in.date_moving_in
                        ? data.moving_in.date_moving_in
                        : "Not select yet"
                    }}
                  </p>
                </template>
              </base-layout>
            </div>
            <div class="inline-block">
              <Datepicker
                v-model="data.moving_in.date_moving_in"
                placeholder="Select Moving Date"
                format="dd/MM/yyyy"
                :minDate="new Date()"
                autoApply
              />
            </div>
          </div>
          <h1 class="text-xl">Received By</h1>
          <Input placeholder="Name" />
          <Input placeholder="Phone Number" />
          <div class="w-2/3 p-2">
            <Datepicker
              v-model="data.moving_in.date_moving_in"
              placeholder="Receive the document"
              format="dd/MM/yyyy"
              :minDate="new Date()"
              autoApply
            />
          </div>
          <div class="border border-8 border-orange-500 rounded-md">
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
</template>

<script setup>
import BaseLayout from "@/components/layout/BaseLayout.vue";
import { computed, reactive, ref } from "vue";

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
  moving_in: {
    number_of_people: null,
    date_moving_in: null,
  },
  medical_condition: [],
});
const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return ` ${day}/${month}/${year}`;
};
const checkboxOption = reactive([
  { name: "Blood Pressure", value: "Blood Pressure" },
  { name: "Stroke", value: "Stroke" },
]);
</script>

<style>
</style>