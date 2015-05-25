var gulp = require('gulp');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');
var nodemon = require('gulp-nodemon');
var chokidar = require('chokidar');
var winston = require('winston');

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
    colorize: true,
});
var log = winston.log;

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
var watcher = chokidar.watch([jsxSrcPath].join(','), {
    ignored: /[\/\\]\./,
    persistent: true
});
watcher
  .on('add',    function(path)  { log('info', path + 'has been added'); })
  .on('change', function(path)  { log('info', path + 'has been changed'); })
  .on('error',  function(error) { log('error', error); })

gulp.task('dev', ['build', 'startServer'], function () {});
gulp.task('default', ['build', 'startServer'], function () {});
