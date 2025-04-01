import { categories, type Category, getPostsByCategory } from "@/app/posts";
import { Posts } from "@/components/Posts";
import { notFound } from "next/navigation";
import { Tag } from "lucide-react";
import Link from "next/link";

export default async function CategoryPage(props: {
  params: Promise<{ category: Category }>;
}) {
  const params = await props.params;
  const { category } = params;

  if (categories.indexOf(category) === -1) {
    notFound();
  }

  const posts = await getPostsByCategory({ category });

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-4 text-center text-4xl font-bold hover:underline tracking-tight md:text-5xl">
        <Link href="/blog">Digital Garden 🌸</Link>
      </h1>

      <div className="mb-8 flex items-center justify-center gap-x-3 text-center text-3xl font-bold capitalize tracking-tight md:text-4xl">
        <Tag className="h-7 w-7 md:h-8 md:w-8" />
        <span>{category}</span>
      </div>

      <Posts posts={posts} />
    </main>
  );
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }));
}
