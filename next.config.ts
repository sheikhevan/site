import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
import rehypeHighlight from "rehype-highlight";

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions` to include markdown and MDX files
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm, remarkMath],
		rehypePlugins: [rehypeMathjax, rehypeHighlight],
	}
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);