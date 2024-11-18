<template>
  <div class="p-4">
    <ul class="space-y-2 font-mono text-2xl">
      <li>
        <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="hover:underline">About</NuxtLink>
      </li>
      <Breadcrumb></Breadcrumb> 
    </ul>
  </div>
</template>