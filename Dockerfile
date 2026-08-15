# Use an official Ruby runtime as a parent image
FROM ruby:3.3

# Install essential Linux packages
RUN apt-get update -qq && apt-get install -y sshpass rsync

#
# Set the working directory in the container to /ucsdwcsng.github.io
WORKDIR /ucsdwcsng.github.io

# Add the Gemfile and Gemfile.lock from your app
ADD Gemfile /ucsdwcsng.github.io/Gemfile
# ADD Gemfile.lock /ucsdwcsng.github.io/Gemfile.lock

# Install the gems specified in the Gemfile
RUN gem install bundler -v 2.4.22 && bundle install

# Copy the current directory contents into the container at /ucsdwcsng.github.io
ADD . /ucsdwcsng.github.io

# Make port 4000 available to the world outside this container
EXPOSE 4000

# Define the command to start the app. This will start Jekyll and watch the site
RUN JEKYLL_ENV=production bundle exec jekyll build
