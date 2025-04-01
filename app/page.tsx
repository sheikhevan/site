import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { cn } from "@/lib/utils";
import ScrollButton from "@/components/ScrollButton";
import {ArrowDown} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const words = [
    {
      text: "Developer. ",
      className: "text-everforest-bg1 z-20",
    },
    {
      text: "Designer. ",
      className: "text-everforest-bg1 z-20",
    },
    {
      text: "Student. ",
      className: "text-everforest-bg1 z-20",
    },
  ];
  return (
      <>
        <div
            id="main"
            className="relative flex flex-col justify-between h-[50rem] w-full items-center bg-white dark:bg-black"
        >
          <div> </div>
          <div
              className={cn(
                  "absolute inset-0",
                  "[background-size:20px_20px]",
                  "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                  "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
              )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          <div className="flex items-center flex-col justify-center">
            <h1 className="text-5xl z-20 md:text-9xl py-2 md:py-5 font-bold bg-clip-text text-transparent bg-gradient-to-b from-everforest-green to-everforest-aqua">
              Evan Alvarez
            </h1>
            <TypewriterEffect
                words={words}
                cursorClassName={
                  "bg-gradient-to-b z-20 from-everforest-green to-everforest-aqua"
                }
            />
          </div>
          <ScrollButton to="about" text={<ArrowDown />} />
          <div> </div>
        </div>

        {/*About section starts here*/}
        <div
            id="about"
            className="relative flex flex-col justify-between h-[50rem] w-full items-center bg-white dark:bg-black"
        >
          <div
              className={cn(
                  "absolute inset-0",
                  "[background-size:20px_20px]",
                  "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                  "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
              )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

          <div className="relative z-20 flex w-full max-w-6xl px-4 justify-between items-center">
            <div className="w-1/2 bg-white  p-8 rounded-xl shadow-xl">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-everforest-green to-everforest-aqua">About Me</h2>
              <p className="text-everforest-bg-dim dark:text-gray-200 mb-4">
                Hey, i&apos;m Evan, this is my little corner of the internet! Im a young developer based in Austin, Texas, as well as a high school student.
                I mostly do frontend web development using languages like <Link className="text-everforest-green hover:underline" href="https://www.typescriptlang.org/">TypeScript</Link>
                {" "}and libraries like <Link className="text-everforest-green hover:underline" href="https://react.dev//">React</Link> and <Link className="text-everforest-green hover:underline" href="https://svelte.dev/">Svelte</Link>
                . I also like languages like C, C++, and especially <Link className="text-everforest-green hover:underline" href="https://www.rust-lang.org/" >Rust</Link>. When im not coding, i&apos;m usually writing for <Link href="/blog" className="text-everforest-green hover:underline">my blog</Link>
                , reading books, or lifting weights at the gym.
              </p>
              {" "}
            </div>

            <div className=" flex justify-center">
              <div className="w-full overflow-hidden shadow-xl rounded-xl">
                <Image
                    src="/evan.jpg"
                    alt="Evan Alvarez"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <ScrollButton to="skills" text={<ArrowDown />} />
          <div> </div>
        </div>

        {/* Skills section starts here */}
        <div
            id="skills"
            className="relative flex flex-col justify-between h-[50rem] w-full items-center bg-white"
        >
          <div
              className={cn(
                  "absolute inset-0",
                  "[background-size:20px_20px]",
                  "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                  "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
              )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

          <div className="relative z-20 flex w-full max-w-6xl px-4 justify-between items-center">
            <div className="flex justify-center">
              <div className="w-full overflow-hidden shadow-xl rounded-xl">
                <Image width={400} height={400} src="/evan.jpg" alt="Another picture of Evan"/>
              </div>
            </div>

            <div className="w-1/2 bg-white p-8 rounded-xl shadow-xl">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-everforest-green to-everforest-aqua">My Skills</h2>
              <p className="text-everforest-bg-dim dark:text-gray-200 mb-4">
                I specialize in frontend development with a focus on creating responsive, performant, and visually appealing web applications. My technical skills include:
              </p>
              <ul className="text-everforest-bg-dim dark:text-gray-200 mb-4 space-y-2">
                <li>• <span className="text-everforest-green">Languages:</span> JavaScript, TypeScript, HTML, CSS, Rust, Nix</li>
                <li>• <span className="text-everforest-green">Frameworks:</span> React, Next.js, Svelte, TailwindCSS</li>
                <li>• <span className="text-everforest-green">Tools:</span> Git, Vite, Docker</li>
                <li>• <span className="text-everforest-green">Design:</span> Figma</li>
                <li>• <span className="text-everforest-green">Extra:</span> Linux, NixOS</li>
              </ul>
              <p className="text-everforest-bg-dim dark:text-gray-200">
                I'm always eager to learn new technologies and approaches to solve complex problems and create better user experiences.
              </p>
            </div>
          </div>
          <div> </div>
        </div>
      </>
  );
}