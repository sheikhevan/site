"use client";

import Link from "next/link";
import { FileText, Command, Github } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { JetBrains_Mono } from "next/font/google";

// Load Amstelvar font
const jetbrainsmono = JetBrains_Mono({
  variable: "--font-jetbrainsmono",
  subsets: ["latin"],
});

export default function Navbar() {
  const iconLinks = [
    { icon: FileText, href: "/blog/hello-world", ariaLabel: "Blog" },
    { icon: Command, href: "/projects", ariaLabel: "Projects" },
    {
      icon: Github,
      href: "https://github.com/sheikhevan",
      ariaLabel: "GitHub",
    },
  ];

  return (
    <header className="w-full py-6 px-4 md:px-6 bg-transparent">
      <div className="flex justify-between items-center w-full">
        <h1 className={`text-xl font-medium ${jetbrainsmono.className}`}>
          <Link href="/" className="text-gray-800 hover:text-black">
            /EvanAlvarez
          </Link>
        </h1>

        <div className="flex items-center space-x-2">
          {iconLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <HoverCard key={index} openDelay={100} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <Link
                    href={link.href}
                    aria-label={link.ariaLabel}
                    className="p-2 rounded-md flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-200 transition-colors"
                  >
                    <IconComponent size={20} />
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto py-1 px-3">
                  <p className="text-sm font-medium">{"/" + link.ariaLabel}</p>
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </div>
      </div>
    </header>
  );
}
