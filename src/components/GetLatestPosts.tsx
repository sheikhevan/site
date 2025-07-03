export default function GetLatestPosts() {
  const matches = import.meta.glob("@/pages/writings/*.md", { eager: true });
  const posts = Object.values(matches);

  return (
    <ul>
      {posts.slice(0, 4).map((post, index) => (
        <li className="">
        </li>
      ))}
    </ul>
  );
}
