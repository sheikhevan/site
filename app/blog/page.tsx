import { Posts } from "@/components/Posts";
import { getPosts } from "@/app/posts";

export default async function Blog() {
  const posts = await getPosts();

  return (
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl">
              Blog
          </h1>
      <Posts posts={posts} />
    </main>
  );
}
