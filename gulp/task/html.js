const configuration = require('../configuration.js');
const data = require('gulp-data');
const fs = require('fs');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const htmlBeautify = require('gulp-html-beautify');
const nunjucksRender = require('gulp-nunjucks-render');
const replace = require('gulp-replace');

gulp.task('html', () => {
    return gulp
        .src(configuration.path.input.html)
        .pipe(data(() => {
            return JSON.parse(fs.readFileSync(configuration.path.input.data));
        }))
        .pipe(nunjucksRender({
            path: `${configuration.directory.input}`
        }))
        .pipe(gulpIf(!configuration.isDevelopment, htmlBeautify({
            eol: '\n',
            html: {
                indent_inner_html: true
            }
        })))
        .pipe(gulpIf(!configuration.isDevelopment, replace(/\n{2,}/g, '\n')))
        .pipe(gulp.dest(configuration.path.output.html));
});