"use client";

import Link from "next/link";
import { FileText, Command, Github, Linkedin } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Navbar() {
  const iconLinks = [
    { icon: FileText, href: "/blog/", ariaLabel: "Blog" },
    { icon: Command, href: "/projects", ariaLabel: "Projects" },
    {
      icon: Github,
      href: "https://github.com/sheikhevan",
      ariaLabel: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/evan-alvarez-27256a326/",
      ariaLabel: "LinkedIn",
    },
  ];

  return (
    <header className="w-full py-6 px-4 md:px-6 bg-transparent">
      <div className="flex justify-between items-center w-full">
        <h1 className={`text-xl font-medium font-mono`}>
          <Link href="/" className="text-sm md:text-lg text-gray-800 hover:text-black">
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
