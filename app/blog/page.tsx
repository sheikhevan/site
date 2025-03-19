import { Posts } from "@/components/Posts";
import { getPosts } from "@/app/posts";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main>
      <Posts posts={posts} />
    </main>
  );
}
