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
    providers.value = enhancedProviders.map(provider => ({
      id: provider.id,
      title: provider.id,
      content: `
        ${provider.Description}${provider['NoR Offering'] ? `<br /><br /><a href='${provider['NoR Offering']}' target='_blank'>NoR Offering</a>` : ''}
        ${provider.narratives?.length ? `<br /><br />Narratives:<br />${provider.narratives.map(n => `<a href='${withBase(`/narratives/${n.file.split(/\/|\\/).pop().replace('.md', '')}`)}'>${n.title}</a>`).join('<br />')}` : ''}
        ${provider.indicators?.length ? `<br /><br />Datasets:<br /> ${provider.indicators.map(i => `<a href='${withBase(`/explore/?indicator=${i.code}`)}'>${i.title}</a>`).join('<br />')}` : ''}
      `,
      icon: {
        html: `<img src="${provider.Logo}" alt="${provider.id} logo" style="height: 100%; width: auto" />`,
        width: "auto"
      }
    }));
  })
</script>

