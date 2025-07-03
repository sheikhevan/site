export default function GetAllPosts() {
  const matches = import.meta.glob("@/pages/writings/*.md", { eager: true });
  const posts = Object.values(matches);
  const sortedPosts = posts.sort((a, b) => {
    return Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date);
  });

  return (
    <ul>
      {sortedPosts.map((post, index) => (
       <li className="flex flex-row text-md lg:text-lg py-[0.5rem]" key={index}>
          <p>{post.frontmatter.date}</p>
          <span> &nbsp; :: &nbsp; </span>
          <a href={post.url}>{post.frontmatter.title}</a>
          <span> &nbsp; :: &nbsp; </span>
          <p>{post.frontmatter.description}</p>
        </li>
      ))}
    </ul>
  );
}
