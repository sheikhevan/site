import type { MDXComponents } from "mdx/types";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Wrapper } from "@/components/wrapper";
import { Paragraph } from "@/components/paragraph";
import { Pre } from "@/components/pre";
import { Code } from "@/components/code";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: Wrapper,
    h1: Heading,
    h2: Subheading,
    p: Paragraph,
    pre: Pre,
    code: Code,
    ...components,
  };
}
