module.exports = gulp => {
	gulp.task('symlink', ['babel'], () => {
		const symlink = require('gulp-symlink');

		const streams = ['dist/*', '!dist/public'].map(dir => (
			gulp.src(`dist/${dir}`)
				.pipe(symlink(`node_modules/${dir}`, { force: true }))
		));

		return require('merge-stream')(streams);
	});
};
