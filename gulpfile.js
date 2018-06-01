// postTitle VARS
var themeName = 'huc2018';
var wp = true;

// DATA
var siteJson = require('./content/data/site.json');

// GULP VARS
var gulp = require('gulp'),
    handlebars = require('gulp-compile-handlebars'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    plumber = require('gulp-plumber'),
    md   = require('gulp-remarkable'),
    imageResize = require('gulp-image-resize'),
    replace = require('gulp-replace');
var browserSync = require('browser-sync').create();
const using = require('gulp-using');

// HANDLEBARS
var options = {
    ignorePartials: true,
    batch : ['./src/components', './prebuild']
    }

// files paths
var dst = 'wp-content/themes/'+themeName;
var prebuild = 'prebuild';
var fScss= 'src/scss/**/*.scss';
var fHtml= 'src/**/*.html';
var fImages= 'src/images/**/*';
var fJs= 'src/js/**/*';
var fJson= 'src/**/*.json';
var fPhp= 'src/**/*.php';
var fMd= 'content/**/*.md';



//browserSync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: dst
    },
    browser: ["google chrome"], //, "firefox"
  })
})



////////////////    IMAGES

gulp.task('images-big', function () {
  return gulp.src(['content/images/**/*'])
    .pipe(using())
    .pipe(imageResize({
      width : 900,
      quality: .9,
      noProfile: true
    }))
    .pipe(gulp.dest(prebuild+'/images/content'))
});


gulp.task('images-small', ['images-big'], function () {
  return gulp.src(['content/images/**/*'])
    .pipe(using())
    .pipe(imageResize({
      width : 300,
      quality: .7,
      noProfile: true
    }))
    .pipe(rename(function (path) {
      path.basename += "-small";
    }))
    .pipe(gulp.dest(prebuild+'/images/content'))

});

gulp.task('img', ['images-small'], function () {
});




//////////////////   PREBUILD

gulp.task('preClean', function () {
    return gulp.src([prebuild+"/**/*.html", 'src/components/nav.html'], {read: false})
        .pipe(plumber())
        .pipe(clean({force: true}))
});



gulp.task('nav', ['preClean'], function() {
    return gulp.src('./src/templates/nav.html')
        .pipe(plumber())
        .pipe(handlebars(siteJson, options))
        .pipe(rename("nav.html"))
        .pipe(gulp.dest('src/components'));
});






gulp.task('convertMD', ['nav'], function () {
  return gulp.src("./content/**/*.md")
    .pipe(md())
    .pipe(replace('&lt;', '<'))
    .pipe(replace('&gt;', '>'))
    .pipe(replace('&quot;', '"'))
    .pipe(replace('src="images/', 'src="images/content/')) //.jpg"
    .pipe(replace('.jpg', '-small.jpg'))
    .pipe(rename(function (path) {
      path.extname = ".html";
    }))
    .pipe(gulp.dest(prebuild));

});




gulp.task('pre', ['convertMD'], function() {

});


//////////////////   SITE BUILD

  // clean all previous output
gulp.task('clean', function () {
    return gulp.src([dst], {read: false})
        .pipe(plumber())
        .pipe(clean({force: true}))
});


gulp.task('comps', ['clean'], function () {
  return gulp.src("src/components/**/*")
    .pipe(plumber())

    .pipe(replace('{{-', '$<$'))
    .pipe(replace('-}}', '$>$'))
    .pipe(handlebars(siteJson, options))

    .pipe(gulp.dest(prebuild));

});







//create css from sass
gulp.task('sass', ['comps'], function() {
  return gulp.src(fScss)
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest(dst+'/css'))

});

if (!wp) {
  gulp.task('buildFromTemplates', ['sass'], function() {

          for(var i=0; i<siteJson.pages.length; i++) {
              var page = siteJson.pages[i],
                  fileName = page.name.replace(/ +/g, '-').toLowerCase();
                  template = page.template;

              gulp.src('./src/templates/'+template+'.html')
                  .pipe(plumber())
                  .pipe(handlebars(page, options))
                  .pipe(rename(fileName + ".html"))
                  .pipe(gulp.dest(dst));
          }
  });
} else {
  gulp.task('wp-template-files', ['sass'], function () {
    return gulp.src("src/templates/**/*")
      .pipe(plumber())
      .pipe(replace('{{-', '$<$'))
      .pipe(replace('-}}', '$>$'))
      .pipe(handlebars(siteJson, options))
      .pipe(replace('$<$', '{{'))
      .pipe(replace('$>$', '}}'))
      .pipe(gulp.dest(dst));

  });
}





gulp.task('distAssets',['wp-template-files'], function() {
  gulp.src([fJs])
  .pipe(gulp.dest(dst+'/js'))

  gulp.src([fImages])
  .pipe(gulp.dest(dst+'/images'))

  gulp.src(['prebuild/images/content/*'])
  .pipe(gulp.dest(dst+'/images/content'))

  gulp.src(['src/wp/*', 'src/wp/_inc/*', 'src/wp/templates/*'])
  .pipe(gulp.dest(dst))

  gulp.src(['src/components/**/*'])
  .pipe(gulp.dest(dst))
})



// watch
gulp.task('watch', ['wp', ], function (){ //'browserSync'
  gulp.watch([fHtml, fScss, fJs, fJson, fMd, fPhp], ['wp']);
  //gulp.watch([fHtml, fScss, fJs, fJson, fMd, fPhp], browserSync.reload);
});

gulp.task('default', ['watch']);

gulp.task('build', ['distAssets']);



gulp.task('wp', ['distAssets'], function() {
  setTimeout(function(){
    return gulp.src([dst+'/**/*'])
    .pipe(gulp.dest('/Users/basdoppen/Webserver/wp-huc/wp-content/themes/'+themeName))
  }, 4000);

})
