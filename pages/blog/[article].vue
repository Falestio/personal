<script setup>
const route = useRoute();
const blogStore = useBlogStore();

const { status, data } = await useLazyAsyncData("article", () =>
  queryContent("blog", route.params.article).findOne()
);

blogStore.currentArticle = data;

if (data.value){
  useSeoMeta({
    title: () => `${data.value.title}`,
    description: () => `${data.value.description}`,
    ogTitle: () => `${data.value.title}`,
    ogDescription: () => `${data.value.description}`,
    ogImage: () => `${data.value.thumbnail}`,
  });
}
</script>

<template>
  <div>
    <div class="p-4" v-if="data">
      <h1 class="text-5xl font-mono font-semibold mb-8">{{data.title}}</h1>
      <NuxtImg :src="data.thumbnail" class="w-full h-auto" :alt="'thumbnail - ' + data.description"></NuxtImg>
    </div>
    <div class="flex justify-center">
      <ContentDoc
        class="article custom-list-style custom-table-style custom-inline-code w-full p-4"
      >
        <template #not-found>
          <h1>404 Content not found</h1>
        </template>
      </ContentDoc>
    </div>
  </div>
</template>
