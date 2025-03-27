import { type Post } from "@/app/posts";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CalendarDays, Tags } from "lucide-react";

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map(({ slug, title, publishDate, categories }) => (
        <Card key={slug} className="flex h-full flex-col">
          <CardHeader>
            <CardTitle>
              <Link href={`/blog/${slug}`} className="hover:underline">
                {title}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              {" "}
              <CalendarDays className="h-4 w-4" /> {/* Icon */}
              <span>
                {" "}
                {new Date(publishDate).toLocaleDateString()}
              </span>
            </div>

            {categories && categories.length > 0 && (
              <div className="flex items-start gap-1.5">
                {" "}
                <Tags className="mt-0.5 h-4 w-4 flex-shrink-0" />{" "}
                <div>
                  {" "}
                  {categories.map((cat, i) => (
                    <span key={cat}>
                      {i > 0 && ", "}
                      <Link
                        href={`/blog/category/${cat}`}
                        className="hover:underline"
                      >
                        {cat}
                      </Link>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
