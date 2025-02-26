import type { Config } from 'tailwindcss';

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				mechanical: {
					900: '#141619',
					700: '#2C2E3A',
					500: '#050A44',
					300: '#0A21C0',
					100: '#B3B4BD'
				}
			}
		}
	},
	plugins: []
} satisfies Config;
