module.exports = config => ({
	babel: require('./tasks/babel')(config),
	images: require('./tasks/images')(config),
	nodemon: require('./tasks/nodemon')(config),
	scripts: require('./tasks/scripts')(config),
	styles: require('./tasks/styles')(config),
	svg: require('./tasks/svg')(config),
	symlink: require('./tasks/symlink')(config),
});
