export default function BlogList() {
  const mds = import.meta.glob("@/pages/posts/*.md", { eager: true });
  const posts = Object.values(mds);

  return (
    <div>
      <ul className="flex max-h-[600px] flex-col overflow-y-scroll">
      {posts.slice(0, 4).map((post, index) => (
        <div key={index}>
            <a href={post.url}>
          <li className="pt-5 text-center font-bold hover:underline">{post.frontmatter.title}</li>
          </a>
          <p className="px-10 text-center text-gray-500">{post.frontmatter.description}</p>
        </div>
      ))}
      </ul>
    </div>
  );
}
