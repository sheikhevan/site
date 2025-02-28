import { readdir } from "node:fs/promises";

export type Category = (typeof categories)[number];

export const categories = ["philosophy", "free-will", "religion"] as const;

export interface Post {
  slug: string;
  title: string;
  publishDate: string;
  categories: Category[];
}

export async function getPostsByCategory({
  category,
}: {
  category: Category;
}): Promise<Post[]> {
  const allPosts = await getPosts();

  const posts = allPosts.filter(
    (post) => post.categories.indexOf(category) !== -1,
  );

  return posts;
}

export async function getPosts(): Promise<Post[]> {
  const slugs = (
    await readdir("./app/blog/(posts)", { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`@/app/blog/(posts)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    }),
  );

  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}
