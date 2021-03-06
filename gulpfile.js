const { src, dest, watch, series } = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var stylus = require('gulp-stylus');

const core = function() {
  return src('./src/index.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(
      cleanCSS({
        format: 'keep-breaks',
      }),
    )
    .pipe(dest('.'));
};

const demoLess = function() {
  return src('./demo/less.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(
      cleanCSS({
        format: 'keep-breaks',
      }),
    )
    .pipe(dest('./demo/'));
};

const demoScss = function() {
  return src('./demo/scss.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(
      cleanCSS({
        format: 'keep-breaks',
      }),
    )
    .pipe(dest('./demo/'));
};

const demoStylus = function() {
    return src('./demo/stylus.styl')
        .pipe(stylus())
        .pipe(autoprefixer())
        .pipe(
            cleanCSS({
                format: 'keep-breaks',
            }),
        )
        .pipe(dest('./demo/'));
};

const watchFile = function() {
  // less/demo.less 有引用 css/core.css 文件，所以需要监听
  watch('./less/*.less', demoLess);
  watch('./sass/*.scss', demoScss);
  watch('./stylus/*.styl', demoStylus);
  watch('./src/index.scss', series(core, demoScss, demoLess, demoStylus));

  // demo
  watch('./demo/scss.scss', demoScss);
  watch('./demo/less.less', demoLess);
  watch('./demo/stylus.styl', demoStylus);
};

exports.default = series(core, demoLess, demoScss, watchFile);
exports.build = series(core, demoLess, demoScss, demoStylus);
