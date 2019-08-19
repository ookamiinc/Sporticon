'use strict';

import gulp from 'gulp';
import optimize from 'gulp-image';
import convert from 'gulp-rsvg';
import iconfont from 'gulp-iconfont';
import iconfontCss from 'gulp-iconfont-css';

const fontName = 'Sporticon';
const productionAssets = 'src/production'

/**
 * Optimize SVGs using SVGO.
 * The svgCompression task minimize the SVGs even further for web use.
 */
gulp.task('svgScale', function () {
    return gulp.src(productionAssets + '/svg/*.svg')
        .pipe(convert({
            format: 'svg',
            width: 1000,
            height: 1000
        }))
        .pipe(gulp.dest(productionAssets + '/svg'));
});
gulp.task('svgOptimization', () => {
    return gulp.src(productionAssets + '/svg/*.svg')
        .pipe(optimize({
            svgo: ['--disable', 'convertPathData'],
            concurrent: 10
        }))
        .pipe(gulp.dest(productionAssets + '/svg'));
});
gulp.task('svgCompression', () => {
    return gulp.src(productionAssets + '/svg/*.svg')
        .pipe(optimize())
        .pipe(gulp.dest(productionAssets + '/svg_compressed'));
});
/**
 * Export in PNG + PDF format using librsvg
 */
gulp.task('pngExport', function () {
    return gulp.src(productionAssets + '/svg/*.svg')
        .pipe(convert())
        .pipe(gulp.dest(productionAssets + '/png'));
});
gulp.task('pdfExport', function () {
    return gulp.src(productionAssets + '/svg/*.svg')
        .pipe(convert({
            format: 'pdf'
        }))
        .pipe(gulp.dest(productionAssets + '/pdf'));
});
/**
 * Generate font formats from SVG
 * Note quoted from the author: While this plugin may still be useful for fonts generation or old browser support, you should consider using SVG icons directly.
 * More information at https://www.sarasoueidan.com/blog/icon-fonts-to-svg/
 */

var runTimestamp = Math.round(Date.now()/1000);
/*
gulp.task('Iconfont', function(){
    return gulp.src(productionAssets + '/svg/*.svg')
        .pipe(iconfont({
            fontName: fontName,
            prependUnicode: false,
            formats: ['ttf', 'eot', 'woff', 'woff2'],
            timestamp: runTimestamp,
            fontHeight: 1024
        }))
        .on('glyphs', function(glyphs, options) {
          // CSS templating, e.g.
          console.log(glyphs, options);
        })
      .pipe(gulp.dest(productionAssets + '/fonts'));
});
*/

gulp.task('iconfont', function(){
    return gulp.src(productionAssets + '/svg/*.svg')
      .pipe(iconfontCss({
        fontName: fontName,
        path: 'node_modules/gulp-iconfont-css/templates/_icons.scss',
        targetPath: '_icons.scss',
        fontPath: ''
      }))
      .pipe(iconfont({
        fontName: fontName,
        prependUnicode: false,
        formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
        timestamp: runTimestamp,
        fontHeight: 1024
       }))
       .on('glyphs', function(glyphs, options) {
        // CSS templating, e.g.
        console.log(glyphs, options);
      })
      .pipe(gulp.dest(productionAssets + '/fonts'));
  });

gulp.task('default', gulp.series('svgScale', 'svgOptimization', 'svgCompression', 'pngExport', 'pdfExport', 'iconfont'));