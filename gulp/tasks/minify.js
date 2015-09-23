var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');


 gulp.task('minify', ['setWatch', 'browserSync'], function() {
    
    return gulp.src('./build/app.js')
    	.pipe(uglify())
    	.pipe(rename("app-min.js"))
    	.pipe(gulp.dest("./build"));
});