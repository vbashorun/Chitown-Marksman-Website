var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require("gulp-rename");
 
gulp.task('sass', function () {
    gulp.src('./app/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/styles'))
    .pipe(livereload());
});
 
gulp.task('sass-watch', function () {
    livereload.listen({ host: 'localhost', port: 8000 });
    gulp.watch('./app/styles/*.scss', ['sass']);
});

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

gulp.task('default', function() {
  // place code for your default task here
});