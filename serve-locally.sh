#!/bin/bash

# For serving locally. Simply install Jekyll and run this command.
# GitHub builds Jekyll itself with the settings in _config.yml.

# --host 0.0.0.0    allows other devices on the local network to connect
# --baseurl ""      host at localhost:4000/ rather than localhost:4000/CatB/

jekyll serve --host 0.0.0.0 --baseurl ""
