<script setup>
const { status, data } = await useLazyAsyncData("home", () =>
  queryContent("blog").without('body').find()
);

useSeoMeta({
  title: "Falestio | Personal Website",
  description:
    "I'm a software engineer interested in cloud computing and backend in general.",
});
</script>

<template>
  <div>
    <h1 class="font-mono text-5xl mb-4">Falestio Hanif Al Hakim</h1>
    <p class="mb-8 text-xl italic">"Explain it to understand it"</p>

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
