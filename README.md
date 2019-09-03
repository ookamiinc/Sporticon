# Sporticon

## Introduction

Player! Sporticon is a simple, delightfully crafted set of symbols made to represent sports from a wide range of disciplines.
***

**Our symbols are free for everyone to use:** Visit our [website](https://sporticon.ookami.tokyo/) to view and save icons individually from the list or [download](https://github.com/ookamiinc/Sporticon/releases/download/1.0a/Sporticon.zip) our set to use them in your digital products, prints and marketing assets. Available under the [Apache 2.0](LICENSE) license, the only thing we ask is that you not re-sell these icons themselves. We'd love attribution in your project's about section, but it is not required. 

**Suggestions & contributions are welcome:** This is an open source project, meaning the original symbol files used to build Sporticon are freely available for remix, re-share and even improve upon. For more information about contributing to Sporticon, check out our [Contributing](Contributing.md) documentation (WIP).

## Development & Contribution

Before proceeding, you should [install Homebrew](http://brew.sh/).

1.  Fork the Sporticon repository on Github to your own account then clone it locally.
    For [ookami](https://github.com/ookamiinc) members, please clone this repository directly. 
    ```
    $ git clone git@github.com:ookamiinc/sporticon.git Sporticon
    ```

### Design

Sporticon are originally all created in Adobe Illustrator.
All design files are stored inside of `src/design` with:
- Original Adobe Illustrator files in `src/design/ai`: Including all original paths, strokes, guides and layers.
- Flat Adobe Illustrator files in `src/design/ai_flat`: Including all flattened vector using the toolkit.  
- SVG Adobe Illustrator files in `src/design/ai_flat`: Including all SVG files made from the previous flattend version. This makes it sure that all designs are correctly exported as intended, as this file format will be used to build many other formats for `src/production`.

***

All other formats for many other mediums (Vector, Raster, Font...) are stored inside of `src/production`, a directory automatically built by a CI. 
To test if the designs files are being built correctly for production, a build command is locally available for testing.

`Build` consists of building Adobe Illustrator SVG files from `src/design/svg` to a new directory called `src/build` with a set of formats including:
- SVG: Scaled to 1000px * 1000px.
- SVG Compressed: Lighter and simplified SVG from the previous. (Suitable for Web use, not recommended for editing in a design software).
- PNG: PNG raster 1000px * 1000px.
- PDF: PDF vector 1000px * 1000px.
- Font: Vector icon fonts including EOT, TTF, WOFF, WOFF2 with CSS.
- CSS Sprite: SVG Sprite with CSS & SCSS.

Note: `Build` is **only** used to preview what production `src/production` will look like when pushed to origin. A CI is automatically deployed to create `src/production` on the server when merging to `develop` branch, so it is not necessary to `build` sporticon each time on commit.

#### Installation for Build
1.  Install [nvm](https://github.com/nvm-sh/nvm) & [Node](https://nodejs.org/en/) 10.15.0.
    ```
    $ brew install nvm
    $ nvm install 10.15.0
    ```
2.  Install [Gulp](https://gulpjs.com/) CLI.
    ```
    $ npm install -g gulp-cli
    ```
3.  Install [packages](https://github.com/ookamiinc/Sporticon/blob/master/package.json). 
    ```
    $ npm install
    ```

#### Building Sporticon
1.  Build sporticon using gulp with the `build` task.
    ```
    $ gulp build
    ```
    Find the built files in `src/build`.

### Website

The website uses [Jekyll](https://jekyllrb.com/) & [Github Pages](https://pages.github.com/)

##### Installation

##### Requirements: 
- Ruby (2.5.1 or higher)
- Bundler (2.0 or higher)
```
cd docs
```
```
bundle install
```
```
bundle exec jekyll build
```
```
bundle exec jekyll serve --host=0.0.0.0
```

## Acknowledgement 


Player! Sporticon is an open-source project maintained by the design team at [ookami](https://ookami.tokyo/) with [@takeisme](http://takeis.me), [@nancytru](https://nancytruong.cargo.site/) and [@riomarmccartney](https://twitter.com/riomarmccartney). Supported by [TeamHub](https://tmhub.jp/). The Sporticon website is built with [Markdown](https://daringfireball.net/projects/markdown/), [Tachyons](https://github.com/tachyons-css/tachyons/) and [Jekyll](https://jekyllrb.com).
Type is set in [Inter](https://rsms.me/inter/) by [@rsms](https://twitter.com/rsms) for Latin, and [Kinto](https://github.com/ookamiinc/kinto) for Japanese.
