var wpThemeFolder = 'huc-theme';
var siteFolder = 'huc-theme';
var dst = 'wp-content/themes/'+wpThemeFolder;
var prebuild = 'prebuild';




//basic files
var fHtml= 'src/**/*.html';
var fxHtml= 'src/**/*_.html';
var fScss= 'src/scss/**/*.scss';
var fImages= 'src/images/**/*';
var fJs= 'src/js/**/*';
var fJson= 'src/**/*.json';
var fPhp= 'src/**/*.php';
var fMd= 'src/**/*.md';
var fWp= 'src/wp/**/*';

//plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var fileinclude = require('gulp-file-include');
var clean = require('gulp-clean');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var html2jsx = require('gulp-html2jsx');
var replace = require('gulp-replace');
var sassImportJson = require('gulp-sass-import-json');
var markdown = require('markdown');
var imageResize = require('gulp-image-resize');
var md   = require('gulp-remarkable');
var dom = require("gulp-jsdom");
//browserSync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '_dist'
    },
    browser: ["google chrome"], //, "firefox"
  })
})


// clean all previous output
gulp.task('clean', function () {
    return gulp.src([dst, prebuild, updogRootPath+siteFolder, toWPserver], {read: false})
        .pipe(clean({force: true}))
});





//prebuild a json file build gulp json
gulp.task('preBuildJson', function() {

   gulp.src(['src/ds/ds-values.json'])
    .pipe(plumber())
    .pipe(fileinclude({
      prefix: '&&',
      basepath: '@root'
    }))
		.pipe(gulp.dest(dst))
    .pipe(gulp.dest('src/scss'))

});


//create css from sass
gulp.task('sass', ['preBuildJson'], function() {
  return gulp.src(fScss)
    .pipe(plumber())
    .pipe(sassImportJson())
    .pipe(sass())
    .pipe(gulp.dest(dst+'/css'))

});





//create basis HTML pages with file includes
gulp.task('html',['sass'], function() {
   gulp.src([fHtml,  '!src/ds/**/*.html', '!src/wp', '!src/wp-inc/**/*.html'])
    .pipe(plumber())
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@root',
      context: { wp: false },
      filters: { markdown: markdown.parse }
    }))
		.pipe(gulp.dest(dst))




});

// copy images and js
gulp.task('distAssets',['html'], function() {
  gulp.src([fJs])
  .pipe(gulp.dest(dst+'/js'))


  gulp.src(['src/images/icons/**/*'])
  .pipe(gulp.dest(dst+'/images/icons'))


  gulp.src(['src/images/favi/**/*'])
  .pipe(gulp.dest(dst+'/images/favi'))


})


gulp.task('resizeImages', function () {
  gulp.src([fImages, '!src/images/favi/**/*', '!src/images/icons/**/*'])
    .pipe(imageResize({
      width : 700,
      quality: .9,
      noProfile: true
    }))
    .pipe(gulp.dest(dst+'/images'))

});



gulp.task('preBuildJsx', function () {
    return gulp.src(fxHtml)
        .pipe(html2jsx({}))
        .pipe(replace('<', '&lt;'))
        .pipe(replace('>', '&gt;'))
        .pipe(gulp.dest(dst+'/'+prebuild));
});


gulp.task('build',['distAssets'], function() {
  gulp.src([fJs])
  .pipe(gulp.dest(dst+'/js'))

  // gulp.src([fImages])
  // .pipe(gulp.dest(dst+'/images'))

})


// watch
gulp.task('watch', ['distAssets', 'browserSync', 'preBuildJsx'], function (){
  gulp.watch([fHtml, fScss, fJs, fJson, fPhp,fMd], ['distAssets', 'preBuildJsx']);
  gulp.watch([fHtml, fScss, fJs, fJson, fPhp,fMd], browserSync.reload);
});

gulp.task('default', ['watch']);
