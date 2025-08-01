import { defineConfig } from "vitepress";
import baseConfig from "@eox/pages-theme-eox/config";

export default defineConfig({
  extends: baseConfig("gtif-austria"),
  vite:{
    server:{
      allowedHosts: true,
    }
  },
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
    newsBanner: `
      <i class="small">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M13,2.03V2.05L13,4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03M11,2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06M4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1L4.26,5.67M2.06,13C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13H2.06M7.1,18.37L5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37M16.82,15.19L12.71,11.08C13.12,10.04 12.89,8.82 12.03,7.97C11.13,7.06 9.78,6.88 8.69,7.38L10.63,9.32L9.28,10.68L7.29,8.73C6.75,9.82 7,11.17 7.88,12.08C8.74,12.94 9.96,13.16 11,12.76L15.11,16.86C15.29,17.05 15.56,17.05 15.74,16.86L16.78,15.83C17,15.65 17,15.33 16.82,15.19Z"
          />
        </svg>
      </i>
      <span>This site is currently under development.</span>
    `,
  },
  async transformPageData(pageData) {
    // If page has no explicit title but has params.title set,
    // use that instead (e.g. for dynamic fetched routes)
    if (!pageData.title && pageData.params?.title) {
      pageData.title = pageData.params?.title;
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (el) => el.includes("-"),
      },
    },
  },
});
