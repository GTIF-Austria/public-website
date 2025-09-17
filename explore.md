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
                const dash = document.querySelector("eo-dash");
                const style = document.createElement("style");
                style.textContent = `
                    .map-buttons-container .v-btn {
                    --v-btn-height: 18px !important;
                    }
                    .ol-mouse-position {
                    font-size: 10px;
                    }
                    #cursor-coordinates {
                    padding: 0px 8px;
                    }
                    .eodash-overlay {
                    top: 8px!important;
                    left:-20px!important;
                    }
                `;
                dash.shadowRoot.appendChild(style);
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