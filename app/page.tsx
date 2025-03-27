import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Home() {
  const words = [
    {
      text: "Developer. ",
      className: "text-everforest-bg1",
    },
    {
      text: "Designer. ",
      className: "text-everforest-bg1",
    },
    {
      text: "Student. ",
      className: "text-everforest-bg1",
    },
  ];
  return (
    <div className="flex items-center flex-col justify-center">
      <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-everforest-green to-everforest-aqua">
        Evan Alvarez
      </h1>
      <TypewriterEffect
        words={words}
        cursorClassName={
          "bg-gradient-to-b from-everforest-green to-everforest-aqua"
        }
      />
    </div>
  );
}
