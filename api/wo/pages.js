const CircularJSON = require('circular-json');
const contentfulAPI = require('./contentful')
const shopifyAPI = require('./shopify')

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

    switch (slug) {
      case 'home':
        shopifyAPI.metafield.list({
          owner_resource: 'shop',
          owner_id: '11821216'
        }).then(
          res => {
            // Loop through response and see if fancy_content is present
            res.forEach((singleMeta) => {
              if (singleMeta.key === 'fancy_content') {
                shopifyAPI.metafield.update(singleMeta.id, {
                  value: JSON.stringify(clean(fields))
                }).then(res => console.log('updated meta', res))
              }
            })
          }
        )
        // init data
        // shopifyAPI.metafield.create({
        //   key: 'fancy_content',
        //   value: 'init data',
        //   namespace: 'data',
        //   value_type: 'string'
        // }).then(res => console.log(res))
        break;
      case 'collections':
        // console.log('hey collections')
        // console.log('probably need to do some cleaning', clean(fields))
        shopifyAPI.page.update('804192269', {
          id: '804192269',
          body_html: JSON.stringify(clean(fields))
        })
        // .then(res => console.log('we did it', res))
        .catch(err => console.error(err))
        break;
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
