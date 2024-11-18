<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const formatBreadcrumbName = (name) => {
  return name
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const excludedPaths = ["/", "/about"];

const breadcrumbs = computed(() => {
  const paths = route.path.split("/").filter((p) => p);
  const breadcrumbPaths = paths
    .map((path, index) => {
      const fullPath = "/" + paths.slice(0, index + 1).join("/");
      return {
        name: formatBreadcrumbName(path),
        path: fullPath,
      };
    })
    .filter((breadcrumb) => !excludedPaths.includes(breadcrumb.path));

  return breadcrumbPaths;
});
</script>

<template>
  <nav aria-label="breadcrumb">
    <ol class="flex flex-col space-x-2">
      <li v-if="!route.path.startsWith('/blog')" class="flex items-center">
        <NuxtLink to="/blog" class="hover:underline"> Blog </NuxtLink>
      </li>
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="block">
        <NuxtLink
          v-if="index < breadcrumbs.length - 1"
          :to="crumb.path"
          class="hover:underline text-primary"
        >
          {{ crumb.name }}
        </NuxtLink>
        <span v-else class="text-primary">{{ crumb.name }}</span>
        <span
          v-if="
            index < breadcrumbs.length - 1 && route.path.startsWith('/blog')
          "
          class="mx-2 text-gray-400"
          >/</span
        >
      </li>
    </ol>
  </nav>
</template>
