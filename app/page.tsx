import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { cn } from "@/lib/utils";
import ScrollButton from "@/components/ScrollButton";
import {ArrowDown} from "lucide-react";
import Image from "next/image";

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

          {/* Floating content container */}
          <div className="relative z-20 flex w-full max-w-6xl px-4 justify-between items-center">
            {/* Floating white pane on the left */}
            <div className="w-1/2 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-everforest-green to-everforest-aqua">About Me</h2>
              <p className="text-gray-800 dark:text-gray-200 mb-4">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
                In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
                lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel
                class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
              </p>
            </div>

            {/* Image on the right */}
            <div className=" flex justify-center">
              <div className="w-full overflow-hidden shadow-xl rounded-xl">
                <Image
                    src="/evan.jpg"
                    alt="Evan Alvarez"
                    width={400}
                    height={400}
                />
              </div>
            </div>
          </div>

          <div> </div>
        </div>
      </>
  );
}