export default function GetAllProjects() {
    const projects = [
        {
            name: "rsvcs",
            language: "rust",
            url: "https://github.com/sheikhevan/rsvcs",
            description:
                "A super simple version control system (really more of a backup utility), this was my first serious Rust project.",
            openSource: true,
            openSourceLink: "https://github.com/sheikhevan/rsvcs",
        },
        {
            name: "zk-graphview",
            language: "typescript, svelte",
            url: "https://github.com/sheikhevan/zk-graphview",
            description: "An ObsidianMD-like graph view for a plaintext zettelkasten.",
            openSource: true,
            openSourceLink: "https://github.com/sheikhevan/zk-graphview",
        },
        {
            name: "newspaper",
            language: "rust, typst",
            url: "https://github.com/sheikhevan/newspaper",
            description: "A program to generate newspapers from RSS feeds using typst for markup and tera for templating.",
            openSource: true,
            openSourceLink: "https://github.com/sheikhevan/newspaper",
        },
    ];
    return (
        <ul>
            {projects.map((project, index) => (
                <li
                    className="text-md flex flex-row py-[0.5rem] lg:text-lg"
                    key={index}
                >
                    <a
                        className="text-everforest-green hover:underline"
                        href={project.url}
                    >
                        {project.name}
                    </a>
                    <span> &nbsp; :: &nbsp; </span>
                    <p>{project.language}</p>
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
