var promisePolyfill = require('core-js/modules/es.promise'),

    gulp = require('gulp'),
	mergeStream = require('merge-stream')
	rjs = require('gulp-requirejs')
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
	gulp.src(`src/js/*.js`)
		.pipe(concat('main.js'))
		.pipe(babel({
			presets: [
				// ['@babel/env']
				['@babel/env', {
					useBuiltIns: 'usage',
					corejs: 3,
					modules: 'systemjs'
				}]
			]
		}))
		.pipe(gulp.dest(`dist/js/`))
	reload()
}
// With requireJS
const transpileRJS = function(){
	return rjs({
		baseUrl: `./`,
		name: 'node_modules/core-js/modules/es.promise.js',
		out: 'main.js',
		// shim: {
		// }
	})
	.pipe(babel({
		presets: [
			['@babel/env']
		]
	}))
	.pipe(gulp.dest('dist/js/'))
}
const transpileModules = function(){
	gulp.src('./node_modules/systemjs/dist/system.js')
		.pipe(concat('system.js'))
		.pipe(gulp.dest(`dist/js/`))
}

gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
            baseDir: './dist'
        }
	});
	transpileJS()
	transpileModules()
	// transpileRJS()
	// https://gulpjs.com/docs/en/getting-started/explaining-globs/
	gulp.watch(['dist/*.html']).on('change', reload);
	gulp.watch(['src/js']).on('change', transpileJS);
});