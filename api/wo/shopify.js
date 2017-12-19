const Shopify = require('shopify-api-node')

module.exports = new Shopify({
  shopName: process.env.SHOPIFY_SHOPNAME,
  apiKey: process.env.SHOPIFY_APIKEY,
  password: process.env.SHOPIFY_PASSWORD
})
