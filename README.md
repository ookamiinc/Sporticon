# Sporticon

## Introduction

Player! Sporticon is a simple, delightfully crafted set of symbols made to represent sports from a wide range of disciplines.
***

**Our symbols are free for everyone to use:** Visit our [website](https://sporticon.ookami.tokyo/) to view and save icons individually from the list or [download](https://github.com/ookamiinc/Sporticon/releases/download/1.0a/Sporticon.zip) our set to use them in your digital products, prints and marketing assets. Available under the [Apache 2.0](LICENSE) license, the only thing we ask is that you not re-sell these icons themselves. We'd love attribution in your project's about section, but it is not required. 

**Suggestions & contributions are welcome:** This is an open source project, meaning the original symbol files used to build Sporticon are freely available for remix, re-share and even improve upon. For more information about contributing to Sporticon, check out our [Contributing](Contributing.md) documentation (WIP).

## Development & Contribution

Before proceeding, you should [install Homebrew](http://brew.sh/).

1.  Fork the Sporticon repository on Github to your own account then clone it locally.
    For [ookami](https://github.com/ookamiinc) members, please clone this repository directly: 
    ```
    $ git clone git@github.com:ookamiinc/sporticon.git Sporticon
    ```

### Design

Sporticon are originally all created in Adobe Illustrator with defined guides to help create consistent icons across the icon family. There are 2 types of designs included in here with Source containing the original design files, and production containing automatically exported files in many formats from Source for distribution and use in many environement.

About making a new icon or modifiying an exsisting one, please checkout the [toolkit]().

#### → Source design files
All design files are in `src/design` as followed:
- **Original Illustrator files in `src/design/ai`**: including all path data, strokes, guides and layers. This will be the designer's main workspace when working on the icon.
- **Flat Illustrator files in `src/design/ai_flat`**: including all flattened vector paths, exported from `src/design/ai` using Illustrator Actions provided in the design toolkit.
- **SVG files exported from Illustrator in `src/design/svg`**: including all flattened vector paths, exported from `src/design/ai_flat`. This file format will be then used to build many other formats (in production `src/production`).

#### → Production design files
All productions files are by default black fill and scaled to 1000px × 1000px. In `src/production` as followed:

- **SVG**: Cleaned vector format. Suitable for use in design software.
- **SVG Compressed**: Cleaned, lighter and simplified vector format. Suitable for use in Browser view / Web.
- **PNG**: Raster format.
- **PDF**: Vector format.
- **Font**: Vector icon fonts including EOT, TTF, WOFF, WOFF2 with its CSS defined for use in Web.
- **CSS Sprite**: SVG Sprite with CSS & SCSS defined for use in Web.


Production design files are automatically built with CircleCI upon push towards `origin/develop` with a series of [tasks](), so there is no need to manually export design files to production.

To test if the designs files are being built correctly for production, a build command is locally available for testing.

##### Installation
1.  Install [nvm](https://github.com/nvm-sh/nvm) & [Node](https://nodejs.org/en/) 10.15.0:
    ```
    $ brew install nvm
    $ nvm install 10.15.0
    ```
2.  Install [Gulp](https://gulpjs.com/) CLI:
    ```
    $ npm install -g gulp-cli
    ```
3.  Install [packages](https://github.com/ookamiinc/Sporticon/blob/master/package.json):
    ```
    $ npm install
    ```

##### Build locally
1.  Build sporticon using gulp with the `build` task.
    ```
    $ gulp build
    ```
	Find the built files in `src/build`.
    
Note: This command should be used to test and preview what production (`src/production`) will look like upon push. A CI is automatically deployed to run tasks and create Production files when pushing to `origin/develop` branch, so it is not necessary to run the command above upon commit or design changes as `src/build` is ignored. 

### Website

The website uses [Jekyll](https://jekyllrb.com/) & [Github Pages](https://pages.github.com/)

##### Installation
1.  Install and setup [rbenv](https://github.com/rbenv/rbenv#installation):
2.  Install [Ruby](https://www.ruby-lang.org/en/) (2.5.1 or higher) with rbenv.
	```
    $ rbenv install 2.5.1
    ```
   
3.  Install [Bundler 2](https://bundler.io/guides/bundler_2_upgrade.html):
    ```
    $ gem install bundler
    ```

##### Build locally
1.  Move working directory to website (only once):
    ```
    cd docs
    ```
2. 	Install dependencies (only once):
    ```
    bundle install
    ```
3.	Build website:
    ```
    bundle exec jekyll build
    ```
    Find the built files in `/docs/_site`.
   
4.	Optional: Serve website (useful when previewing changes live via local server):
	``` 
	bundle exec jekyll serve --host=0.0.0.0
    ```


## Acknowledgement 


Player! Sporticon is an open-source project maintained by the design team at [ookami](https://ookami.tokyo/) with [@takeisme](http://takeis.me), [@nancytru](https://nancytruong.cargo.site/) and [@riomarmccartney](https://twitter.com/riomarmccartney). Supported by [TeamHub](https://tmhub.jp/). The Sporticon website is built with [Markdown](https://daringfireball.net/projects/markdown/), [Tachyons](https://github.com/tachyons-css/tachyons/) and [Jekyll](https://jekyllrb.com).
Type is set in [Inter](https://rsms.me/inter/) by [@rsms](https://twitter.com/rsms) for Latin, and [Kinto](https://github.com/ookamiinc/kinto) for Japanese.
