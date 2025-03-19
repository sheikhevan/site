import {TypewriterEffect} from "@/components/ui/typewriter-effect";

export default function Home() {
  const words = [
    {
      text: "Developer. ",
      className: "text-evancustom-taupe",
    },
    {
      text: "Designer. ",
      className: "text-evancustom-taupe",
    },
    {
      text: "Student. ",
      className: "text-evancustom-taupe",
    },
  ];
  return (
      <div className="flex items-center flex-col justify-center">
        <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-evancustom-nonPhotoBlue via-blue-200 to-blue-300">Evan Alvarez</h1>
        <TypewriterEffect words={words} cursorClassName={"bg-gradient-to-b from-evancustom-nonPhotoBlue via-blue-200 to-blue-300"} />
      </div>
  );
}
