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
  const getNarrativesForProvider = (providerKey) => narratives.value.filter(n => n.provider?.includes(providerKey));

  onMounted(async () => {
    const cacheBuster = `?t=${new Date().getTime()}`; // Add a timestamp for cache busting
    const providersResponse = await fetch(withBase(`/providers.json${cacheBuster}`));
    const providersJson = await providersResponse.json();

    const indicatorsResponse = await fetch(`https://gtif-austria.github.io/public-catalog/GTIF-Austria/catalog.json${cacheBuster}`);
    const indicatorsJson = await indicatorsResponse.json();
    indicators.value = indicatorsJson.links.filter(c => c.rel === "child");

    const narrativesResponse = await fetch(`https://gtif-austria.github.io/public-narratives/narratives.json${cacheBuster}`);
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
        ${provider.Description}${provider['NoR Offering'] ? `<br /><br /><a class="primary-text" href='${provider['NoR Offering']}' target='_blank'>NoR Offering</a>` : ''}
        ${provider.narratives?.length ? `<br /><br />Narratives:<br />${provider.narratives.map(n => `<a class="primary-text" href='${withBase(`/narratives/${n.file.split(/\/|\\/).pop().replace('.md', '')}`)}'>· ${n.title}</a>`).join('<br />')}` : ''}
        ${provider.indicators?.length ? `<br /><br />Datasets:<br /> ${provider.indicators.map(i => `<a class="primary-text" href='${withBase(`/explore/?indicator=${i.id}`)}'>· ${i.title}</a>`).join('<br />')}` : ''}
      `,
      icon: {
        html: `<img src="${provider.Logo}" alt="${provider.id} logo" style="height: 100%; width: auto" />`,
        width: "auto"
      },
      link: {
        text: "Provider web page",
        href: provider.Url
      }
    }));
  })
</script>

<style>
.card-wrapper {
  flex: 0 0 calc(50% - 16px)!important;
}

@media (max-width: 1280px) {
  .card-wrapper {
    flex: 0 0 calc(50% - 12px)!important;
  }
}

</style>
