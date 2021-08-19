var gulp = require('gulp'),
    babel = require('gulp-babel'),
	concat = require('gulp-concat'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload

// utilty function to get all folders in a directory
const getFolders = function (dir) {
	return fs.readdirSync(dir)
		.filter(function (file) {
			return fs.statSync(path.join(dir, file)).isDirectory();
		});
};

// Without requireJS
const transpileJS = function(){
	// gulp.src(promisePolyfill)
	gulp.src(`src/*.js`)
		.pipe(concat('main.js'))
		.pipe(babel({
			presets: [
				['@babel/env']
				// ['@babel/env', {
				// 	useBuiltIns: 'usage',
				// 	corejs: 3,
				// 	modules: 'systemjs'
				// }]
			]
		}))
		.pipe(gulp.dest(`dist/js/`))
	reload()
}

gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
            baseDir: './dist'
        }
	});
	transpileJS()
	// transpileModules()
	// transpileRJS()
	// https://gulpjs.com/docs/en/getting-started/explaining-globs/
	gulp.watch(['dist/*.html']).on('change', reload);
	gulp.watch(['src/js']).on('change', transpileJS);
});