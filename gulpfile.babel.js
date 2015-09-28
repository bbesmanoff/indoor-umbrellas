import gulp from 'gulp';
import gutil from 'gulp-util';
import server from './server';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';

gulp.task('default', ['build', 'server', 'watch']);
gulp.task('build', ['build:css', 'build:html', 'build:js']);

gulp.task('build:css', () => {
   return gulp.src(['./app/**/*.css'])
     .pipe(gulp.dest('./dist'));
});

gulp.task('build:html', () => {
  return gulp.src(['./app/**/*.html'])
    .pipe(gulp.dest('./dist'));
});

gulp.task('build:js', () => {
  const b = browserify({
    debug: process.env.NODE_ENV !== 'production'
  });

  return b.transform(babelify)
    .add('app/js/index.js')
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('server', () => {
  const port = process.env.PORT || 3000;
  server.listen(port, () => console.log(`server listening at port ${port}`));
});

gulp.task('watch', () => {
  gulp.watch('app/**/*', ['build']);
});
