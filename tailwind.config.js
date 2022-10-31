/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			textShadow: {
				sm: "0 1px 2px var(--tw-shadow-color)",
				DEFAULT: "0 2px 4px var(--tw-shadow-color)",
				lg: "0 8px 16px var(--tw-shadow-color)",
				brd: "2px 0 var(--tw-shadow-color), -2px 0 var(--tw-shadow-color), 0 2px var(--tw-shadow-color), 0 -2px var(--tw-shadow-color), 1px 1px var(--tw-shadow-color), -1px -1px var(--tw-shadow-color), 1px -1px var(--tw-shadow-color), -1px 1px var(--tw-shadow-color)",
				brdsm:
					"1px 0 var(--tw-shadow-color), -1px 0 var(--tw-shadow-color), 0 1px var(--tw-shadow-color), 0 -1px var(--tw-shadow-color), 1px 1px var(--tw-shadow-color), -1px -1px var(--tw-shadow-color), 1px -1px var(--tw-shadow-color), -1px 1px var(--tw-shadow-color)",
			},
			fontSize: {
				xl45: "2.60rem",
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"text-shadow": value => ({
						textShadow: value,
					}),
				},
				{ values: theme("textShadow") }
			)
		}),
	],
}
