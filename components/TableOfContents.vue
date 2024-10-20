<script setup>
const props = defineProps({
  toc: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="border-2 rounded p-6">
      <h2 class="text-2xl font-mono">Table of Content</h2>
      <ul v-if="toc && toc.links" class="space-y-2">
        <li v-for="link in toc.links" :key="link.id" class="ml-2">
          <a :href="`#${link.id}`" class="hover:underline">
            {{ link.text }}
          </a>
          <ul v-if="link.children" class="ml-4 space-y-1">
            <li v-for="child in link.children" :key="child.id" class="ml-2">
              <a :href="`#${child.id}`" class="text- hover:underline">
                {{ child.text }}
              </a>
              <ul v-if="child.children" class="ml-4 space-y-1">
                <li
                  v-for="subChild in child.children"
                  :key="subChild.id"
                  class="ml-2"
                >
                  <a
                    :href="`#${subChild.id}`"
                    class="text-blue-500 hover:underline"
                  >
                    {{ subChild.text }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}

li::before {
  content: "•";
  color: #1d4ed8; /* Tailwind's blue-500 */
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
