<template>
  <div class="flex flex-col lg:flex-row min-h-screen">
    <div
      class="w-full lg:w-2/12 bg-gray-200 dark:bg-slate-800 p-4 lg:sticky lg:top-0 lg:max-h-screen lg:overflow-y-auto"
    >
      <LeftSidebar></LeftSidebar>
    </div>
    <div class="w-full lg:w-7/12 p-4">
      <slot></slot>
    </div>
    <div
      class="w-full lg:w-3/12 p-4 lg:sticky lg:top-0 lg:max-h-screen lg:overflow-y-auto"
    >
      <RightSidebar></RightSidebar>
    </div>
  </div>
</template>

<style scoped>
</style>
