---
layout: false
---

<script setup>
    import { onMounted, watch } from "vue"
    import { withBase } from 'vitepress'
    // import { trackEvent } from "@eox/pages-theme-eox/src/helpers.js";

    function waitForEodashStore(callback) {
        const interval = setInterval(() => {
            if (window.eodashStore) {
                clearInterval(interval)
                callback(window.eodashStore)
            }
        }, 100)
    }

    onMounted(() => {
        waitForEodashStore((eodashStore) => {
            const indicatorRef = eodashStore?.states?.indicator
            watch(indicatorRef, (newVal, oldVal) => {
                if (newVal && newVal !== "") {
                    // trackEvent(['indicators', 'select_indicator', newVal]);
                }
            }, { immediate: true })
            const poiRef = eodashStore?.states?.poi
            watch(poiRef, (newVal, oldVal) => {
                if (newVal && newVal !== "") {
                    // trackEvent(['features', 'select_feature', newVal]);
                }
            }, { immediate: true })
        })
    });
</script>

<NavBar></NavBar>
<eo-dash
    .config="withBase('/dashboard.js')"
    style="display: block; height: calc(100dvh - var(--vp-nav-height)) !important;"
></eo-dash>