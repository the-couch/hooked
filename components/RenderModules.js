const TextModule = require('./TextModule.js')

module.exports = (module, type) => {
  console.log(type)
  switch (type) {
    case 'modulePassportText':
      return TextModule(module)
  }
}