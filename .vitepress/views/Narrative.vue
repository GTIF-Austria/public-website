<template>
  <eox-storytelling
    show-nav
    v-if="storyurl"
    :markdown-url="storyurl"
    class="full-width"
    style="
      transform: translateY(calc(var(--vp-nav-height) - 2px));
      margin-top: calc(var(--vp-nav-height) * -1 - 90px + 48px);
      margin-bottom: var(--vp-nav-height);
    "
  >
  </eox-storytelling>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vitepress";

if (!import.meta.env.SSR) {
  if (window && !customElements.get("eox-map")) import("@eox/map");
  if (window && !customElements.get("eox-jsonform")) import("@eox/jsonform");
}

const storyurl = ref("");

onMounted(() => {
  const storyfile = useRouter().route.path.split("/narratives/")[1];
  storyurl.value = `https://gtif-austria.github.io/public-narratives/${storyfile}.md`;
});
</script>
