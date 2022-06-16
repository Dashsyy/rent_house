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
                <div v-for="(item, index) in navigation" :key="index">
                  <router-link :to="item.href">
                    <div
                      :class="[
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-4 py-3 rounded-md text-sm font-medium',
                      ]"
                    >
                      {{ item.name }}
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
    <main>
      <SubHeader :title="_headerName" />
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import { Disclosure } from "@headlessui/vue";
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import SubHeader from "./SubHeader.vue";

const data = reactive({
  routeName: null,
});
const navigation = reactive([
  { name: "Dashboard", href: "/dashboard", current: false },
  { name: "Register User", href: "/register-user", current: false },
  { name: "Reports", href: "/reports", current: false },
]);

const _headerName = computed(() => {
  const currentRouteName = useRoute().name;
  navigation.forEach((element) => {
    if (element.name != currentRouteName) {
      element.current = false;
    }
    if (element.name == currentRouteName) {
      element.current = true;
    }
  });
  return currentRouteName;
});
</script>

