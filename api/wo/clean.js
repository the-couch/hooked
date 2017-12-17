module.exports = (parsed) => {
  // Let's clean that data up babes
  let cleanObject = {}
  let cleanModules = []
  cleanObject = Object.assign({}, cleanObject, {
    title: parsed.title,
    slug: parsed.slug
  })

  parsed.modules.forEach((module) => {
    // console.log('module spaghetti', module)
    let cleanModule = {}
    switch (module.sys.contentType.sys.id) {
      case 'moduleLargeHero':
        let images = []
        module.fields.images.forEach((image) => {
          let cleanImage = {
            fields: image.fields
          }
          images.push(cleanImage)
        })
        let productcta = []
        module.fields.productcta.forEach((cta) => {
          let cleanCta = {
            sys: {
              contentType: {
                sys: {
                  id: cta.sys.contentType.sys.id
                }
              }
            },
            fields: {
              slug: cta.fields.slug,
              productName: cta.fields.productName,
              ctaTitle: cta.fields.ctaTitle
            }
          }
          productcta.push(cleanCta)
        })
        cleanModule = Object.assign({}, cleanModule, {
          fields: {
            images: images,
            title: module.fields.title,
            productcta: productcta,
            alignment: module.fields.alignment
          }
        })
        cleanModules.push(cleanModule)
        break;
      case 'moduleCta':
        cleanModule = Object.assign({}, cleanModule, {
          fields: {
            content: module.fields.content,
            textStyle: module.fields.textStyle,
            backgroundImage: [],
            linkText: module.fields.linkText,
            link: [],
            buttonVisibility: module.fields.buttonVisibility
          }
        })
        cleanModules.push(cleanModule)
        break;
      case 'moduleStopMotion':
        cleanModule = Object.assign({}, cleanModule, {
          fields: {
            productName: module.fields.productName,
            productDescription: module.fields.productDescription,
            subHeader: module.fields.subHeader,
            productLink: {
              fields: {
                slug: module.fields.productLink.fields.slug
              }
            },
            slideshowImages: [],
            alignment: module.fields.alignment,
            productIcons: [],
            stopMotionImage: {
              fields: {
                file: {
                  url: module.fields.stopMotionImage.fields.file.url
                }
              }
            },
            videoUrl: module.fields.videoUrl,
            stopMotionVideo: module.fields.stopMotionVideo
          }
        })
        cleanModules.push(cleanModule)
        break;
    }
  })
  cleanObject = Object.assign({}, cleanObject, {
    modules: cleanModules
  })
  console.log('cleaned up baby', cleanObject)
  return cleanObject
}