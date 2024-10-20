<script setup>
const route = useRoute();
const blogStore = useBlogStore();
const colorMode = useColorMode();

const isBlogArticle = computed(() => {
  return route.path.startsWith("/blog/") && route.params.article;
});
</script>

<template>
  <div class="no-scrollbar">
    <div class="flex items-center justify-end gap-3 pr-8">
      <DarkmodeToggle></DarkmodeToggle>
      <NuxtImg src="/img/logo-personal.png" class="w-36 h-auto"/>
    </div>
    <div class="p-4">
      <TableOfContents
        v-if="isBlogArticle"
        :toc="blogStore.currentArticle?.body?.toc"
      ></TableOfContents>
    </div>
  </div>
</template>
