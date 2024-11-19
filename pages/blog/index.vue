<script setup>
const { status, data } = await useLazyAsyncData("home", () =>
  queryContent("blog").find()
);
</script>

<template>
  <div>
    <h1 class="font-mono text-5xl mb-6">Daftar Blog</h1>

    <template v-if="status === 'pending'">
      <p>Loading...</p>
    </template>

    <template v-else-if="status === 'error'">
      <p class="text-red-500">Error loading articles.</p>
    </template>

    <template v-else>
      <div class="grid grid-cols-1 gap-4">
        <NuxtLink
          v-for="article in data"
          :key="article._id"
          :to="article._path"
          class="p-4 border-2 border-gray-500 hover:border-fruit-salad-600 bg-gray-100 dark:bg-slate-700 rounded shadow flex"
        >
          <img
            :src="article.thumbnail"
            alt="Thumbnail"
            class="w-1/3 h-auto object-cover rounded-l"
          />
          <div class="ml-4 flex flex-col justify-center">
            <h2 class="font-mono text-xl">{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </div>
    </template>
  </div>
</template>
