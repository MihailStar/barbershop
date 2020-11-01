const configuration = require('../configuration.js');
const del = require('del');
const gulp = require('gulp');

gulp.task('clean', () => {
    return del(configuration.directory.output);
});