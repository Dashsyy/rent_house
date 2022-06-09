<template>
  <main class="p-5 text-white bg-gray-400 rounded-md px-10 mx-[60px]">
    <table>
      <tr v-for="item in items[0]" :key="item.id">
        <th v-for="data in item" :key="data">{{ data }}</th>
      </tr>
      <tr v-for="item in items[1]" :key="item.id">
        <th v-for="data in item" :key="data" @click="handleClick(item)">
          {{ data }}
        </th>
      </tr>
    </table>
  </main>
</template>

<script setup>
defineProps({
  items: Object,
});
</script>

<style>
table{
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){
  background-color: #505050;
}
</style>