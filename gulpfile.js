var gulp = require('gulp'),
		del = require('del'),
		sass = require('gulp-sass'),
		minifycss = require('gulp-clean-css'),
		concatcss = require('gulp-concat-css'),
		jshint = require('gulp-jshint'),
		uglify = require('gulp-uglify'),
		ngannotate = require('gulp-ng-annotate'),
		useref = require('gulp-useref'),
		gulpif = require('gulp-if'),
		wiredep = require('wiredep').stream,
		inject = require('gulp-inject'),
		htmlmin = require('gulp-htmlmin'),
		connect = require('gulp-connect');


// Clear
gulp.task('clear:temp', function () {
	return del.sync('client/temp');
});
gulp.task('clear:dist', function () {
	return del.sync('client/dist');
});


// CSS
// gulp.task('css', ['sass'], function () {
//   // return gulp.src('client/temp/css/moose.min.css')
//   return gulp.src('client/temp/css/**/*.css')
//     .pipe(minifycss({ keepSpecialComments: 0 }))
//     .pipe(gulp.dest('client/dist/css'));
// });
// gulp.task('concatcss', ['sass'], function () {
//   return gulp.src('client/temp/css/**/*.css')
//     .pipe(concatcss('moose.min.css'))
//     .pipe(gulp.dest('client/temp/css'));
// });
gulp.task('sass', function () {
  return gulp.src('client/app/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('client/temp'))
    .pipe(connect.reload());
});


// JS
gulp.task('jshint', ['ngannotate'], function () {
	return gulp.src('client/temp/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(connect.reload());
});
gulp.task('ngannotate', function () {
	return gulp.src('client/app/**/*.js')
		.pipe(ngannotate())
		.pipe(gulp.dest('client/temp'));
});


// HTML
gulp.task('html:serve', ['html:bower'], function () {
  return gulp.src(['client/app/**/*.html', '!client/app/index.html'])
    .pipe(gulp.dest('client/temp'))
    .pipe(connect.reload());
});
gulp.task('html:bower', function () {
	return gulp.src('client/app/index.html')
		.pipe(wiredep({ ignorePath: '../../' }))
    .pipe(gulp.dest('client/temp'));
});


// Useref
// gulp.task('js', ['jshint'], function () {
// 	return gulp.src('client/app/index.html')
//     .pipe(useref())
//     .pipe(gulpif('*.js', uglify()))
//     .pipe(gulp.dest('client/dist'));
// });


// Server
gulp.task('serve', ['clear:temp', 'sass', 'jshint', 'html:serve', 'watch'], function () {
  connect.server({
  	root: 'client/temp',
  	livereload: true,
  	middleware: function (connect) {
			return [connect().use('/bower_components', connect.static('bower_components'))];
    }
  });
});



// Watch
gulp.task('watch', function () {
	gulp.watch('client/app/**/*.sass', ['sass']);
	gulp.watch('client/app/**/*.js', ['jshint']);
	gulp.watch('client/app/**/*.html', ['html:serve']);
});


// Build
// gulp.task('build', ['clear', 'css'], function () {
// 	// Clear temp folder
// 	return del.sync('client/temp');
// });


// Default task
// gulp.task('default', ['build'], function () {});
