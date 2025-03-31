import { Posts } from "@/components/Posts";
import { getPosts } from "@/app/posts";
import Link from "next/link";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main className="mx-auto flex flex-col w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-4 py-5 text-center text-4xl font-bold hover:underline tracking-tight md:text-5xl">
        <Link href="/blog">Digital Garden 🌸</Link>
      </h1>

      <Posts posts={posts} />
    </main>
  );
}
