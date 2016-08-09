module.exports = (gulp, gutil) => {
	function run(src) {
		return gulp.src(src)
			.pipe(gulp.dest('dist/public/assets/img'));
	}

	gulp.task('images', () => {
		const src = [
			'src/app/images/**/*',
			'!src/app/images/svg/*',
		];

		return run(src);
	});
};
