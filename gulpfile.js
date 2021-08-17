var Promise = require('promise-polyfill')
    gulp = require('gulp'),
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

const transpileJS = function(strData=false){
	console.log(`Transpile JS: ${strData}`)
	gulp.src([`src/js/*.js`])
		.pipe(concat('main.js'))
		.pipe(babel({
			presets: [
                ['@babel/env', {
                    useBuiltIns: 'entry',
                    corejs: 3,
                    modules: false
                }]
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
	// https://gulpjs.com/docs/en/getting-started/explaining-globs/
	gulp.watch(['dist/*.html']).on('change', reload);
	gulp.watch(['src/js']).on('change', transpileJS);
});