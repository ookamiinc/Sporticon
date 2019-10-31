# Contributing to Sporticon Design
## Understanding the structure
Sporticon icons are all originally designed in Adobe Illustrator with defined guides to help create consistent icons across the family. Once the design is made, a command tool will help you test and automatically export the design to many accessible formats, saving a lot of time and mistakes.

The icon themselves are stored in `src/`, including 2 types of directory such as `src/design` containing all original design files, and `src/export` containing all automatically exported design files in many accessible formats, created from `src/design`.

#### → Design files in `src/design`:
- **Illustrator files in `src/design/ai`**: includes AI  path data, strokes, guides and layers. This will be the designer's main workspace when working on the icon.
- **SVG files in `src/design/svg`**: includes all flattened  compound vector paths, exported from `src/design/ai`. This file format will be mainly used to create many other formats that will then be then exported to `src/export`.

#### → Exported files in `src/export`:
All exported files are by default in black fill and 1000px × 1000px by dimensions.

- **SVG**: Cleaned vector format. Suitable for use in design software.
- **SVG Compressed**: Cleaned, lighter and simplified vector format. Suitable for use in Browser view / Web.
- **PNG**: Raster format.
- **PDF**: Vector format.
- **Font**: Vector icon fonts including EOT, TTF, WOFF, WOFF2 with its CSS defined for use in Web.
- **CSS Sprite**: SVG Sprite with CSS & SCSS defined for use in Web.
- **Images.xcassets***: For ookami dev internal use only.

For Build (= export) & deployment to production is done when `develop` merges with `master` on the main repository. Please use `build` as a way to test implementations.
**This will be a necessary step when submitting a pull request.**

_* Images.xcassets: Xcode image assets with names and sizes defined specifically for Player.xcworkspace._

## Design

→ Please checkout the design guidelines & specifications before proceeding with any new or modifying existing design at [Sporticon design guidelines](sporticon-design-guidelines.md)

