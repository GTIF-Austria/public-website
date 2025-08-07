import EOX from "@eox/pages-theme-eox";
import "./custom.css";
import NarrativeGallery from "../components/NarrativeGallery.vue";

// https://vitepress.dev/guide/custom-theme#theme-interface
export default {
  extends: EOX,
  async enhanceApp({ app, router, siteData }) {
    EOX.enhanceApp({ app, router, siteData });

    app.component("NarrativeGallery", NarrativeGallery);

    if (!import.meta.env.SSR) {
      await import("@eodash/eodash/webcomponent");
      await import("@eox/storytelling");
      await import("@eox/layout");
      await import("@eox/itemfilter");
      await import("@eox/map");
      await import("@eox/jsonform");
      await import("@eox/map/src/plugins/advancedLayersAndSources");
    }
  },
};
