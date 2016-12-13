var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    shell = require('gulp-shell');

// Views
gulp.task('view-refresh', function () {
    gulp.src('./app/views/*.html')
    .pipe(livereload());
});

gulp.task('view-watch', function () {
    livereload.listen();
    gulp.watch('./app/views/*.html', ['view-refresh']);
});
 
// CSS
gulp.task('sass', function () {
    gulp.src('./app/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/styles'))
    .pipe(livereload());
});
 
gulp.task('sass-watch', function () {
    livereload.listen();
    gulp.watch('./app/styles/*.scss', ['sass']);
});

// Javascript
gulp.task('js-refresh', function () {
    gulp.src('./app/controllers/*.js')
    .pipe(livereload());
});

gulp.task('controller-watch', function () {
    livereload.listen();
    gulp.watch('./app/controllers/*.js', ['js-refresh']);
});

// CMD
gulp.task('startServer', shell.task([
  'npm start'
]));

// browser refresh -- 
// serves as an example of triggering livereload without any tasks in between
/*gulp.task('testResponse', function() {
    gulp.src('./app/index.html')
    .pipe(livereload());
});

gulp.task('test-watch', function() {
    livereload.listen();
    gulp.watch('./app/index.html', ['testResponse']);
});*/

gulp.task('default', ['view-watch','controller-watch', 'sass-watch', 'startServer'], function() {
  // place code for your default task here
});