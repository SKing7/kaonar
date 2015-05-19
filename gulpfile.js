var gulp = require('gulp');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');
var nodemon = require('gulp-nodemon');
 
var publicSrc = './public/build';
var jsxSrcPath = 'public/**/*.jsx';

gulp.task('build', function () {
    gulp.src(jsxSrcPath)
        .pipe(watch(jsxSrcPath))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.init())
        .pipe(react())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(publicSrc));
});
gulp.task('startServer', function () {
  nodemon({
    script: 'app.js',
    watch: ['config/**/**'],
    ext: 'js',
    env: { 'NODE_ENV': 'development' }
  })
})
gulp.task('dev', ['build', 'startServer'], function () {});
gulp.task('default', ['build', 'startServer'], function () {});
