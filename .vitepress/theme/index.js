import DefaultTheme from "vitepress/theme";
import Narrative from "./Narrative.vue";
import NarrativeGallery from "../components/NarrativeGallery.vue";
import Layout from "./Layout.vue";
import { data as narratives } from "../narratives.data.js";
import "./custom.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout,
  async enhanceApp({ app, siteData, router }) {
    app.component("narrative", Narrative);
    app.component("NarrativeGallery", NarrativeGallery);
    if (!import.meta.env.SSR) {
      await import('@eodash/eodash/webcomponent')
      await import('@eodash/eodash/webcomponent.css') 
      await import("@eox/stacinfo")
    }
    router.onBeforePageLoad = async (to) => {
      if (
        to.includes("/narratives/") &&
        to !== "/narratives/" &&
        to !== "/narratives/README"
      ) {
        router.route.data = {
          content: narratives.find((n) => to.startsWith(n.url)).src,
          frontmatter: {
            layout: "narrative",
          },
        };
        return false;
      }
      return true;
    };

    router.onAfterRouteChanged = () => {
      if (!import.meta.env.SSR) {
        window.scrollTo(0, 0);
      }
    };

    if (!import.meta.env.SSR) {
      const { primaryColor } = siteData.value.themeConfig;

      const brandStyle = document.createElement("style");
      brandStyle.appendChild(
        document.createTextNode(`
      :root {
        /* legacy fallback */
        --vp-c-brand: ${primaryColor};
        --vp-c-brand-1: ${primaryColor};
        --vp-c-brand-2: ${primaryColor};
        --vp-c-brand-3: ${primaryColor};
    
        /* brand color shadings */
        --vp-c-brand-1: color-mix(in srgb, ${primaryColor} 100%, white);
        --vp-c-brand-2: color-mix(in srgb, ${primaryColor} 90%, white);
        --vp-c-brand-3: color-mix(in srgb, ${primaryColor} 80%, white);
        --vp-c-brand-soft: color-mix(in srgb, ${primaryColor} 16%, transparent);
      }
    `),
      );
      document.head.appendChild(brandStyle);
      document.body.style.opacity = 1;

      const storytelling = await import(
        "@eox/storytelling/dist/eox-storytelling"
      );
      app.use(storytelling);

      const mapAdvanced = await import(
        "@eox/map/dist/eox-map-advanced-layers-and-sources"
      );
      app.use(mapAdvanced);
    }
  },
};
