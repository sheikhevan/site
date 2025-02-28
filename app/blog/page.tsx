import { Posts } from "@/components/Posts";
import { getPosts } from "@/app/posts";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Next.js MDX Blog</h1>
      <Posts posts={posts} />
    </main>
  );
}
