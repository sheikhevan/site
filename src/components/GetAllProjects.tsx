export default function GetAllProjects() {
  const projects = [
    {
      name: "rsvcs",
      language: "rust",
      url: "https://github.com/sheikhevan/rsvcs",
      description:
        "A super simple version control system. This was my first serious Rust project.",
      openSource: true,
      openSourceLink: "https://github.com/sheikhevan/rsvcs",
    },
  ];
  return (
    <ul>
      {projects.map((project, index) => (
        <li
          className="text-md flex flex-row py-[0.5rem] lg:text-lg"
          key={index}
        >
          <p>{project.language}</p>
          <span> &nbsp; :: &nbsp; </span>
          <a
            className="text-everforest-green hover:underline"
            href={project.url}
          >
            {project.name}
          </a>
          <span> &nbsp; :: &nbsp; </span>
          <p>{project.description}</p>
          <span> &nbsp; :: &nbsp; </span>
          {project.openSource ? (
            <a
              className="text-everforest-green hover:underline"
              href={project.openSourceLink}
            >
              view source
            </a>
          ) : (
            <p>closed source ):</p>
          )}
        </li>
      ))}
    </ul>
  );
}
