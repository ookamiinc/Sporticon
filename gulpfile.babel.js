'use strict';

import gulp from 'gulp';
import optimize from 'gulp-image';
import convert from 'gulp-rsvg';
import iconfont from 'gulp-iconfont';
import iconfontCss from 'gulp-iconfont-css';
import svgSprite from 'gulp-svg-sprite';
import replace from 'gulp-string-replace';
import clean from 'gulp-clean';

const projectName = 'Sporticon';
const productionSVG = 'src/build/svg/*.svg'
const srcSpriteSvg = 'https://raw.githubusercontent.com/ookamiinc/Sporticon/master/src/production/css/svg/sprite.css.svg?sanitize=true';


gulp.task('cleanProduction', function () {
    return gulp.src('src/build', {read: false, allowEmpty: true})
        .pipe(clean());
});

/**
 * Optimize SVGs using SVGO.
 * The svgCompression task minimize the SVGs even further for web use.
 */
gulp.task('svgScale', function () {
    return gulp.src('src/design/svg/*.svg')
        .pipe(convert({
            format: 'svg',
            width: 1000,
            height: 1000
        }))
        .pipe(gulp.dest('src/build/svg'));
});
gulp.task('svgOptimization', () => {
    return gulp.src(productionSVG, { base: './' })
        .pipe(optimize({
            svgo: ['--disable', 'convertPathData'],
            concurrent: 10
        }))
        .pipe(gulp.dest('.'));
});
gulp.task('svgCompression', () => {
    return gulp.src(productionSVG)
        .pipe(optimize())
        .pipe(gulp.dest('src/build/svg_compressed'));
});
/**
 * Export in PNG + PDF format using librsvg
 */
gulp.task('createPNG', function () {
    return gulp.src(productionSVG)
        .pipe(convert())
        .pipe(gulp.dest('src/build/png'));
});
gulp.task('createPDF', function () {
    return gulp.src(productionSVG)
        .pipe(convert({
            format: 'pdf'
        }))
        .pipe(gulp.dest('src/build/pdf'));
});

/**
 * Generate font formats from SVG
 * Note quoted from the author: While this plugin may still be useful for fonts generation or old browser support, you should consider using SVG icons directly.
 * More information at https://www.sarasoueidan.com/blog/icon-fonts-to-svg/
 */
var runTimestamp = Math.round(Date.now()/1000);

gulp.task('createFont', function(){
    return gulp.src(productionSVG)
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
      .pipe(gulp.dest('src/build/fonts'));
});

/**
 * Generate SVG Sprite in CSS format
 */
gulp.task('createSprite', function(){
    return gulp.src(productionSVG)
        .pipe(svgSprite({
            mode: {
                css: {
                    layout: 'horizontal',
                    dimensions: false,
                    render: {
                        css: true,
                        scss: true
                    },
                    example: false,
                    bust: false,
                }
            }
        })) 
        .pipe(gulp.dest('src/build'));
});

gulp.task('moveGlyph', function(){
    return gulp.src('src/build/css/sprite.scss')
        .pipe(gulp.dest('website/_sass'));
});
gulp.task('replaceSpriteSrc', function() {
    return gulp.src('website/_sass/sprite.scss', { base: './' })
      .pipe(replace('svg/sprite.css.svg', srcSpriteSvg))
      .pipe(gulp.dest('.'));
  });

gulp.task('build', gulp.series('cleanProduction', 'svgScale', 'svgOptimization', 'svgCompression', 'createPNG', 'createPDF', 'createFont', 'createSprite'));
gulp.task('update-css', gulp.series('moveGlyph', 'replaceSpriteSrc'));
