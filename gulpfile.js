const gulp = require('gulp')
const rollup = require('rollup')
const resolve = require('@rollup/plugin-node-resolve')
// const babel = require('gulp-babel')
const babel = require('@rollup/plugin-babel')
const concat = require('gulp-concat')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

// utilty function to get all folders in a directory
const getFolders = function (dir) {
	return fs.readdirSync(dir)
		.filter(function (file) {
			return fs.statSync(path.join(dir, file)).isDirectory();
		});
};

// Without requireJS
const transpileJS = function(){
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

// Without requireJS
const rollupJS = function(){
	return rollup
		.rollup({
			input: '/src/main.js',
			plugins: [resolve, babel]
		})
		.then(bundle => {
			return bundle.write({
				file: './dist/js/main.js',
				format: 'umd'
			})
		})
}

// gulp.task('build', () => {
// 	return rollup
// 		.rollup({
// 			input: './src/main.js'
// 		})
// 		.then(bundle => {
// 			return bundle.write({
// 				file: './dist/js/main.js',
// 				format: 'iife',
// 				name: 'library'
// 			})
// 		})
// })

gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
            baseDir: './dist'
        }
	});
	rollupJS()
	// transpileJS()
	// transpileModules()
	// transpileRJS()
	// https://gulpjs.com/docs/en/getting-started/explaining-globs/
	gulp.watch(['dist/*.html']).on('change', reload);
	gulp.watch(['src/js']).on('change', transpileJS);
});