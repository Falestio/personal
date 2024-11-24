<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
});

const showModal = ref(false);

function isSvg(src) {
  return src.endsWith(".svg");
}
</script>

<template>
  <div>
    <!-- Render the image based on its type -->
    <img
      v-if="isSvg(props.src)"
      :src="props.src"
      @click="showModal = true"
      class="cursor-pointer bg-white"
    />
    <NuxtImg
      v-else
      :src="props.src"
      @click="showModal = true"
      class="cursor-pointer bg-white"
    />

    <div
      v-if="showModal"
      class="fixed mx-auto inset-0 z-40 flex items-center justify-center bg-black bg-opacity-75 cursor-pointer"
      @click="showModal = false"
    >
      <img
        v-if="isSvg(props.src)"
        :src="props.src"
        class="max-w-[80vw] max-h-[90vh] bg-white z-50"
      />
      <NuxtImg
        v-else
        :src="props.src"
        class="max-w-[80vw] max-h-[90vh] bg-white z-50"
      />
    </div>
  </div>
</template>
