import { createContentLoader } from "vitepress";

export default createContentLoader("narratives/*.md", {
  includeSrc: true,
  transform(rawData) {
    return rawData.filter((d) => d.url !== "/narratives/");
  },
});
