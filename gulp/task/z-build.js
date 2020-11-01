const gulp = require('gulp');

gulp.task('build', gulp.parallel(
    'html',
    'image:main',
    'image:sprite:raster',
    'image:sprite:vector',
    'script:library',
    'script:main',
    'style'
));