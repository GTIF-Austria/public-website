---
layout: page
---

<FeaturesGallery
  v-if="providers.length"
  background="transparent"
  section-title="Providers"
  :cards="providers"
  style="padding-block: 0"
/>

<script setup>
  import { onMounted, ref } from "vue";
  import { withBase } from 'vitepress';

  const indicators = ref([]);
  const providers = ref([]);
  const narratives = ref([]);

  const getIndicatorsForProvider = (providerKey) => indicators.value.filter(i => i.providers?.includes(providerKey));
  const getNarrativesForProvider = (providerKey) => narratives.value.filter(n => n.provider === providerKey);

  onMounted(async () => {
    const providersResponse = await fetch(withBase("/providers.json"));
    const providersJson = await providersResponse.json();

    const indicatorsResponse = await fetch("https://gtif-austria.github.io/public-catalog/GTIF-Austria/catalog.json");
    const indicatorsJson = await indicatorsResponse.json();
    indicators.value = indicatorsJson.links.filter(c => c.rel === "child");

    const narrativesResponse = await fetch("https://gtif-austria.github.io/public-narratives/narratives.json");
    narratives.value = await narrativesResponse.json();

    const enhancedProviders = Object.entries(providersJson).map(([key, provider]) => ({
      ...provider,
      id: key,
      indicators: getIndicatorsForProvider(key),
      narratives: getNarrativesForProvider(key),
    }));
    providers.value = enhancedProviders.map(p => ({
      id: p.id,
      title: p.id,
      content: p.Description,
      icon: {
        html: `<img src="${p.Logo}" alt="${p.id} logo" style="height: 100%; width: auto" />`,
        width: "auto"
      }
    }));
  })
</script>

