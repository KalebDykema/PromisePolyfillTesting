const gulp = require('gulp')
const rollup = require('rollup')
const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const babel = require('gulp-babel')
// const babel = require('@rollup/plugin-babel')
const concat = require('gulp-concat')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

// Without requireJS
const transpileJS = function(){
	gulp.src(`src/*.js`)
		.pipe(concat('transpiled.js'))
		.pipe(babel())
		.pipe(gulp.dest(`src/`))
	rollupJS()
}

const rollupJS = function(){
	bundle()
		.then(()=>reload())
}

const bundle = function(){
	return rollup
		.rollup({
			input: './src/transpiled.js',
			plugins: [resolve.nodeResolve(), commonjs()]
		})
		.then(bundle => {
			return bundle.write({
				file: './dist/js/main.js',
				format: 'iife'
			})
		})
}

gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
            baseDir: './dist'
        }
	});
	// rollupJS()
	transpileJS()
	// https://gulpjs.com/docs/en/getting-started/explaining-globs/
	gulp.watch(['dist/*.html']).on('change', reload);
	gulp.watch(['src/*.js']).on('change', transpileJS);
	// gulp.watch(['src/main.js']).on('change', rollupJS);
});