<template>
  <!-- <div class="grid grid-cols-12"> -->
  <!-- input info -->
  <div class="col-span-7">
    <base-layout class="w-1/2">
      <template v-slot:main>
        <main class="px-[50px] pt-10 text-black">
          <div class="mb-[100px]">
            <h1>Basic Info</h1>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Previous Address" />
            <Input placeholder="Work Place" />
            <Input placeholder="Phone Number" />
            <div class="mt-10">
              <div>Reference</div>
              <Input placeholder="Personal Reference" />
              <Input placeholder="Phone Number" />
            </div>
            <div class="mt-10">
              <div>Medical condition</div>
              **ask medical condition
            </div>
          </div>
          <div class="mb-[100px]">
            <h1>Payment</h1>
            <!-- <Radio>
            <label for="discount" class="font-bold text-rose-600 italic"
              >Discount rate: 15%</label
            >
          </Radio> -->
            <Input placeholder="Number of people" type="number" />
            <h1>Booked Paid</h1>
            <p>**booked if user moving in more than 1 week</p>
            <h1>Duration</h1>
            <p>**How long user want to stay</p>
            <h1>Moving In</h1>
            <p>**When user want to moving duration max 2 weeks from now</p>
          </div>
          <Datepicker v-model="date" />
          <h1>Received By</h1>
          <Input placeholder="Name" />
          <Input placeholder="Phone Number" />
          <div class="mt-5">
            <hr />
            <label class="text-2xl">You need to pay</label>
            <div class="w-1/2">
              <base-layout>
                <template v-slot:main>
                  <div class="text-white py-5 w-full bg-[#131925] rounded-md">
                    <div class="p-5">
                      <p class="text-6xl">$ 888</p>
                    </div>
                  </div>
                </template>
              </base-layout>
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

import { ref } from "vue";

const date = ref();
</script>

<style>
</style>