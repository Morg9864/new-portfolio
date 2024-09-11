/** @type {import('tailwindcss').Config} */
module.exports = {
	content: {
		relative: true,
		transform: content => content.replace(/taos:/g, ""),
		files: [
			"./src/**/*.{html,js}", // Tous les fichiers HTML et JS dans le répertoire src
			"./*.html", // Les fichiers HTML à la racine
			"./*.js", // Les fichiers JS à la racine, s'il y en a
		],
	},
	theme: {
		extend: {},
	},
	plugins: [require("taos/plugin")],
	safelist: [
		"!duration-[0ms]",
		"!delay-[0ms]",
		'html.js :where([class*="taos:"]:not(.taos-init))',
	],
};
