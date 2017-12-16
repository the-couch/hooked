const CircularJSON = require('circular-json');
const contentfulAPI = require('./contentful')
const shopifyAPI = require('./shopify')
const config = require('../../config')

const clean = require('./clean')

// const HomePage = require('../../layouts/wo/homepage')

module.exports = (data) => {
  const slug = data.fields.slug['en-US']

  contentfulAPI.getEntries({
    content_type: 'singlePage',
    'fields.slug': slug,
    include: 8
  }).then(({ items }) => {
    const { fields } = items[0]
    // Example unique create

    console.log(clean(fields))

    // Check if it's the homepage and push data into a meta field
    if (slug === 'home') {
      console.log("sup i'm the homepage")
      shopifyAPI.metafield.list({
        owner_resource: 'shop',
        owner_id: '24846718'
      }).then(
        res => {
          // Loop through response and see if fancy_content is present
          res.forEach((singleMeta) => {
            if (singleMeta.key === 'fancy_content') {
              console.log('fancy content exists')
              // console.log(CircularJSON.stringify(fields))
              // shopifyAPI.metafield.update(singleMeta.id, {
              //   value: CircularJSON.stringify(fields)
              // }).then(res => console.log('updated meta', res))
            }
          })
        }
      )
    }

    // const createBlogPost = buildBlogPost(fields)
    //

    // shopifyAPI.metafield.create({
    //   key: 'fancy_content',
    //   value: 'random data',
    //   namespace: 'data',
    //   value_type: 'string'
    // }).then(res => console.log(res))
    // shopifyAPI.article.update(config.shopify.blogId, fields.articleId, {
    //   title: fields.passportTitle,
    //   body_html: createBlogPost,
    //   // image: {
    //   //   src: encodeURI(fields.featuredImage.fields.file.url + '?fm=jpg&fl=progressive')
    //   // },
    //   author: fields.author
    // })
    // .then(res => `Pushed data to shopify!`)
    // .catch(err => console.error(err))
  })
}