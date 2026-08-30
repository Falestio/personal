<script setup>
const props = defineProps({
  images: { type: Array, required: true }, // string[] or { src, caption }[]
});

const slides = computed(() =>
  props.images.map((img) => (typeof img === "string" ? { src: img, caption: "" } : img))
);

const open = ref(false);
const currentIndex = ref(0);

function openAt(i) {
  currentIndex.value = i;
  open.value = true;
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
}
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
    <button v-for="(slide, i) in slides" :key="i" type="button" @click="openAt(i)" class="focus:outline-none">
      <img
        :src="slide.src"
        :alt="slide.caption"
        class="w-full aspect-video object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
      />
    </button>
  </div>

  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      @click.self="open = false"
    >
      <div class="relative bg-gray-100 dark:bg-slate-800 rounded-lg max-w-[95vw] max-h-[90vh] overflow-auto p-6">
        <UButton
          v-if="slides.length > 1"
          variant="ghost"
          class="fixed left-4 top-1/2 -translate-y-1/2 z-10"
          @click="prev"
        >
          <PhosphorIconCaretLeft class="text-2xl" />
        </UButton>

        <div class="flex items-center justify-center">
          <img :src="slides[currentIndex].src" :alt="slides[currentIndex].caption" class="rounded" />
        </div>

        <UButton
          v-if="slides.length > 1"
          variant="ghost"
          class="fixed right-4 top-1/2 -translate-y-1/2 z-10"
          @click="next"
        >
          <PhosphorIconCaretRight class="text-2xl" />
        </UButton>

        <p v-if="slides[currentIndex].caption" class="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
          {{ slides[currentIndex].caption }}
        </p>

        <div v-if="slides.length > 1" class="flex justify-center gap-2 mt-4">
          <button
            v-for="(slide, i) in slides"
            :key="i"
            type="button"
            @click="currentIndex = i"
            class="w-2 h-2 rounded-full"
            :class="i === currentIndex ? 'bg-fruit-salad-500' : 'bg-gray-400'"
          ></button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
