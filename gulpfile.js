// =============================================================================

  // Clone
  // Authored by Josh Beveridge

  // "gulp"
  // "gulp build"

// =============================================================================

"use strict";

// Requirements ================================================================
const gulp = require('gulp');
const { series, parallel, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const browsersync = require('browser-sync').create();
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const del = require('del');
const runSequence = require('run-sequence');
const twig = require('gulp-twig');

// Tasks =======================================================================

    // Browser Sync
    function browserSync(done) {
        browsersync.init({
            server: {
                baseDir: 'cache'
            },
        });
        done();
    }

    // BrowserSync Reload
    function browserSyncReload(done) {
        return src('cache/*.html')
        .pipe(browsersync.reload({
            stream: true
        }));
    }

    // Twig
    function template() {
        return src('app/twig/*.html')
        .pipe(twig())
        .pipe(dest('cache'));
    }

    // Clone JS
    function moveCloneJS() {
        return src('node_modules/clone-framework/cache/js/clone.js')
        .pipe(dest('cache/js/clone'));
    }

    // Prism CSS
    function movePrismCSS() {
        return src('node_modules/prismjs/themes/prism-okaidia.css')
        .pipe(dest('cache/css/prism'));
    }

    // Prism JS
    function movePrismJSMain() {
        return src('node_modules/prismjs/prism.js')
        .pipe(dest('cache/js/prism'));
    }
    function movePrismJSTwig() {
        return src('node_modules/prismjs/components/prism-twig.min.js')
        .pipe(dest('cache/js/prism'));
    }
    function movePrismJSSCSS() {
        return src('node_modules/prismjs/components/prism-scss.min.js')
        .pipe(dest('cache/js/prism'));
    }
    function movePrismJSMarkup() {
        return src('node_modules/prismjs/components/prism-markup.min.js')
        .pipe(dest('cache/js/prism'));
    }
    function movePrismJSMarkdown() {
        return src('node_modules/prismjs/components/prism-markdown.min.js')
        .pipe(dest('cache/js/prism'));
    }
    function movePrismJSBash() {
        return src('node_modules/prismjs/components/prism-bash.min.js')
        .pipe(dest('cache/js/prism'));
    }

    // JavaScript
    function js() {
        return src('app/js/*.js')
        .pipe(concat('app.js'))
        .pipe(dest('cache/js'));
    }

    // Sass
    function compileCSS() {
        return src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(dest('cache/css'));
    }

    // Images
    function cacheImages() {
        return src('app/img/*')
        .pipe(dest('cache/img'));
    }

    function moveImages() {
        return src('cache/img/*')
        .pipe(dest('docs/img'));
    }

    // Minification
    function distCloneJS() {
        return src('cache/js/clone/*.js')
        .pipe(dest('docs/js/clone'));
    }
    function distPrismCSS() {
        return src('cache/css/prism/*.css')
        .pipe(dest('docs/css/prism'));
    }
    function distPrismJS() {
        return src('cache/js/prism/*.js')
        .pipe(dest('docs/js/prism'));
    }
    function distFavicons() {
        return src('app/favicons/*')
        .pipe(dest('docs'));
    }
    function distribute() {
        return src('cache/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(dest('docs'))
        .pipe(browsersync.reload({
            stream: true
        }));
    }

    // Dist Removal
    function cleanDist() {
        return del('docs');
    }

    // Watch
    function watchFiles() {
        watch('app/scss/**/*.scss', series(compileCSS, browserSyncReload));
        watch('app/twig/**/*.html', series(template, cacheImages, browserSyncReload));
        watch('app/js/*.js', series(js, moveCloneJS, browserSyncReload));
    }

    // Export
    exports.build = series(cleanDist, template, moveCloneJS, movePrismJSMain, movePrismJSTwig, movePrismJSSCSS, movePrismJSMarkup, movePrismJSMarkdown, movePrismJSBash, js, cacheImages, movePrismCSS, compileCSS, distribute, distCloneJS, distPrismJS, distPrismCSS, moveImages, distFavicons);
    exports.watch = series(template, moveCloneJS, movePrismJSMain, movePrismJSTwig, movePrismJSSCSS, movePrismJSMarkup, movePrismJSMarkdown, movePrismJSBash, js, cacheImages, movePrismCSS, compileCSS, parallel(browserSync, watchFiles));
    exports.default = series(template, moveCloneJS, movePrismJSMain, movePrismJSTwig, movePrismJSSCSS, movePrismJSMarkup, movePrismJSMarkdown, movePrismJSBash, js, cacheImages, movePrismCSS, compileCSS, parallel(browserSync, watchFiles));