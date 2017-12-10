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
          <a href='#0' className='co social mr1' data-social='twitter' data-url='https://www.woolandoak.com/blogs/passport/${data.slug}'>${Facebook}</a>
          <a href='#0' className='co social mr1' data-social='facebook' data-url='https://www.woolandoak.com/blogs/passport/${data.slug}'>${Twitter}</a>
          <a className='co social' href='mailto?subject=${data.passportTitle}'>${Email}</a>
        </div>
      </div>
      <div className='outer container--c container--a'>
        <h4 className='mb0 serif'>${data.passportTitle}</h4>
      </div>
    </div>
  </section>
</div>
  `
}

/* eslint-disable */

const Arrow = () => `
  <svg className='mr05' width='7px' height='7px' viewBox='0 0 7 7' version='1.1'><g id='Passport' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Passport-Detail-1' transform='translate(-221.000000, -806.000000)' fill-rule='nonzero' fill='#CC663A'><g id='BACK/SOCIAL' transform='translate(219.000000, 802.000000)'><polygon id='Rectangle-3' points='7 6 7 11 9 11 9 4 2 4 2 6'></polygon></g></g></g></svg>
`

const Facebook = () => `
  <svg viewBox='0 0 16 16' width='16' height='16' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='1.414'><path fill='currentColor' fill-rule='nonzero' d='M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0 '></path></svg>
`

const Twitter = () => `
  <svg viewBox='0 0 16 16' width='16' height='16' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='1.414'><path fill='currentColor' fill-rule='nonzero' d='M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z '></path></svg>
`

const Email = () => `
  <svg width='62px' height='42px' viewBox='0 0 62 42'><g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Icon-Email' fill-rule='nonzero' fill='currentColor'><path d='M2.01811063,3.35750974 L2.01811063,38.5515743 L11.1610742,29.2257514 L19.7332438,20.4821385 L2.01811063,3.35750974 Z M60.0181106,3.35750974 L42.3029775,20.4821385 L50.875147,29.2257514 L60.0181106,38.5515743 L60.0181106,3.35750974 Z M40.864965,21.8722172 L31.7131327,30.7189884 C31.3255305,31.0936705 30.7106908,31.0936705 30.3230885,30.7189884 L21.1712562,21.8722172 L12.5655518,30.6500357 L3.39892014,40 L58.6373011,40 L49.4706694,30.6500357 L40.864965,21.8722172 Z M0.018110626,1.07068593 C0.0109721043,0.958975571 0.0229633608,0.847281305 0.0521217517,0.740457312 C0.0721605789,0.6656881 0.100649177,0.594375717 0.136501332,0.52760638 C0.297682444,0.224210399 0.611097707,0 1.01811063,0 L61.0181106,0 C61.4251235,0 61.7385388,0.224210399 61.8997199,0.52760638 C61.9355721,0.594375717 61.9640607,0.6656881 61.9840995,0.740457313 C62.0132579,0.847281305 62.0252491,0.958975571 62.0181106,1.07068593 L62.0181106,40.8134639 C62.1547626,41.480954 61.4945756,42.1354163 60.8299375,42 L1.20628378,42 C0.541645682,42.1354163 -0.118541328,41.480954 0.018110626,40.8134639 L0.018110626,1.07068593 Z M3.49139656,2 L31.0181106,28.6091569 L58.5448247,2 L3.49139656,2 Z' id='Shape'></path></g></g></svg>
`