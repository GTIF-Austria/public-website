<script setup>
import Layout from "vitepress/dist/client/theme-default/Layout.vue";
import Disclaimer from "../components/Disclaimer.vue";
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <Disclaimer></Disclaimer>
      <div style="height: 45px"></div>
    </template>
  </Layout>
</template>
