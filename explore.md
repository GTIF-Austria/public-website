---
layout: page
footer: false
---
<style>
    eo-dash a[href="https://eox.at"] img {
        display: unset;
        height:9px;
    }
    eo-dash .eodash-overlay {
        bottom: -13px;
    }
</style>

<script setup>
    import { withBase } from 'vitepress'
</script>

<eo-dash style="height:calc(100dvh - 65px)" :config="withBase('/dashboard.js')"/>
