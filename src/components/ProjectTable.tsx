export default function ProjectTable() {
  const projects = [
    {
      title: 'evanalvarez.dev',
      description: 'This is my personal website, written in AstroJS and React.',
      link: 'https://evanalvarez.dev',
    },
  ];
  return (
    <div>
      <ul className="flex flex-col max-h-[300px] overflow-y-scroll">
        {projects.map((project, index) => (
          <div>
            <a href={project.link}><li className="font-bold text-center pt-5 hover:underline" key={index}>{project.title}</li></a>
            <li className="text-gray-500 text-center" key={index}>{project.description}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
