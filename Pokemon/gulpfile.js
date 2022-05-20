const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const gulp = require('gulp');
const less = require('gulp-less');
const del = require('del');

const compileLess = function () {
    return gulp.src('src/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css/'));
};
gulp.task('less', compileLess);

const compileUglify = function () {
    return gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/uglify.js'));
};
gulp.task('uglify', compileUglify);

const compileConcat = function () {
    return gulp.src('src/*.js')
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('./dist/js/'));
};
gulp.task('concat', compileConcat);

const compileClean = function () {
    return del('dist/**', { force: true });
};
gulp.task('clean', compileClean);

