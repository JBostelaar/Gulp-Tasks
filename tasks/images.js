module.exports = config => {
	const gulp = require('gulp');
	const gutil = require('gulp-util');

	function run(src) {
		return gulp.src(src)
			.pipe(gulp.dest(config.dest ? `${config.dest}/assets/img` : '/dist/public/assets/img'));
	}

	gulp.task('images', () => {
		const src = [
			'src/app/images/**/*',
			'!src/app/images/svg/*',
		];

		return run(src);
	});
};
