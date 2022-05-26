<template>
  <div id="app">
    <div v-if="!data.isLogin">
      <h1>You are not login</h1>
    </div>
    <div v-else>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
const data = {
  isLogin: true
}
</script>

