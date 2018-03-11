const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const cssminify = require('gulp-cssmin');

// Copies html to dist folder
gulp.task('copyHtml', function(){
    return gulp.src('./*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('imgOpt', function(){
    return gulp.src('./images/{**\/*.*,*.*}')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});
gulp.task('minify', function(){
    return gulp.src('./js/*.js')
    .pipe(uglify().on('error', function(e){
        console.log(e);
    }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copyAssets', function(){
    return gulp.src('./assets/**/*.*')
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('copyJSON', function(){
    return gulp.src(['!package.json', '*.json'])
    .pipe(gulp.dest('dist'));
});

gulp.task('minifycss', function(){
    return gulp.src('./css/*.css')
    .pipe(cssminify().on('error', function(e){
        console.log(e);
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('copyFonts', function(){
    return gulp.src('./fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('default',['copyHtml', 'imgOpt', 'minifycss', 'minify', 'copyAssets', 'copyJSON', 'copyFonts']);

gulp.task('watch', function(){
    gulp.watch('./*.html',['copyHtml']);
    gulp.watch(['!package.json', '*.json'],['copyJSON']);
    gulp.watch('./fonts/**/*.*',['copyFonts']);
    gulp.watch('./assets/**/*.*',['copyAssets']);
    gulp.watch('./images/{**\/*.*,*.*}',['imgOpt']);
    gulp.watch('./css/*.css',['minifycss']);
    gulp.watch('./js/*.js',['minify']);
});