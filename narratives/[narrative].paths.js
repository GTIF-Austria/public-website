export default {
  async paths() {
    const narratives = await (
      await fetch(
        "https://gtif-austria.github.io/public-narratives/narratives.json",
      )
    ).json();

    return await Promise.all(
      narratives.map(async (narrative) => {
        const file = await fetch(narrative.file);
        const content = await file.text();

        return {
          params: {
            narrative: narrative.file
              .split("/")
              .slice(-1)[0]
              .replace(".md", ""),
            file: narrative.file,
            title: narrative.title,
          },
          content,
        };
      }),
    );
  },
};
