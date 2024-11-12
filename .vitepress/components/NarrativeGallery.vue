<script setup>
import { data as narratives } from "../narratives.data.js";
</script>

<template>
  <div class="gallery">
    <a v-for="narrative in narratives" class="narrative" :href="narrative.url">
      <p
        v-html="
          narrative.src.substring(
            narrative.src.indexOf('#') + 2,
            Math.max(narrative.src.indexOf('\n'), 150),
          )
        "
      ></p>
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
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-brand);
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease-in-out;
}
.narrative:hover {
  background: var(--vp-c-brand);
  color: white;
}
</style>
