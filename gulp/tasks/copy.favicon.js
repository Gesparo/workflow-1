'use strict';

module.exports = function() {
  $.gulp.task('copy:favicon', function() {
    return $.gulp.src('./source/favicon.ico', { since: $.gulp.lastRun('copy:fonts') })
        .pipe($.gulp.dest($.config.root + '/'));
  });
};