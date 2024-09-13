/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'body': ['Roboto', 'sans-serif'],
			'text': ['Lora', 'serif'],
			'mono': ['Roboto Mono', 'monospace'],
		},
		// colors: {
		// 	'primary': '#000000',
		// 	'secondary': '#333333',
		// 	// 'accent': '#FF7F00',
		// 	// 'accent-dark': '#FF7F00',
		// },
		// container: {
		// 	center: true,
		// 	padding: '1rem',
		// },
	},
		plugins: [],
}
