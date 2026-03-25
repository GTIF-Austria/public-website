---
layout: page
footer: false
---

<script setup>
    import { onMounted, watch } from "vue"
    import { withBase } from 'vitepress'
    // import { trackEvent } from "@eox/pages-theme-eox/src/helpers.js";

    onMounted(async()=>{
        if (document.querySelector(".layout-home")) {
            window.location.reload();
            await import("@eox/map");
        }
    })

    const cacheBuster = `?t=${new Date().getTime()}`; // Add a timestamp for cache busting
</script>

<NavBar></NavBar>
<eo-dash
    .config="withBase(`/dashboard.js${cacheBuster}`)"
></eo-dash>

<style>
eo-dash {
  display: block;
  height: calc(100dvh - var(--vp-nav-height));
  width: 100%;
}
.VPPage:has(eo-dash) {
  padding: 0;
  max-width: unset;
}
body:has(eo-dash) .news-banner {
  display: none;
}
</style>