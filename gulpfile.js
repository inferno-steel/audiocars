const {src, dest, parallel, series, watch} = require('gulp');

const del = require('del');

const sass = require('gulp-sass')(require('sass'));

const concat = require('gulp-concat');

const includeFiles = require('gulp-file-include');

const browserSync = require('browser-sync').create();

const uglify = require('gulp-uglify-es').default;

// Функция преобразования scss в css, переименование директории и сжатие стилей
function styles () {
    return src ('./src/styles/style.scss')
    .pipe(concat('style.min.css'))
    .pipe(sass({style: 'compressed'}).on('error', sass.logError))
    .pipe(dest('./public/css/'))
    .pipe(browserSync.stream());
}

// Функция добавления html файлов
function filesInclude () {
    return src ('./src/pages/*.html')
    .pipe(includeFiles({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(dest('./public/'))
}

// Функция копирования изображений
function copyImages() {
  return src('./src/img/**/*.*', { encoding: false } )
    .pipe(dest('./public/img'));
}

// Функция rкопирования шрифтов
function copyFonts() {
  return src('./src/fonts/*', { encoding: false } )
    .pipe(dest('./public/fonts'));
}

// Функция очистки папки public 
function clean() {
    return del.sync('./public/', { force: true })
  }

// Функция запуска сервера
function browsersync () {
  browserSync.init({
    server: {
        baseDir: "./public/"
    }
});
}

// Функция отслеживания изменений
function watching () {
  watch(['src/styles/style.scss'], styles),
  watch(['src/components/**/*.scss'], styles)
  watch(['src/components/**/*.html'], filesInclude)
  watch(['src/pages/**/*.html'], filesInclude),
  watch(['src/**/*.js'], script)
}

// Функция объединения всех js файлов и минимазиция
function script (params) {
  return src('src/**/*.js')
     .pipe(concat('main.min.js'))
     .pipe(uglify())
     .pipe(dest('./public/js/'))
}


exports.filesInclude = filesInclude;
exports.clean = clean;
exports.styles = styles;
exports.browsersync = browsersync;
exports.watching = watching;
exports.copyImages = copyImages;
exports.copyFonts = copyFonts;
exports.script = script;

exports.default = parallel(
  clean,
  styles,
  script,
  filesInclude,
  copyImages,
  copyFonts,
  browsersync,
  watching
)