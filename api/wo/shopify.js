const Shopify = require('shopify-api-node')
const config = require('../../config')

module.exports = new Shopify({
  shopName: config.shopify.shopName,
  apiKey: config.shopify.apiKey,
  password: config.shopify.password
})
