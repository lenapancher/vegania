module.exports = {
	root: true,
	extends: ["expo", "prettier"],
	ignorePatterns: ["dist/*", "node_modules/*"],
	rules: {
		"react/display-name": "off",
		"react/prop-types": "off",
		"no-console": "warn",
	},
};
