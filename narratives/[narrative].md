---
layout: page
---

<client-only>
  <eox-storytelling
    show-nav
    :markdown-url="params.file"
    class="full-width"
    style="
      transform: translateY(calc(var(--vp-nav-height) - 2px));
      margin-top: calc(var(--vp-nav-height) * -1 - 90px + 48px);
      margin-bottom: var(--vp-nav-height);
      --eox-storytelling-hero-height: 48dvh;
    "
  >
  </eox-storytelling>
</client-only>

<!-- SSR fallback content for SEO -->
<div
  data-allow-mismatch
  style="display: none"
>
<template v-if="ssrFallback">
<!-- @content -->
</template>
</div>

<script setup>
import { ref } from "vue";
import { useData } from "vitepress";

const ssrFallback = ref(true);

if (!import.meta.env.SSR) {
  ssrFallback.value = false;
}

const { params } = useData();
</script>
