module.exports = {
	hooks: {
		'pre-commit': 'npm run lint && lint-staged',
	},
};
