const configuration = require('../configuration.js');
const gulp = require('gulp');

gulp.task('watch', () => {
    gulp.watch([configuration.path.watch.data, configuration.path.watch.html], gulp.series('html', 'server:reload'));
    gulp.watch(configuration.path.watch.image.main, gulp.series('image:main', 'server:reload'));
    gulp.watch(configuration.path.watch.image.sprite.raster, gulp.series('image:sprite:raster', 'server:reload'));
    gulp.watch(configuration.path.watch.image.sprite.vector, gulp.series('image:sprite:vector', 'server:reload'));
    gulp.watch(configuration.path.watch.script.main, gulp.series('script:main', 'server:reload'));
    gulp.watch(configuration.path.watch.style, gulp.series('style'));
});