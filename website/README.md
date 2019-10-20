# Website development guides

## Getting Started
1.  Fork the Sporticon repository on Github to your own account then clone it locally.
    For [ookami](https://github.com/ookamiinc) members, please clone this repository directly: 
    ```
    $ git clone git@github.com:ookamiinc/sporticon.git sporticon
    ```
    After cloning, change directory to the repository folder. In this instance: 
    ```
    $ cd sporticon/docs
    ```
2.  Install and setup [rbenv](https://github.com/rbenv/rbenv#installation):
3.  Install [Ruby](https://www.ruby-lang.org/en/) (2.5.1 or higher) with rbenv.
	```
    $ rbenv install 2.5.1
    ```
   
4.  Install [Bundler 2](https://bundler.io/guides/bundler_2_upgrade.html):
    ```
    $ gem install bundler
    ```

For all new features and bug fixes please [create an issue](https://github.com/ookamiinc/Sporticon/issues/new) in the main repository first (so we can track what goes into each release) then simply submit a pull request from your own fork into the original `develop` branch. To make sure the changes are easily reviewable please repect the format set out in `PULL_REQUEST_TEMPLATE.md`.

## Build locally

1. 	Install dependencies
    ```
    $ bundle install
    ```
2.	Build or Serve (for debugging) website
    ```
    $ bundle exec jekyll build

    # or to debug: 

    $ bundle exec jekyll serve --host=0.0.0.0
    ```
    Find the built files over `/docs/_site`.
   
Build & deployement to production is done when `develop` merges with `master` on the main repository. Please use `build` as a way to test implementations. 
**This will be a neccessary step when submitting a pull request.**

---

### Todo:
- Tests upon deployement to production for website and sporticon designs