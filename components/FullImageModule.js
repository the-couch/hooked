const Button = require('./Button')

module.exports = (data) => {
  const {
    shopableReference
  } = data.fields
  let url
  if (shopableReference) {
    url = '/products/' + shopableReference.fields.slug
  }
  return `
<div className='mha container--mm pv1 rel'>
  ${shopableReference ? `
    <div class='abs fit-x article__shopable'>
      ${Button({
        cta: `Shop ${shopableReference.fields.productName}`,
        url: `${url}`,
        light: true
      })}
    </div>
  ` : ''}
  <img src=${data.fields.image.fields.file.url} />
</div>
  `
}
