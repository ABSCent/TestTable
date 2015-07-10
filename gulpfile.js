var gulp = require('gulp'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('gulp-browserify'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify');
gulp.task('sass', function () {
    gulp.src('app/styles/*.scss')
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(minifyCSS())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('app/dist/styles'))
});
gulp.task('js', function () {
    gulp.src(['app/scripts/**/*.js'])
        .pipe(ngAnnotate())
        .pipe(sourcemaps.init())
        .pipe(browserify())
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('app/dist/scripts'));
});
gulp.task('libs', function () {
    gulp.src('bower_components/**/*.min.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('app/dist/scripts'));
});
gulp.task('default', function () {
    gulp.run('sass','js','libs');
});
gulp.task('watch', function() {
    gulp.watch('app/styles/*.scss',['sass']);
    gulp.watch('app/scripts/**/*js',['js']);
});
