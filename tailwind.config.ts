import type { Config } from 'tailwindcss';

const config: Config = {
	mode: 'jit',
	darkMode: ['class', '[data-theme*="dark"]'],
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			aspectRatio: {
				'2/3': '2 / 3'
			},
			colors: {
				text: 'rgb(var(--text) / <alpha-value>)',
				background: 'rgb(var(--background) / <alpha-value>)',
				primary: 'rgb(var(--primary) / <alpha-value>)',
				secondary: 'rgb(var(--secondary) / <alpha-value>)',
				accent: 'rgb(var(--accent) / <alpha-value>)',
				'x-primary': 'rgb(var(--x-primary) / <alpha-value>)',
				'x-secondary': 'rgb(var(--x-secondary) / <alpha-value>)',
				'x-accent': 'rgb(var(--x-accent) / <alpha-value>)'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
export default config;
