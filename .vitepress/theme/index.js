import { markRaw } from "vue";
import EOX from "@eox/pages-theme-eox";
import "./custom.css";
import Layout from "./Layout.vue";
import Narrative from "../views/Narrative.vue";
import NarrativeGallery from "../components/NarrativeGallery.vue";

// https://vitepress.dev/guide/custom-theme#theme-interface
export default {
  extends: EOX,
  Layout,
  async enhanceApp({ app, router, siteData }) {
    EOX.enhanceApp({ app, router, siteData });

    app.component("NarrativeGallery", NarrativeGallery);

    router.onBeforePageLoad = async (to) => {
      const regex = /^\/narratives\/.+/;
      // Here you can set the routes you want to configure.
      if (regex.test(to)) {
        router.route.path = to;
        router.route.component = markRaw(Narrative);
        router.route.data = {
          frontmatter: { layout: "page" },
          relativePath: to,
        };
        return false;
      }
      return true;
    };

    if (!import.meta.env.SSR) {
      await import("@eodash/eodash/webcomponent");
      await import("@eox/storytelling");
      await import("@eox/layout");
      await import("@eox/itemfilter");
    }
  },
};
