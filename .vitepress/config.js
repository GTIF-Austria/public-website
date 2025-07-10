import { defineConfig } from "vitepress";
import baseConfig from "@eox/pages-theme-eox/config";

export default defineConfig({
  extends: baseConfig("gtif-austria"),
  // Change the page config here
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Narratives", link: "/narratives", activeMatch: "/narratives/" },
      { text: "Explore data", link: "/explore/" },
      {
        text: "Log in",
        link: "https://dashboard.gtif-austria.gtif.eox.at",
        action: "alt",
      },
    ],
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (el) => el.includes("-"),
      },
    },
  },
});
