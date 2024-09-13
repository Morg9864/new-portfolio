/** @type {import('tailwindcss').Config} */
module.exports = {
	content: {
		relative: true,
		transform: content => content.replace(/taos:/g, ""),
		files: ["./src/**/*.{html,js}", "./*.html", "./*.js"],
	},
	theme: {
		extend: {
			animation: {
				spin: "spin 1s linear infinite",
			},
			keyframes: {
				spin: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
		},
	},
	plugins: [require("taos/plugin")],
	safelist: [
		"!duration-[0ms]",
		"!delay-[0ms]",
		'html.js :where([class*="taos:"]:not(.taos-init))',
	],
};
