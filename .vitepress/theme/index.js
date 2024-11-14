import DefaultTheme from "vitepress/theme";
import Narrative from "./Narrative.vue";
import NarrativeGallery from "../components/NarrativeGallery.vue";
import { data as narratives } from "../narratives.data.js";
import "./custom.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  async enhanceApp({ app, siteData, router }) {
    app.component("narrative", Narrative);
    app.component("NarrativeGallery", NarrativeGallery);

    router.onBeforePageLoad = async (to) => {
      if (
        to.includes("/narratives/") &&
        to !== "/narratives/" &&
        to !== "/narratives/README"
      ) {
        router.route.data = {
          content: narratives.find((n) => n.url === to).src,
          frontmatter: {
            layout: "narrative",
          },
        };
        return false;
      }
      return true;
    };

    router.onAfterRouteChanged = () => {
      if (window) {
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
      const map = await import("@eox/map/dist/eox-map");
      app.use(map);
      const mapAdvanced = await import(
        "@eox/map/dist/eox-map-advanced-layers-and-sources"
      );
      app.use(mapAdvanced);
    }
  },
};
