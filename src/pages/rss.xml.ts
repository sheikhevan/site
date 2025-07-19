import rss from "@astrojs/rss";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const postFiles = import.meta.glob("../pages/writings/*/index.md", {
    eager: true,
  });
  const posts = Object.values(postFiles);

  return rss({
    title: "the writings of evan alvarez",
    description: "latest and greatest posts straight from evan alvarez",
    site: context.site,
    items: posts
      .map((post) => {
        const pathMatch = post.file?.match(/writings\/([^\/]+)\/index\.md$/);
        const slug = pathMatch ? pathMatch[1] : "";

        return {
          title: post.frontmatter.title,
          description: post.frontmatter.description,
          pubDate: post.frontmatter.date,
          link: `/writings/${slug}/`,
        };
      })
      .sort(
        (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
      ),
  });
};
