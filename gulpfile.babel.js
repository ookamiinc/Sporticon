'use strict';

import gulp from 'gulp';
import svgmin from 'gulp-svgmin';

/**
 * Optimize SVGs using SVGO.
 * The svgCompression task minimize the SVGs even further for web use.
 */

const productionAssets = 'svgOptimization';

gulp.task('svgOptimization', () => {
    return gulp.src(productionAssets + '/svg/*')
        .pipe(svgmin({
            plugins: [{
                convertPathData: false
            }]
        }))
        .pipe(gulp.dest(productionAssets + '/svg'));
});

gulp.task('svgCompression', () => {
    return gulp.src(productionAssets + '/svg/*')
        .pipe(svgmin())
        .pipe(gulp.dest(productionAssets + './svg_compressed'));
});

/** Runs all tasks. */
gulp.task('default', gulp.series('svgOptimization', 'svgCompression'));