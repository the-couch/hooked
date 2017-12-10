const { json } = require('micro')
const post = require('micro-post')

const updatePassports = require('./api/passport')

module.exports = post(async (req, res) => {
  const parsed = await json(req)
  switch (parsed.sys.contentType.sys.id) {
    case 'passports':
      updatePassports(parsed)
      break
  }
})
