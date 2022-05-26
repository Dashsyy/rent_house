<template>
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <div
                  v-for="(item, index) in navigation"
                  :key="index"
                  :class="[
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'px-3 py-2 rounded-md text-sm font-medium',
                  ]"
                >
                  <router-link
                    :to="item.href"
                    @click="setSubHeader(item.name, index)"
                    >{{ item.name }}</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
    <main>
      <SubHeader :title="data.routeName" />
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import { Disclosure } from "@headlessui/vue";
import { reactive } from "@vue/reactivity";
import SubHeader from "./SubHeader.vue";

const data = reactive({
  routeName: null,
});
const navigation = reactive([
  { name: "Dashboard", href: "/dashboard", current: false },
  { name: "Register User", href: "/register-user", current: false },
  { name: "Reports", href: "/reports", current: false },
]);

function setSubHeader(value, index) {
  data.routeName = value;
  this.navigation[index].current = !this.navigation[index].current;
}
</script>

