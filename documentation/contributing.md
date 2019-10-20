# Sporticon design guides
## Understanding the structure
Sporticon icons are all originally designed in Adobe Illustrator with defined guides to help create consistent icons across the family. Once the design is made, a command tool will help you test and autmatically export the design to many accessible formats, saving a lot of time and mistakes.

The icon themselves are stored in `src/`, including 2 types of directory such as `src/design` containing all original design files, and `src/export` containing all automatically exported design files in many accessible formats, created from `src/design`.

#### → Design files in `src/design`:
- **Original Illustrator files in `src/design/ai`**: including all path data, strokes, guides and layers. This will be the designer's main workspace when working on the icon.
- **Flat Illustrator files in `src/design/ai_flat`**: including all flattened vector paths, exported from `src/design/ai` using Illustrator Actions provided in the design toolkit.
- **SVG files exported from Flat Illustrator files in `src/design/svg`**: including all flattened vector paths, exported from `src/design/ai_flat`. This file format will be mainly used to create many other formats that will then be exported to `src/export`.

#### → Exported files in `src/export`:
All exported files are by default in black fill and 1000px × 1000px by dimensions.

- **SVG**: Cleaned vector format. Suitable for use in design software.
- **SVG Compressed**: Cleaned, lighter and simplified vector format. Suitable for use in Browser view / Web.
- **PNG**: Raster format.
- **PDF**: Vector format.
- **Font**: Vector icon fonts including EOT, TTF, WOFF, WOFF2 with its CSS defined for use in Web.
- **CSS Sprite**: SVG Sprite with CSS & SCSS defined for use in Web.

For Build (= export) & deployement to production is done when `develop` merges with `master` on the main repository. Please use `build` as a way to test implementations.
**This will be a neccessary step when submitting a pull request.**

## Design

Please follow the design guidelines & specifications with [Sporticon design guidelines](sporticon-design-guidelines.md)

#### Create new Sporticon

1. Create a new illustrator file with the help of our tempates

#### Edit existing Sporticon

## Build Sporticon locally
#### Preparing environment
1. If you don't have it already, please install [Homebrew](http://brew.sh/)

2.  Fork the Sporticon repository on Github to your own account then clone it locally.
    For [ookami](https://github.com/ookamiinc) members, please clone this repository directly:
    ```
    $ git clone git@github.com:ookamiinc/Sporticon.git Sporticon
    ```
    After cloning, change directory to the repository folder. In this instance:
    ```
    $ cd Sporticon
    ```
3. Install [nvm](https://github.com/nvm-sh/nvm) & [Node](https://nodejs.org/en/) 10.16.3 (Latest LTS):
    ```
    $ brew install nvm
    $ nvm install 10.16.3
    ```
4. Install [Gulp](https://gulpjs.com/) CLI:
    ```
    $ npm install -g gulp-cli
    ```
5. Install [packages](https://github.com/ookamiinc/Sporticon/blob/master/package.json):
    ```
    $ npm install
    ```

#### Build
1. Build Sporticon using gulp with the `build` task.
    ```
    $ gulp build
    ```
	Find the built files in `src/build`.

Note: This command should be used to test and preview what production (`src/production`) will look like upon push. A CI is automatically deployed to run tasks and create Production files when pushing to `origin/develop` branch, so it is not necessary to run the command above upon commit or design changes as `src/build` is ignored.
