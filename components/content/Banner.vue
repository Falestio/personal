<template>
  <div class="p-4 border rounded bg-white dark:bg-black dark:border-gray-700">
    <h2 class="text-2xl font-mono mb-4">Counter: {{ count }}</h2>
    <button @click="increment" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Increment
    </button>
    <button @click="decrement" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2">
      Decrement
    </button>
  </div>
</template>

<script setup>
const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};
</script>

<style scoped>
button {
  transition: background-color 0.2s;
}
</style>