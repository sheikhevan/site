import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { cn } from "@/lib/utils";

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
      <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
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
      </div>
  );
}
