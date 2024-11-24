<script setup>
const { status, data } = await useLazyAsyncData("home", () =>
  queryContent("blog").find()
);

useSeoMeta({
  title: "Daftar Artikel",
});
</script>

<template>
  <div>
    <h1 class="font-mono text-5xl mb-6">Daftar Artikel</h1>

    <template v-if="status === 'pending'">
      <p>Loading...</p>
    </template>

    <template v-else-if="status === 'error'">
      <p class="text-red-500">Error loading articles.</p>
    </template>

    <template v-else>
      <div class="grid grid-cols-1 gap-4">
        <ArticleCard
          v-for="article in data"
          :key="article._id"
          :article="article"
        />
      </div>
    </template>
  </div>
</template>
