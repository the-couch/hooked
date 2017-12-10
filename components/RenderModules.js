const TextModule = require('./TextModule.js')
const FullImageModule = require('./FullImageModule.js')

module.exports = (module, type) => {
  console.log(type)
  switch (type) {
    case 'modulePassportText':
      return TextModule(module)
    case 'modulePassportFullImage':
      return FullImageModule(module)
  }
}