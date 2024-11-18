<script setup>
const route = useRoute();
const blogStore = useBlogStore();

const { status, data } = await useLazyAsyncData("article", () =>
  queryContent("blog", route.params.article).findOne()
);

blogStore.currentArticle = data;
</script>

<template>
  <div>
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
