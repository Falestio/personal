<script setup>
const route = useRoute();
const blogStore = useBlogStore();
const colorMode = useColorMode();
const pageToc = useState("pageToc", () => null);

const isBlogArticle = computed(() => {
  return route.path.startsWith("/blog/") && route.params.article;
});
</script>

<template>
  <div>
    <div class="flex items-center justify-end gap-3 pr-8">
      <DarkmodeToggle></DarkmodeToggle>
      <NuxtImg src="/img/logo-personal.png" class="w-36 h-auto"/>
    </div>
    <div class="p-4" v-if="isBlogArticle && blogStore.currentArticle?.body?.toc">
      <TableOfContents :toc="blogStore.currentArticle?.body?.toc"></TableOfContents>
    </div>
    <div class="p-4" v-else-if="pageToc">
      <TableOfContents :toc="pageToc"></TableOfContents>
    </div>
  </div>
</template>

<style>

</style>