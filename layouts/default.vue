<template>
  <div>
    <div
      class="bg-gray-800 text-white p-4 lg:hidden flex justify-between items-center"
    >
      <NuxtLink to="/" @click="closeSidebar"> 
        <NuxtImg src="/img/logo-personal.png" class="w-36 h-auto" />
      </NuxtLink>
      <button @click="toggleSidebar" class="focus:outline-none">
        <PhosphorIconList></PhosphorIconList>
      </button>
    </div>

    <div class="flex flex-col lg:flex-row min-h-screen">
      <div
        :class="{ hidden: !showSidebar, block: showSidebar }"
        class="lg:block w-2/12 bg-gray-200 dark:bg-slate-800 p-4 lg:sticky lg:top-0 lg:max-h-screen lg:overflow-y-auto"
      >
        <LeftSidebar />
      </div>

      <div class="w-full lg:w-7/12 p-4">
        <slot></slot>
      </div>

      <div
        class="hidden lg:block w-3/12 p-4 lg:sticky lg:top-0 lg:max-h-screen lg:overflow-y-auto no-scrollbar"
      >
        <RightSidebar />
      </div>
    </div>
  </div>
</template>

<script setup>
const showSidebar = ref(false);

function toggleSidebar() {
  showSidebar.value = !showSidebar.value;
}

function closeSidebar() {
  showSidebar.value = false
}
</script>

<style>
.no-scrollbar {
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
