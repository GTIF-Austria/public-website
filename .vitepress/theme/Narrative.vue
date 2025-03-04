<script setup>
import { onMounted, ref } from "vue";
import { useData } from "vitepress";
const { page } = useData();
let fetchedContent = ref("");
onMounted(async () => {
  if (page.value.relativePath?.includes("preview")) {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("url")) {
      const response = await fetch(urlParams.get("url"));
      fetchedContent.value = await response.text();
    }
  }
});
</script>

<template>
  <ClientOnly>
    <eox-storytelling
      show-nav
      .markdown="page.content || fetchedContent"
    ></eox-storytelling>
  </ClientOnly>
</template>

<style>
eox-storytelling {
  --header-font-family: Poppins, sans-serif;
  --body-font-family: Poppins, sans-serif;
  margin: -47px 0 var(--vp-nav-height) 0;
  transform: translateY(47px);
}
@media (min-width: 960px) {
  eox-storytelling {
    margin: calc(var(--vp-nav-height) * -1) 0 var(--vp-nav-height) 0;
    transform: translateY(var(--vp-nav-height));
  }
}
</style>
