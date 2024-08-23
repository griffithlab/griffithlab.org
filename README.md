## Overview

This is the github repo for the griffith lab [website](http://griffithlab.org). The website uses the static site generator [jekyll](https://jekyllrb.com/) and is based on the [Feeling Responsive jekyll theme](https://github.com/Phlow/feeling-responsive). Development occurs on the dev branch, the live site is located on the master branch.

## Installation

To install this site locally run the following commands:

1. Clone the repo and cd into it `$ git clone git@github.com:griffithlab/griffithlab.github.io.git`
2. Install the bundler `$ gem install bundler`
3. Install gems `$ bundle install`
4. run jekyll and watch for changes `$ bundle exec jekyll serve --config _config.yml,_config_dev.yml --watch`

The site should now be running on localhost port 4000. Changes to files will show up interactively on localhost:4000

**Note:** The _config.yml and _config_dev.yml files are only read during the initial serve, changing these files will require re-running step 4 for changes to appear.

## Docker Installation

To install the site locally with docker run the following commands:

1. Clone the repo `$ git clone git@github.com:griffithlab/griffithlab.org.git`
2. Pull the docker image `$ docker pull griffithlab/griffithlabdev:0.0.1`
3. Run the docker `$ docker run -p 4000:4000 -v ~/git/griffithlab.org/:/opt/git/griffithlab.org -it griffithlab/griffithlabdev:0.0.2`

Make sure that the above command has correct path to cloned git repo (The first part specified with -v option). The site should now be running on localhost port 4000. Changes to files will show up interactively on localhost:4000.

**Note:** The Dockerfile for this image is maintained in [this repo](https://github.com/griffithlab/griffithlab.org/blob/master/docker/) and the image itself is hosted on [dockerhub](https://hub.docker.com/r/griffithlab/griffithlabdev).

**Note:** The _config.yml and _config_dev.yml files are only read during the initial serve, changing this file will require re-running step 3 for changes to appear.

## License

The code for this site is licensed under an MIT license, images may have specific attribution requirements and are licensed individually under assets/img/image_attribution
