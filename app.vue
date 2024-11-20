<script setup>
const colorMode = useColorMode();

onMounted(() => {
  if (!colorMode.preference || colorMode.preference == 'system') {
    colorMode.preference = 'dark';
  }
});
</script>

<template>
  <div class="dark:bg-slate-900 dark:text-slate-50">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