For all new icons, modifications, and deletions of icons in Sporticon, please [create an issue](https://github.com/ookamiinc/Sporticon/issues/new) in the main repository first (so we can track what goes into each release) then simply submit a pull request from your own fork into the original `develop` branch. To make sure the changes are easily reviewable please respect the format set out in `PULL_REQUEST_TEMPLATE.md`.

### Prepare environment
#### Clone

1.  Fork the Sporticon repository on Github to your own account then clone it locally.
    For [ookami](https://github.com/ookamiinc) members, please clone this repository directly:
    ```
    $ git clone git@github.com:ookamiinc/Sporticon.git Sporticon
    ```
    After cloning, change directory to the repository folder. In this instance:
    ```
    $ cd Sporticon
    ```


#### Prepare build
1. If you don't have it already, please install [Homebrew](http://brew.sh/)
2. Install [nvm](https://github.com/nvm-sh/nvm) & [Node](https://nodejs.org/en/) 10.16.3 (Latest LTS):
    ```
    $ brew install nvm
    $ nvm install 10.16.3
    ```
3. Install [Gulp](https://gulpjs.com/) CLI:
    ```
    $ npm install -g gulp-cli
    ```
4. Install [packages](https://github.com/ookamiinc/Sporticon/blob/master/package.json):
    ```
    $ npm install
    ```

### Create a new Sporticon

Before starting, please do not forget to [create an issue](https://github.com/ookamiinc/Sporticon/issues/new) in the main repository first (so we can track what goes into each release) then simply submit a pull request from your own fork into the original `develop` branch. To make sure the changes are easily reviewable please respect the format set out in `PULL_REQUEST_TEMPLATE.md`.

1. Create a new git branch from develop. Name your branch with the sports name you are creating. In this example, `American Football` will be used:
    ```
    $ git checkout develop
    $ git checkout -b new-american-football
    ```

2. Create a new illustrator file in `src/design/ai` with the help of our templates found in `documentation/guides` & `documentation/templates`. Name your new ai file with the sports name you are creating with all lower-case letters and hyphen `-` as space in between. Please do not use an existing name.

    In this example, the file name will be named `american-football.ai`

3. Follow our design guidelines & specifications at [Sporticon design guidelines](sporticon-design-guidelines.md)

4. When done, save your ai and create an SVG version in `src/design/svg` of your new icon using an Illustrator action provided in `documentation/tools/Sporticon Tools for AI.aia`. The tool will do the work to simplify and flatten your shapes without affecting the visual design, optimal for SVG formats.

    Note: The tool can break things sometimes depending on the Illustrator environment and version. It's best to check after playing the action that nothing is broken or corrupted.

5. Test build: In Terminal inside Sporticon folder, run the build command to test if your new icon is exporting correctly. (This step requires to installation done in [Prepare build](#prepare-build) step.)
    ```
    $ gulp build
    ```
   Find the built files in `src/build`.

   → ✅ All formats looking good? Go ahead and commit your changes made in `src/design` towards your branch. In this example: `new-american-football` branch. Let's move to the next step in registering the icon in Sporticon.

   → ❌ Not the expected results? It's highly possible that the SVG format in `src/design/svg` isn't flattened enough. That vector shape must be in the flattest shape it possibly can.

#### Registering the icon in Sporticon

With the new sports icon now created, please add the sports icon itself into the registry, defining what that sports it. By adding to the registry, the new icon will appear on the website when pushed to master.

1. Access the data file in a text editor: `website/_data/sporticon_definitions.json`

2. The datas are structured in the manner below:
  - **id**: File name of the new icon, with all lower-case letters and hyphen as spaces.
  - **unicode**: Ignore entry
  - **name_en**: Sports name in English. Use uppercase when appropriate. (Example: American Football)
  - **name_ja**: Sports name in Japanese. (Example:  アメリカンフットボール)
  - **nama_aka_en**: The alternative name of that sports. (Example: Football, Gridiron)
  - **sport_related**: The origin of that sports, or from which sport it was inspired from. (Example: Soccer, Rugby)
  - **sports_type**: Ignore entry
  - **sports_disabled**: Is the sport involving athletes with a range of disabilities? Please answer with `TRUE` or `FALSE` (Example: FALSE)
  - **sport_symbol**: What does the icon represent? (Example: Ball)
  - **sports_info**: URL towards the definition of that sport. (Example: https://en.wikipedia.org/wiki/American_Football)


3. Copy this template and fill the new data entry at the end of the data set, before the `]` bracket.
    ```
    {
        "id": "",
        "Unicode": "",
        "player_id": ,
        "name_en": "",
        "name_ja": "",
        "name_aka_en": "",
        "sport_related": "",
        "sport_type": "",
        "sport_disabled": "",
        "sport_symbol": "",
        "sport_info": ""
    },
    ```

4. Upon fill, save the changes and commit your changes made in `website/_data/sporticon_definitions.json` towards the same branch you made when creating the new icon.

5. Comment on the pull request as `ready for review`. 👏🏽

    A maintainer of the repository will check your pull request, and if it checks all the steps written in here, we will merge your PR. Thank you for contributing ❤️

### Edit an existing Sporticon (or registration)

Before starting, please do not forget to [create an issue](https://github.com/ookamiinc/Sporticon/issues/new) in the main repository first (so we can track what goes into each release) then simply submit a pull request from your own fork into the original `develop` branch. To make sure the changes are easily reviewable please respect the format set out in `PULL_REQUEST_TEMPLATE.md`.

1. Create a new git branch from develop. Name your branch with the sports name you are editing. In this example, `American Football` will be used:
    ```
    $ git checkout develop
    $ git checkout -b edit-american-football
    ```

2. Edit existing data. References of files and structures can be found above in [Create a new Sporticon](#create-a-new-sporticon).

3. Push your branch and comment on the pull request as `ready for review`. 👏🏽

    A maintainer of the repository will check your pull request, and  if the changes were appropriate. We will then merge your PR. Thank you for contributing ❤️

### Deleting an icon from Sporticon

Please [create an issue](https://github.com/ookamiinc/Sporticon/issues/new) in the main repository and submit why the an icon or data needs to be removed.

A maintainer of the repository will check your issue and take the appropriate action if the decision is made to delete a specific data / file.

Thank you for contributing ❤️
