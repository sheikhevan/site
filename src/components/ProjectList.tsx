export default function ProjectList() {
  const projects = [
    {
      title: "evanalvarez.dev",
      description: "My personal website, written in Astro and React.",
      link: "https://evanalvarez.dev",
    },
  ];
  return (
    <div>
      <ul className="flex max-h-[300px] flex-col overflow-y-scroll">
        {projects.map((project, index) => (
          <div key={index}>
            <a href={project.link}>
              <li
                className="pt-5 text-center font-bold hover:underline"
                key={index}
              >
                {project.title}
              </li>
            </a>
            <li className="px-10 text-center text-gray-500" key={index}>
              {project.description}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
