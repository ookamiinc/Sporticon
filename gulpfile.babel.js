'use strict';

///// Import
import gulp from 'gulp';
import optimize from 'gulp-image';
import convert from 'gulp-rsvg';
import iconfont from 'gulp-iconfont';
import iconfontCss from 'gulp-iconfont-css';
import svgSprite from 'gulp-svg-sprite';
import replace from 'gulp-string-replace';
import clean from 'gulp-clean';

const projectName = 'Sporticon';
const buildSVG = 'src/build/svg/*.svg'
const srcSpriteSvg = 'https://raw.githubusercontent.com/ookamiinc/Sporticon/master/src/export/css/svg/sprite.css.svg?sanitize=true';

var runTimestamp = Math.round(Date.now()/1000);

///// Tasks
// clean
gulp.task('clean', function () {
     return gulp.src('src/build', {read: false, allowEmpty: true})
         .pipe(clean());
 });

// build
gulp.task('copySvgToBuild', function () {
  return gulp.src('src/design/svg/*.svg')
      .pipe(gulp.dest('src/build/svg'));
});
gulp.task('svgScale', function () {
    return gulp.src(buildSVG, { base: './' })
        .pipe(convert({
            format: 'svg',
            width: 1000,
            height: 1000
        }))
        .pipe(gulp.dest('.'));
});
gulp.task('svgOptimization', () => {
    return gulp.src(buildSVG, { base: './' })
        .pipe(optimize({
            svgo: ['--disable', 'convertPathData'],
            concurrent: 10
        }))
        .pipe(gulp.dest('.'));
});
gulp.task('svgCompression', () => {
    return gulp.src(buildSVG)
        .pipe(optimize())
        .pipe(gulp.dest('src/build/svg_compressed'));
});
gulp.task('createPNG', function () {
    return gulp.src(buildSVG)
        .pipe(convert())
        .pipe(gulp.dest('src/build/png'));
});
gulp.task('createPDF', function () {
    return gulp.src(buildSVG)
        .pipe(convert({
            format: 'pdf'
        }))
        .pipe(gulp.dest('src/build/pdf'));
});
gulp.task('createFont', function(){
    return gulp.src(buildSVG)
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
gulp.task('createSprite', function(){
    return gulp.src(buildSVG)
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

    return gulp.src('src/build/css/sprite.scss')
        .pipe(gulp.dest('website/_sass'));
});
gulp.task('replaceSpriteSrc', function() {
    return gulp.src('website/_sass/sprite.scss', { base: './' })
      .pipe(replace('svg/sprite.css.svg', srcSpriteSvg))
      .pipe(gulp.dest('.'));
});

gulp.task('build', gulp.series('clean', 'copySvgToBuild' ,'svgScale', 'svgOptimization', 'svgCompression', 'createPNG', 'createPDF', 'createFont', 'createSprite', 'processForXcassets'));
gulp.task('update-css', gulp.series('copySpriteToWebsite', 'replaceSpriteSrc'));
