# bcarradini.com
Personal web site.

# Installation

## Clone the repository
```
git clone git@github.com:bcarradini/bcarradini.com.git
```

## Install rbenv (https://github.com/rbenv/rbenv#installation)
```
brew update
brew install rbenv
```

## Install ruby (https://github.com/rbenv/rbenv#installing-ruby-versions)
```
rbenv install 2.7.8
rbenv local 2.7.8
```

## Install bundler and app dependencies
```
gem install bundler -v 2.4.22
bundle install
```

# Run the application
```
bundle exec middleman serve
```
