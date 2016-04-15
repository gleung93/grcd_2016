axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
contentful   = require 'roots-contentful'
config       = require './contentful'
marked       = require 'marked'
sass		     = require 'roots-sass'

module.exports =
  ignores: [
    'readme.md', '**/layout.*', '**/_*', '.gitignore', 'contentful.coffee',
    'Makefile', 'ship*'
  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]

  locals:
    marked: marked

  extensions: [
    sass(
      files: "assets/css/master.scss",
      out: 'css/master.css',
      style: 'uncompressed'),
    contentful(config)]
