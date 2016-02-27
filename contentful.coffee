module.exports = 
  access_token: '8ab4586cebc8b58829da1a291e4472663f6f69246a736dbed04d6f28a81b6855'
  management_token: 'f439e775ded812a02748c217add1111e55ffe95d7e4dfb456ff8f7f7dded2222'
  space_id: '5lapdlwzmge2'
  content_types:                    # remove these object braces once the config below is filled out
      posts:                          # data will be made available through this key on the `contentful` object in your templates
        id: 'Xy4XinXeQoy0CEyAwIiIS'                    # ID of your content type
        template: 'views/_blog.jade'  # if present a single page view will be created for each entry in the content type
        path: (entry) -> "blog/#{entry.slug}"             # override function for generating single page file path, passed in the entry object
