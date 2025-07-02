export default function BlogList() {
  const mds = import.meta.glob("@/pages/posts/*.md", { eager: true });
  const posts = Object.values(mds);

  return (
    <div>
      <ul className="flex max-h-[600px] flex-col overflow-y-scroll">
      {posts.slice(0, 4).map((post, index) => (
        <article key={index}>
          <h3>{post.frontmatter.title}</h3>
          <p>{post.frontmatter.description}</p>
          <a href={post.url}>Read more</a>
        </article>
      ))}
      </ul>
    </div>
  );
}
