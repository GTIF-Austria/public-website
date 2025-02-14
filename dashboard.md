---
layout: page
footer: false
---

<script setup>
    import { withBase } from 'vitepress'
</script>

<eo-dash style="height:calc(100dvh - 65px)" :config="withBase('/dashboard.js')"/>
