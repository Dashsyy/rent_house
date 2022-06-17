<template>
  <div class="col-span-7">
    <base-layout class="w-1/2">
      <template v-slot:main>
        <main class="px-[50px] pt-10 text-black">
          <div class="mb-[30px]">
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
            <div class="mt-[5px]">
              <div class="text-lg indent-1">Reference</div>
              <Input
                v-model="data.reference.name"
                placeholder="Personal Reference"
              />
              <Input
                v-model="data.reference.phoneNumber"
                placeholder="Phone Number"
              />
            </div>
            <hr class="mt-[10px]" />
          </div>
          <div class="mb-[50px]">
            <h1 class="text-xl">Moving In</h1>
            <Input
              v-model="data.moving_in.number_of_people"
              placeholder="Number of people"
              type="number"
            />
            <div class="inline-block px-3">
              <Datepicker
                v-model="data.moving_in.date_moving_in"
                placeholder="Select Moving Date"
                format="dd/MM/yyyy"
                :minDate="new Date()"
                autoApply
              />
            </div>
            <div
              class="
                px-3
                underline underline-offset-1
                decoration-4 decoration-sky-500
              "
            >
              Moving In :
              {{ data.moving_in.date_moving_in ?? "Not Select yet" }}
            </div>
          </div>
          <div>
            <h1 class="text-xl">Received By</h1>
            <Input placeholder="Name" />
            <Input placeholder="Phone Number" />
            <div class="flex mx-3">
              <div>Date:</div>
              <div class="mx-5">
                <Datepicker
                  v-model="data.received_doc.date"
                  placeholder="Receive the document"
                  format="dd/MM/yyyy"
                  :minDate="new Date()"
                  autoApply
                />
              </div>
            </div>
          </div>
          <Input v-model="data.price" placeholder="Charge Price" />
          <div class="border border-8 border-orange-500 rounded-md">
            <div class="grid md:grid-cols-1 xl:grid-cols-2 gap-3 p-5">
              <div>
                <CardPreview
                  label="You need to pay in dollar"
                  :total="_price ? _price : '...'"
                />
              </div>
              <div>
                <CardPreview
                  label="You need to pay in khmer riel"
                  :total="_price ? _price : '...'"
                  isKhmerRiel
                />
              </div>
            </div>
          </div>
          <div class="flex justify-center mt-5">
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
  received_doc: {
    date: null,
  },
  price: null,
});
const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return ` ${day}/${month}/${year}`;
};
const _price = computed(() => {
  return data.price;
});
</script>

<style>
</style>