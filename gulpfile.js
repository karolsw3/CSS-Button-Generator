var gulp = require('gulp')
var pug = require('gulp-pug')
const debug = require('gulp-debug')
var stylus = require('gulp-stylus')
const babel = require('gulp-babel')

gulp.task('html', function () {
  return gulp.src('src/*.pug')
    .pipe(debug({title: 'Html:'}))
    .pipe(pug())
    .pipe(gulp.dest(''))
})

gulp.task('css', function () {
  return gulp.src('src/**/*.styl')
    .pipe(debug({title: 'Css:'}))
    .pipe(stylus())
    .pipe(gulp.dest('build'))
})

gulp.task('js', () =>
  gulp.src('src/js/*.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('build/js'))
)

gulp.task('default', [ 'html', 'css', 'js' ])
