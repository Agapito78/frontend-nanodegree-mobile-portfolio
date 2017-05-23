/**
 * Created by agapi on 5/23/2017.
 */
/**
 * Created by agapi on 5/10/2017.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', function() {
    return gulp.src("css/*.css")
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('css'));
});
