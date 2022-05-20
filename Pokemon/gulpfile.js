let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let gulp = require('gulp');
let less = require('gulp-less');
const cleanDir = require('gulp-clean-dir');

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
    return gulp.src('.')
        .pipe(cleanDir('./dist'))
        .pipe(gulp.dest('./dist'));
};
gulp.task('clean', compileClean);

