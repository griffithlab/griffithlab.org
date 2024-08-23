################################################################################
##################### Set Initial Image to work from ############################

FROM ruby:3.1.2

################################################################################
##################### Add Container Labels #####################################

LABEL "Description"="ruby environment for development of griffithlab.org site"

################################################################################
##################### Install Necessary gems ############################

WORKDIR /tmp/griffithlab.org
RUN wget https://raw.githubusercontent.com/griffithlab/griffithlab.org/master/Gemfile &&\
    gem install bundler &&\
    bundle install
WORKDIR /usr/local/bin
RUN echo "#!/bin/bash\nbundle exec jekyll serve --host 0.0.0.0 --config _config.yml,_config_dev.yml --watch" > start_jekyll.sh &&\
    chmod +x start_jekyll.sh &&\
    mkdir -p /opt/git/griffithlab.org &&\
    rm -rf /tmp/griffithlab.org
WORKDIR /opt/git/griffithlab.org

################################################################################
##################### Set Entrypoint ############################
ENTRYPOINT ["/usr/local/bin/start_jekyll.sh"]

