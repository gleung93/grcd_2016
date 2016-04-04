require.config
  paths:
    app: 'app'
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min'

require ['main'], ($) ->
  console.log 'jquery loaded'
