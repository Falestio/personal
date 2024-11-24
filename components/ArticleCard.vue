<template>
  <NuxtLink
    :to="article._path"
    class="p-4 border-2 border-gray-500 hover:border-fruit-salad-600 bg-gray-100 dark:bg-slate-700 rounded shadow flex"
  >
    <NuxtImg
      :src="article.thumbnail"
      format="webp"
      alt="Thumbnail"
      class="w-1/3 h-auto object-cover rounded-l"
    />
    <div class="ml-4 flex flex-col">
      <h2 class="font-mono text-2xl font-bold">{{ article.title }}</h2>
      <p>{{ article.description }}</p>

      <!-- Badges for categories -->
      <div class="mt-2 flex flex-wrap">
        <span
          v-for="(category, index) in article.category"
          :key="index"
          :style="{ backgroundColor: getBackgroundColor(category) }"
          class="text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
        >
          {{ category }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { ref, onMounted } from "vue";

defineProps({
  article: {
    type: Object,
    required: true,
  },
});

// Object to store colors for categories
const categoryColors = ref({});

// Function to generate a color based on the category name
function generateColor(category) {
  // Simple hash function to generate a number from the category name
  let hash = 0;
  for (let i = 0; i < category.length; i++) {
    hash = category.charCodeAt(i) + ((hash << 5) - hash);
  }
  // Generate a color based on the hash
  const color = `hsl(${hash % 360}, 70%, 50%)`; // HSL color
  return color;
}

// Function to get the background color for a category
function getBackgroundColor(category) {
  if (!categoryColors.value[category]) {
    let color = generateColor(category);
    // Ensure the color is not too light
    const luminance = getLuminance(color);
    if (luminance > 0.7) {
      // Adjust this threshold as needed
      // If the color is too light, darken it
      color = darkenColor(color);
    }
    categoryColors.value[category] = color;

    // Store the color in localStorage if on the client side
    if (import.meta.client) {
      localStorage.setItem(
        "categoryColors",
        JSON.stringify(categoryColors.value)
      );
    }
  }
  return categoryColors.value[category];
}

// Function to calculate the luminance of an HSL color
function getLuminance(hsl) {
  const hslParts = hsl.match(/hsl$$(\d+), (\d+)%, (\d+)%$$/);
  if (!hslParts) return 0;
  const lightness = parseInt(hslParts[3], 10) / 100;
  return lightness; // Return the lightness value
}

// Function to darken an HSL color
function darkenColor(hsl) {
  const hslParts = hsl.match(/hsl$$(\d+), (\d+)%, (\d+)%$$/);
  if (!hslParts) return hsl; // Return original if parsing fails
  const hue = hslParts[1];
  const saturation = hslParts[2];
  let lightness = parseInt(hslParts[3], 10);
  lightness = Math.max(0, lightness - 20); // Darken by reducing lightness
  return `hsl(${hue}, ${saturation}, ${lightness}%)`;
}

// Load colors from localStorage on component mount
onMounted(() => {
  if (import.meta.client) {
    const storedColors = localStorage.getItem("categoryColors");
    if (storedColors) {
      categoryColors.value = JSON.parse(storedColors);
    }
  }
});
</script>
