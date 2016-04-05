require.config
  baseUrl: 'js/lib'
  paths:
    app: '../app'
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min'
  shim:
    mixitup: ["jquery"]


require ['app/main'], ($) ->
  console.log 'jquery loaded'
