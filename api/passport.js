const contentfulAPI = require('./contentful')
const shopifyAPI = require('./shopify')
const config = require('../config')

module.exports = (data) => {
  const slug = data.fields.slug['en-US']

  contentfulAPI.getEntries({
    content_type: 'passports',
    'fields.slug': slug,
    include: 8
  }).then(({ items }) => {
    const { fields } = items[0]
    // Example unique create
    shopifyAPI.article.update(config.shopify.blogId, '527892493', {
      title: fields.passportTitle,
      body_html: `<p>${fields.previewDescription}</p>`,
      author: fields.author
    })
    .then(res => `Pushed data to shopify!`)
    .catch(err => console.error(err))
  })
}
