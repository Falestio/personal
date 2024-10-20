<script setup>
const { data } = await useAsyncData("home", () => queryContent("blog").find());
</script>

<template>
  <div>
    <h1 class="font-mono text-5xl mb-8">Falestio Hanif Al Hakim</h1>
    <div class="grid grid-cols-1 gap-4">
      <NuxtLink
        v-for="article in data"
        :key="article._id"
        :to="article._path"
        class="p-4 border bg-gray-100 dark:bg-slate-700 rounded shadow transform transition-transform duration-300 hover:scale-105 flex"
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

  </div>
</template>
