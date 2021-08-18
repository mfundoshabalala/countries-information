// const colors = require('tailwindcss/colors');
const { screens } = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: [
		'./public/**/*.html',
		'./{components,pages,lib,hooks}/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		screens: {
			xs: '500px',
      		...screens,
		},
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
