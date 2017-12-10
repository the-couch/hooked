const contentfulAPI = require('./contentful')
const shopifyAPI = require('./shopify')
const config = require('../config')

const buildBlogPost = require('../layouts/article')

module.exports = (data) => {
  const slug = data.fields.slug['en-US']

  contentfulAPI.getEntries({
    content_type: 'passports',
    'fields.slug': slug,
    include: 8
  }).then(({ items }) => {
    const { fields } = items[0]
    // Example unique create

    const createBlogPost = buildBlogPost(fields)

    shopifyAPI.article.update(config.shopify.blogId, fields.articleId, {
      title: fields.passportTitle,
      body_html: createBlogPost,
      // image: {
      //   src: encodeURI(fields.featuredImage.fields.file.url + '?fm=jpg&fl=progressive')
      // },
      author: fields.author
    })
    .then(res => `Pushed data to shopify!`)
    .catch(err => console.error(err))
  })
}
