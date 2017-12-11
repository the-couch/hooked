const cx = require('classnames')

module.exports = ({ outline, small, blue, white, light, cta, url }) => {
  return `
<a href='${url}' class='${cx('button rel f aic jcc sans caps track', {
  'button--outline': outline,
  'button--small': small,
  'button--light': light,
  'button--blue': blue,
  'button--white': white
})}'>
  <span class='f aic jcc'>
    ${cta}
  </span>
</a>
  `
}
