<script setup>
if (window && !customElements.get("eox-itemfilter")) import("@eox/itemfilter");
import { ref, onMounted } from "vue";
import { withBase, useRouter } from "vitepress";
// import { trackEvent } from "@eox/pages-theme-eox/src/helpers.js";

const router = useRouter();
const items = ref([]);

const filterProps = [
  {
    keys: ["title", "subtitle", "theme"],
    title: "By keyword",
    type: "text",
    placeholder: "Search in title or subtitle",
    expanded: true,
  },
  // {
  //   "key": 'theme',
  //   "title": 'By theme',
  //   expanded: true
  // }
];

onMounted(async () => {
  try {
    const response = await fetch(
      "https://gtif-austria.github.io/public-narratives/narratives.json",
    );
    const results = await response.json();
    results.forEach((res) => {
      res.image =
        "https://gtif-austria.github.io/public-narratives/" + res.image;
    });
    items.value = results;
  } catch (error) {
    console.error("Error fetching JSON:", error);
  }
});

// Click event handler
const handleResultClick = (evt) => {
  const sections = evt.detail.file.split("/");
  const filename = sections[sections.length - 1].split(".")[0];
  // trackEvent(['narratives', 'select', filename]);
  router.go(withBase(`/narratives/${filename}`));
};
</script>

<template>
  <client-only>
    <eox-itemfilter
      :items="items"
      titleProperty="title"
      imageProperty="cover-image"
      :filterProperties="filterProps"
      resultType="cards"
      @select="handleResultClick"
      style="--select-filter-max-items: 10"
      class="large-margin bottom-margin"
    >
      <h6 slot="filterstitle" class="small vertical-margin">
        Filter Narratives:
      </h6>
      <h6
        slot="resultstitle"
        class="large bottom-padding top-margin small-margin"
      >
        Narrative Gallery
      </h6>
    </eox-itemfilter>
  </client-only>

  <div class="large-space"></div>
</template>

<style>
eox-itemfilter {
  --form-flex-direction: row;
}
@media (max-width: 768px) {
  eox-itemfilter {
    --form-flex-direction: column;
  }
}
</style>
