<script setup>
import { data as narratives } from "../narratives.data.js";

const narrativesExcerpts = narratives.map((n) => {
  if (!import.meta.env.SSR) {
    const el = document.createElement("html");
    el.innerHTML = n.html;
    return (
      el.querySelector("h1")?.textContent ||
      n.url.replace("/narratives/", "").replace(".html", "")
    );
  }
});
</script>

<template>
  <div class="gallery">
    <a
      v-for="(narrative, index) in narratives"
      class="narrative"
      :href="narrative.url"
    >
      <img
        v-if="narrative?.frontmatter?.['cover-image']"
        :src="narrative.frontmatter['cover-image']"
        clas="background"
      />
      <p>{{ narrativesExcerpts[index] }}</p>
    </a>
  </div>
</template>

<style scoped>
.gallery {
  --columns: 1;
}
@media screen and (min-width: 480px) {
  .gallery {
    --columns: 2;
  }
}
@media screen and (min-width: 768px) {
  .gallery {
    --columns: 3;
  }
}
.gallery {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 8px;
  margin: 64px 0;
}
.narrative {
  border-radius: 8px;
  border: 1px solid var(--vp-c-brand);
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.narrative:hover {
  background: var(--vp-c-brand);
  color: white;
}
img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
p {
  padding: 8px 16px;
}
</style>
