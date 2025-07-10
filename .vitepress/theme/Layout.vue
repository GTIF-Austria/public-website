<script setup>
import Layout from "@eox/pages-theme-eox/src/Layout.vue";
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
