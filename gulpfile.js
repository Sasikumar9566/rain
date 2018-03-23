const gulp = require('gulp');
const concat_js = require('gulp-concat');
const minify_js = require('gulp-uglify');
const minify_css = require('gulp-csso');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const babelify = require('gulp-babel');
const concat_css = require('gulp-concat-css');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');




gulp.task('scss', () => {
  return gulp.src('public/stylesheets/src/main.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(minify_css())
            .pipe(rename('style.min.css'))
            .pipe(gulp.dest('public/stylesheets/build'))
})

gulp.task('adminScss', () => {
  return gulp.src('public/stylesheets/admin/src/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(minify_css())
            .pipe(rename('adminstyles.min.css'))
            .pipe(gulp.dest('public/stylesheets/admin/build'))
});



gulp.task('js', () => {
  return gulp.src('public/javascripts/src/**.js')
          .pipe(concat_js('public/javascripts/build/main.js'))
          .pipe(minify_js({mangle : false}))
          .pipe(babelify({
            presets: ['es2015']
          }))
          .pipe(rename('script.min.js'))
          .pipe(gulp.dest('public/javascripts/build'));
});


gulp.task('adminJs', () => {
  return gulp.src('public/javascripts/admin/src/**.js')
          .pipe(concat_js('public/javascripts/admin/main.js'))
          .pipe(minify_js({mangle : false}))
          .pipe(babelify({
            presets: ['es2015']
          }))
          .pipe(rename('admin-script.min.js'))
          .pipe(gulp.dest('public/javascripts/admin/build'));
});



gulp.task('browser-sync', ['nodemon'], () => {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["public/**/*.*"],
        browser: "chrome.exe",
        port: 1337,
	});
  gulp.watch("public/stylesheets/src/*.scss", ['scss']).on('change', browserSync.reload);

  gulp.watch("public/stylesheets/admin/src/*.scss", ['adminScss']).on('change', browserSync.reload);

  gulp.watch("public/javascripts/src/*.js", ['js']).on('change', browserSync.reload);

  gulp.watch("public/javascripts/admin/**/*.js", ['adminJs']).on('change', browserSync.reload);
  

  // gulp.watch("./routes/**/*.js", ['js']).on('change', browserSync.reload);

  gulp.watch("views/**/*.ejs").on('change', browserSync.reload);

});



gulp.task('nodemon',  (cb) => {

	let started = false;

	return nodemon({
    script: 'bin/www',
    ignore : ['public']
	}).on('start',  () => {
		if (!started) {
			cb();
			started = true;
		}
	});
});



gulp.task('build', ['scss','js']);

gulp.task('default', ['scss', 'adminScss','adminJs', 'js', 'browser-sync']);
