module.exports = (parsed) => {
  // Let's clean that data up babes
  // console.log(parsed)
  let cleanObject = {}
  let cleanModules = []
  cleanObject = Object.Assign({}, cleanObect, {
    title: parsed.title,
    slug: parsed.slug
  })
  return cleanObject
}