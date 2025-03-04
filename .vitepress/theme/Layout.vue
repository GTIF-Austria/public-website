<script setup>
import Layout from "vitepress/dist/client/theme-default/Layout.vue";
import Disclaimer from "../components/Disclaimer.vue";
</script>

<template>
  <Layout>
    <template #layout-top>
      <Disclaimer></Disclaimer>
    </template>
  </Layout>
</template>
