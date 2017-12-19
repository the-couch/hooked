// const { json } = require('micro')
// const post = require('micro-post')

//
// module.exports = post(async (req, res) => {
//   const parsed = await json(req)
//   switch (parsed.sys.contentType.sys.id) {
//     case 'passports':
//       updatePassports(parsed)
//       break
//   }
// })

require('now-env')
const updatePassports = require('./api/wo/passport')
const updatePages = require('./api/wo/pages')

const micro = require('micro')
const Router = require('micro-http-router')

const router = new Router()

router.route({
  path: '/',
  method: 'GET',
  handler: (req, res) => {
    return 'Hooked'
  }
})

router.post('/api/wo', async (req, res) => {
  const parsed = await micro.json(req)
  console.log(parsed.sys.contentType.sys.id)

  switch (parsed.sys.contentType.sys.id) {
    case 'singlePage':
      updatePages(parsed)
      break
  }
  //   case 'passports':
  //     updatePassports(parsed)
  //     break
  // }

  return
})

const server = micro((req, res) => router.handle(req, res))
const port = 8080
server.listen(port)
console.log(`micro is listening on port: ${port}`)