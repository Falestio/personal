<script setup>
const colorMode = useColorMode();
const isDark = ref(colorMode.preference === 'dark');  

const toggleColorMode = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark';
  isDark.value = !isDark.value;
};
</script>

<template>
  <div>
    <button
      @click="toggleColorMode"
      class="w-24 h-8 flex items-center justify-center"
    >
      <PhosphorIconSun class="text-2xl" v-if="!isDark" />
      <PhosphorIconMoon class="text-white text-2xl" v-else />
    </button>
  </div>
</template>
