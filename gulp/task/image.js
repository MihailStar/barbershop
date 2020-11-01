const configuration = require('../configuration.js');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const imagemin = require('gulp-imagemin');
const mergeStream = require('merge-stream');
const newer = require('gulp-newer');
const rename = require('gulp-rename');
const spritesmith = require('gulp.spritesmith');
const svgstore = require('gulp-svgstore');
const vinylBuffer = require('vinyl-buffer');

const imageminConfiguration = [
    imagemin.gifsicle({
        interlaced: true
    }),
    imagemin.jpegtran({
        progressive: true
    }),
    imagemin.optipng({
        optimizationLevel: 5
    }),
    imagemin.svgo({
        plugins: [{
            cleanupIDs: false
        }]
    })
];

gulp.task('image:main', () => {
    return gulp
        .src(configuration.path.input.image.main)
        .pipe(newer(configuration.path.output.image.main))
        .pipe(imagemin(imageminConfiguration))
        .pipe(gulp.dest(configuration.path.output.image.main));
});

gulp.task('image:sprite:raster', () => {
    const spriteData = gulp
        .src(configuration.path.input.image.sprite.raster)
        .pipe(spritesmith({
            algorithm: 'top-down',
            cssName: 'sprite.css',
            imgName: 'sprite.png',
            padding: 45
        }));
    const imageStream = spriteData.img
        .pipe(vinylBuffer())
        .pipe(imagemin(imageminConfiguration))
        .pipe(gulp.dest(configuration.path.output.image.sprite.raster));
    const styleStream = spriteData.css
        .pipe(gulpIf(configuration.isDevelopment, gulp.dest(configuration.path.output.image.sprite.raster)));
    return mergeStream(imageStream, styleStream);
});

gulp.task('image:sprite:vector', () => {
    return gulp
        .src(configuration.path.input.image.sprite.vector)
        .pipe(rename({
            prefix: 'icon-'
        }))
        .pipe(imagemin(imageminConfiguration))
        .pipe(svgstore())
        .pipe(gulp.dest(configuration.path.output.image.sprite.vector));
});