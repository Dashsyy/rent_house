<template>
  <div class="min-h-full" v-if="isLogin">
    <LayoutHeader>
      <router-view />
    </LayoutHeader>
  </div>
</template>

<script setup>
import LayoutHeader from "@components/layout/LayoutHeader.vue";
const isLogin = true;
</script>

<style>
</style>