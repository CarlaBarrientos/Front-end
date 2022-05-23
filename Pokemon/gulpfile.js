const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-uglify');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const del = require('del');
const rename = require('gulp-rename');

let paths = {
    styles_less: {
        src: 'src/*.less',
        dest: 'src/css/'
    },
    styles_css: {
        src: 'src/css/*.css',
        dest: 'dist/css'
    },
    scripts: {
        src: 'src/*.js',
        dest: 'dist/js'
    }
};

function styles_less() {
    return gulp.src(paths.styles_less.src)
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest(paths.styles_css.dest));
}

function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(concat('build.js'))
        .pipe(minify())
        .pipe(rename('build.min.js'))
        .pipe(gulp.dest(paths.scripts.dest))
}

async function clean() {
    return del([__dirname + '/dist']);
}

exports.default = gulp.series(clean, scripts, styles_less);

