<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
});

const showModal = ref(false);
</script>

<template>
  <div>
    <img :src="props.src" @click="showModal = true" class="cursor-pointer bg-white" />
    <div
      v-if="showModal"
      class="fixed mx-auto inset-0 z-40 flex items-center justify-center bg-black bg-opacity-75 cursor-pointer"
      @click="showModal = false"
    >
      <img
        :src="props.src"
        class="max-w-[80vw] max-h-[90vh] bg-white z-50"
      />
    </div>
  </div>
</template>

<style scoped>
/* No hover animation */
</style>