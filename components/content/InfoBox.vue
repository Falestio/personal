<template>
  <div class="rounded-lg shadow-md overflow-hidden flex mb-4">
    <div :class="cardClass" class="w-4 min-h-full"></div>
    <div class="bg-white dark:bg-gray-800">
      <div :class="titleClass" class="flex items-center gap-2 px-2 py-2">
        <PhosphorIconInfo v-if="props.type === 'info'" class="text-blue-500" />
        <PhosphorIconQuestion
          v-else-if="props.type === 'question'"
          class="text-green-500"
        />
        <PhosphorIconWarningCircle
          v-else-if="props.type === 'warning'"
          class="text-yellow-500"
        />
        <span class="text-xl font-bold rounded">
          {{ props.title }}
        </span>
      </div>
        <div class="px-2">
          <slot />
        </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ["info", "question", "warning"].includes(value),
  },
  title: {
    type: String,
    required: true,
  },
});

const cardClass = computed(() => {
  switch (props.type) {
    case "info":
      return "bg-blue-200";
    case "question":
      return "bg-green-200";
    case "warning":
      return "bg-yellow-200";
    default:
      return "";
  }
});

const titleClass = computed(() => {
  switch (props.type) {
    case "info":
      return "text-blue-200";
    case "question":
      return "text-green-200";
    case "warning":
      return "text-yellow-200";
    default:
      return "";
  }
});
</script>

<style scoped>
/* Additional styles if needed */
</style>
