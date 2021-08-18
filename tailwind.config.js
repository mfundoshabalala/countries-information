// const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: [
		'./public/**/*.html',
		'./{components,pages,lib,hooks}/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				nunitoSans: "'Nunito Sans', sans-serif",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
};
