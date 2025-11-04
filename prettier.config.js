module.exports = {
	printWidth: 80,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: false,
	bracketSpacing: false,
	bracketSameLine: true,
	trailingComma: "all",
	embeddedLanguageFormatting: "auto",
	plugins: [require.resolve("prettier-plugin-tailwindcss")],
	tailwindAttributes: ["className"],
};
