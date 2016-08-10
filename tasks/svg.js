module.exports = config => {
	const gulp = require('gulp');
	const gutil = require('gulp-util');
	const svgSprite = require('gulp-svg-sprite');
	const c = gutil.colors;

	const svgSpriteConfig = {
		mode: {
			symbol: {
				sprite: 'icons.svg',
			},
		},
	};

	function run(src) {
		gutil.log(`${c.cyan('icons')}: spriting`);
		return gulp.src(src)
			.pipe(svgSprite(svgSpriteConfig))
			.pipe(gulp.dest(config.dest ? `${config.dest}/assets/img` : '/dist/public/assets/img'))
			.on('finish', () => {
				gutil.log(`${c.cyan('icons')}: done`);
			});
	}

	gulp.task('svg', () => {
		const src = 'src/app/images/svg/*.svg';

		if (gutil.env.dev) {
			gutil.log(`${c.cyan('icons')}: watching`);
			gulp.watch(src, () => run(src));
		}

		return run(src);
	});
}
