/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontSize: {
				xl45: '2.60rem',
			},
			gridTemplateRows: {
				8: 'repeat(8, minmax(0, 1fr))',
				9: 'repeat(9, minmax(0, 1fr))',
				10: 'repeat(10, minmax(0, 1fr))',
				11: 'repeat(11, minmax(0, 1fr))',
				12: 'repeat(11, minmax(0, 1fr))',
				13: 'repeat(11, minmax(0, 1fr))',
			},
			gridRowStart: {
				8: '8',
				9: '9',
				10: '10',
				11: '11',
				12: '12',
				13: '13',
			},
			dropShadow: {
				titleBW: ['0px 0px 1px #040', '0px 0px 2px black', '0px 0px 5px white'],
				blackBorder: '0px 0px 2px black',
			},
			screens: {
				priority: '0px',
			},
		},
	},
	plugins: [require('daisyui')],
}
