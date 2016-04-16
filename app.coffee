axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
contentful   = require 'roots-contentful'
config       = require './contentful'
marked       = require 'marked'
sass		     = require 'roots-sass'
js_pipeline  = require 'js-pipeline'

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
      style: 'compressed'),
    js_pipeline(
      manifest: 'assets/js/manifest.yml',
      out: 'js/build.js',
      minify: true)
    contentful(config)]
