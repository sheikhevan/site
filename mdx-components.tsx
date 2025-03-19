import type { MDXComponents } from 'mdx/types';
import { Heading } from '@/components/heading';
import { Subheading } from "@/components/subheading";
import { Wrapper } from "@/components/wrapper";
import {Paragraph} from "@/components/paragraph";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		wrapper: Wrapper,
		h1: Heading,
		h2: Subheading,
		p: Paragraph,
		...components
	};
}
