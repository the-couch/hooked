const {
  Arrow,
  Facebook,
  Twitter,
  Email
} = require('../components/icons')

const config = require('../config')

const RenderModules = require('../components/RenderModules')

const MapModules = (modules) => {
  return modules.map((module) => {
    const type = module.sys.contentType ? module.sys.contentType.sys.id : false
    return RenderModules(module, type)
  })
}

module.exports = (data) => {
  console.log('building', data)
  return `
<div class='single'>
  <div className='article__hero rel'>
    <div class='obj-fit abs fill js-obj-fit-image lazy-img'>
      <img class='fill-h fill-v abs fill' data-normal='${data.featuredImage.fields.file.url + '?fm=jpg&fl=progressive'}'  />
    </div>
  </div>
  <section className='bgw z0 rel'>
    <div className='rel pt2'>
      <div className='article__nav_block z1'>
        <div className='outer container--c container--a'>
          <div className='article__nav_back mt2 f aic mb1'>
            <a href='/blogs/passport' className='caps co s1'>
              ${Arrow} Back
            </a>
          </div>
          <a href='#0' className='co social mr1' data-social='twitter'>${Facebook}</a>
          <a href='#0' className='co social mr1' data-social='facebook'>${Twitter}</a>
          <a className='co social' href='mailto?subject=${data.passportTitle}'>${Email}</a>
        </div>
      </div>
      <div className='outer container--c container--a'>
        <h4 className='mb0 serif'>${data.passportTitle}</h4>
      </div>
    </div>
  </section>
  <div className='z0 bgw px2'>
    ${MapModules(data.contentModules) }
    <div className='outer pv2 container--c container--a'>
      <div className='article__social_footer'>
        <a href='#0' className='co social mr2' data-social='twitter'>${Twitter}</a>
        <a href='#0' className='co social mr2' data-social='facebook'>${Facebook}</a>
        <a className='co social' href='mailto?subject=${data.passportTitle}&body=${config.shopify.shopURL + config.shopify.blogURL + data.slug}'>${Email}</a>
      </div>
    </div>
  </div>
</div>
  `
}
