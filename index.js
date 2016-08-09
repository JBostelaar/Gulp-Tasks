module.exports = (gulp, gutil) => ({
	babel: require('./tasks/babel')(gulp, gutil),
	images: require('./tasks/images')(gulp, gutil),
	nodemon: require('./tasks/nodemon')(gulp, gutil),
	scripts: require('./tasks/scripts')(gulp, gutil),
	styles: require('./tasks/styles')(gulp, gutil),
	svg: require('./tasks/svg')(gulp, gutil),
	symlink: require('./tasks/symlink')(gulp, gutil),
});
