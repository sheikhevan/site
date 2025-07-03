const Topbar = () => {
  return (
    <nav className="bg-everforest-bgdim pt-[2rem]">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="flex items-center justify-end">
          <div className="text-everforest-fg space-x-1 text-lg lg:text-xl">
            <span>[</span>
            <a href="/" className="text-everforest-green hover:underline">
              home
            </a>
            <span>]</span>

            <span>::</span>

            <span>[</span>
            <a
              href="/writings"
              className="text-everforest-green hover:underline"
            >
              writings
            </a>
            <span>]</span>

            <span>::</span>

            <span>[</span>
            <a
              href="/projects"
              className="text-everforest-green hover:underline"
            >
              projects
            </a>
            <span>]</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
