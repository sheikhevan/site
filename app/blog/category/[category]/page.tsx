import { categories, type Category, getPostsByCategory } from "@/app/posts";
import { Posts } from "@/components/Posts";
import { notFound } from "next/navigation";

export default async function Category({
  params,
}: {
  params: { category: Category };
}) {
  const { category } = params;

  if (categories.indexOf(category) == -1) notFound();

  const posts = await getPostsByCategory({ category });

  return (
    <main>
      <h1>Category: {category}</h1>
      <Posts posts={posts} />
    </main>
  );
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }));
}
