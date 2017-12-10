const { createClient } = require('contentful')
const config = require('../config')

module.exports = createClient({
  space: config.contentful.space,
  accessToken: config.contentful.token
})
