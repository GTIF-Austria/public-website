import { defineConfig } from "vitepress";
// Import config from centralized repo
import { config } from "https://hub-brands.eox.at/gtif-austria/config.mjs";

export default defineConfig({
  appearance: false,
  // lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: "https://gtif-austria.info",
  },
  themeConfig: {
    siteTitle: false,
    primaryColor: config.theme.primary_color,
    logo: config.logo,
    externalLinkIcon: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "Narratives", link: "/narratives", activeMatch: "/narratives/" },
      { text: 'Explore data', link: '/explore/' },
      { text: "Log in", link: "https://dashboard.gtif-austria.gtif.eox.at" },
    ],
    footer: {
      message: `Powered by <img src="https://cockpit.hub.eox.at/storage/uploads/eoxhub/eoxhub_icon.svg" style="display: inline; height: 20px; transform: translateY(5px)" />`,
      copyright:
        'Copyright © 2014-present <a href="https://eox.at" target="_blank">EOX IT Services GmbH</a>',
    },
  },
  transformPageData(pageData, { siteConfig }) {
    /**
     * Inject dashboard link
     */
    const dashboardLink = pageData.frontmatter?.hero?.actions?.find(
      (a) => a.id === "dashboard",
    );
    if (dashboardLink) {
      dashboardLink.link = config.userArea.root;
    }
    /**
     * Inject brand logo
     */
    const brandLogo =
      pageData.frontmatter?.hero?.image?.id === "logo" &&
      pageData.frontmatter.hero.image;
    if (brandLogo) {
      brandLogo.src = config.logo;
    }
  },
  title: config.meta.title,
  description: config.meta.description,
  head: [["link", { rel: "icon", href: config.meta.favicon }]],
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (el) => el.includes('-')
      },
    },
  },
});
