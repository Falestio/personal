<template>
  <div class="relative bg-gray-800 text-gray-100 rounded-md shadow-md">
    <div class="px-3 py-1 flex justify-between border-b border-gray-600">
      <div class="text-gray-300 text-sm rounded-tl-md rounded-br-md">
        <span v-if="filename">
          {{ filename }}
        </span>
      </div>

      <button
        @click="copyCode"
        class="flex items-center justify-center bg-gray-800 border border-gray-600 w-6 h-6 text-sm text-white rounded-md hover:bg-fruit-salad-400 focus:outline-none"
      >
        <PhosphorIconCopy v-if="!copyClicked" class="mx-auto" />
        <PhosphorIconCheck v-if="copyClicked" class="mx-auto" />
      </button>
    </div>

    <pre :class="props.class" class="overflow-auto p-3"><slot/></pre>
  </div>
</template>

<script setup>
const props = defineProps({
  code: { type: String, default: "" },
  language: { type: String, default: null },
  filename: { type: String, default: null },
  highlights: { type: Array, default: () => [] },
  meta: { type: String, default: null },
  class: { type: String, default: null },
});

const copyClicked = ref(false);

function copyCode() {
  navigator.clipboard.writeText(props.code);

  copyClicked.value = true;

  setTimeout(() => {
    copyClicked.value = false;
  }, 2610);
}
</script>
