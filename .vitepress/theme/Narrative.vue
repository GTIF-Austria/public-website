<script setup>
import { useData } from "vitepress";
const { page } = useData();
</script>

<template>
  <ClientOnly>
    <eox-storytelling .markdown="page.content"></eox-storytelling>
  </ClientOnly>
</template>
