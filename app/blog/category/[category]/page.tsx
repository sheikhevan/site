import { categories, type Category, getPostsByCategory } from "@/app/posts";
import { Posts } from "@/components/Posts";
import { notFound } from "next/navigation";

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
        <h1 className="mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Category: {category}
        </h1>

        <Posts posts={posts} />
      </main>
  );
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }));
}