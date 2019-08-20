'use strict';

import gulp from 'gulp';
import optimize from 'gulp-image';
import convert from 'gulp-rsvg';
import iconfont from 'gulp-iconfont';
import iconfontCss from 'gulp-iconfont-css';
import svgSprite from 'gulp-svg-sprite';

const projectName = 'Sporticon';
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

gulp.task('iconfont', function(){
    return gulp.src(productionAssets + '/svg/*.svg')
      .pipe(iconfontCss({
        fontName: projectName,
        path: 'node_modules/gulp-iconfont-css/templates/_icons.scss',
        targetPath: '_icons.scss',
        fontPath: ''
      }))
      .pipe(iconfont({
        fontName: projectName,
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

/**
 * Generate SVG Sprite in CSS format
 */
gulp.task('createSprite', function(){
    return gulp.src(productionAssets + '/svg/*.svg')
        .pipe(svgSprite({
            mode: {
                css: {
                    dimensions: false,
                    render: {
                        css: true,
                        scss: true
                    },
                    example: true,
                    bust: false,
                },
            }
        }))
        .pipe(gulp.dest(productionAssets));
});

gulp.task('moveGlyph', function(){
    return gulp.src(productionAssets + '/css/sprite.scss')
        .pipe(gulp.dest('docs/_sass'));
});

gulp.task('export', gulp.series('svgScale', 'svgOptimization', 'svgCompression', 'pngExport', 'pdfExport', 'iconfont', 'createSprite'));
gulp.task('servePages', gulp.series('moveGlyph'));