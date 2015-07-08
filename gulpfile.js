var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    gutil = require('gulp-util'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');
    mainbowerfiles = require('main-bower-files');
/*routeing*/
gulp.task('sass', function () {
  return sass([
        './src/dist/sass/styles.scss'
         ]) 
        .pipe(gulp.dest('./src/dist/css/'));
});

gulp.task('css' ,function() {
  return gulp.src('./src/dist/css/*.css') 
        .pipe(minifycss())
        .pipe(rename({ prefix: '.min' }))
        .pipe(gulp.dest('./src/assets/css'));
});

gulp.task('js', function(){
  return gulp.src([
        './src/dist/js/extension.js',
        './src/dist/js/filter.js'
         ])
        .pipe(concat('app.js'))
        .pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest('./src/assets'));
});

gulp.task('html', function() {
  return gulp.src(['./src/dist/libs/home.html'])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./src/assets'));
});

gulp.task('image', function () {
    return gulp.src('./src/dist/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./src/assets/images'));
});

gulp.task('bower', function() {
    return gulp.src(mainbowerfiles())
        .pipe(/* what you want to do with the files */)
});

gulp.task('watch', function() {
    gulp.watch('./src/dist/css/*.css', ['css']);
    gulp.watch('./src/dist/sass/*.sass', ['sass']);
    gulp.watch('./src/dist/js/*.js', ['js']);
    gulp.watch('./src/dist/libs/*.html', ['html']);
    gulp.watch('./src/dist/images/*');
});

gulp.task('default', ['watch']);
gulp.task('all', ['sass', 'css', 'js', 'html', 'image']);