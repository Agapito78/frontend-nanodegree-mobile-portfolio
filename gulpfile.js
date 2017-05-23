/**
 * Created by agapi on 5/23/2017.
 */
/**
 * Created by agapi on 5/10/2017.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', function() {
    return gulp.src("css/style.css")
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('print-css', function() {
    return gulp.src("css/print.css")
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(concat('print.min.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('js-minify', function() {
    return gulp.src("views/js/main.js")
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest("views/js"));
});
