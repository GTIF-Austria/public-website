import { createContentLoader } from "vitepress";

export default createContentLoader("narratives/*.md", {
  includeSrc: true,
  render: true,
  transform(rawData) {
    return rawData.filter(
      (d) => d.url !== "/narratives/" && d.url !== "/narratives/README",
    );
  },
});
