// See https://idpf.github.io/a11y-guidelines/content/nav/toc.html

import { FileSystem } from "expo"
import { parseString } from "xml2js"

import { getBooksDir } from "./toolbox.js"

const getXmlAsObj = async url => {
  const xml = await FileSystem.readAsStringAsync(url)
  return await new Promise(
    (resolve, reject) => parseString(xml, (err, result) => {
      if(err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  )
}

const findNavToc = objOrArray => {
  if(objOrArray instanceof Array) {
    for(let i=0; i<objOrArray.length; i++) {
      const nav = findNavToc(objOrArray[i])
      if(nav) return nav
    }
  } else if(typeof objOrArray == 'object') {
    if(objOrArray.nav) {
      let navToc
      ;(objOrArray.nav instanceof Array ? objOrArray.nav : [objOrArray.nav]).some(nav => {
        if(nav.$ && nav.$['epub:type'] == "toc") {
          navToc = nav
          return true
        }
      })
      if(navToc) return navToc
      delete objOrArray.nav
    }
    return findNavToc(Object.values(objOrArray))
  }
}

export default async ({ bookId }) => {
  
  const localBaseUri = `${getBooksDir()}${bookId}/`
  let
    opfRelativeUri,
    opfObj,
    opfManifestItems = {}

  try {

    // find and load the opf document
    const containerObj = await getXmlAsObj(`${localBaseUri}META-INF/container.xml`)
    // if we end up supporting multiple renditions, the next line will need expanding (http://www.idpf.org/epub/renditions/multiple/)
    opfRelativeUri = containerObj.container.rootfiles[0].rootfile[0].$['full-path']
    opfObj = await getXmlAsObj(`${localBaseUri}${opfRelativeUri}`)

    // load manifest into an object keyed by ids
    ;(opfObj.package.manifest[0].item || []).forEach(item => {
      if(item.$ && item.$.id) {
        opfManifestItems[item.$.id] = item
      }
    })
    
  } catch(e) {

    console.log("This EPUB appears to be invalid.", e)

    return {}
    
  }


  // get the toc and spines
  let toc, spines

  const tocLabelsByHref = {}
  const opfRelativeUriPieces = opfRelativeUri.split('/')
  if(opfRelativeUriPieces.length > 1) opfRelativeUriPieces.pop()

  if(opfObj.package.$.version.match(/^3(\.|$)/)) {
    // it is an epub 3

    try {
    
      // get nav document
      let navRelativeUri

      ;(opfObj.package.manifest[0].item || []).some(item => {
        if(((item.$ && item.$.properties) || "").split(" ").includes('nav')) {
          navRelativeUri = `${opfRelativeUriPieces.join('/')}/${item.$.href}`
          return true
        }
      })

      if(!navRelativeUri) {
        (opfObj.package.spine[0].itemref || []).some(itemref => {
          if(((itemref.$ && itemref.$.properties) || "").split(" ").includes('nav') && opfManifestItems[itemref.$.idref]) {
            navRelativeUri = `${opfRelativeUriPieces.join('/')}/${opfManifestItems[itemref.$.idref].$.href}`
            return true
          }
        })
      }

      const navObj = await getXmlAsObj(`${localBaseUri}${navRelativeUri}`)
      const navTocObj = findNavToc(navObj)

      const getEpub3TocObjInfo = ol => (
        (ol.li || [])
          .map(li => {
            const label = 
              li.a
              && li.a[0]
              && ((li.a[0].$ && li.a[0].$.title) || li.a[0]._)
            const href = 
              li.a
              && li.a[0]
              && li.a[0].$
              && li.a[0].$.href
            
            if(!label || !href) return null

            tocLabelsByHref[href] = label

            const tocObj = {
              label,
              href,
            }

            if(li.ol) {
              const subNav = getEpub3TocObjInfo(li.ol[0])
              if(subNav.length > 0) {
                tocObj.subNav = subNav
              }
            }

            return tocObj
          })
          .filter(tocItem => tocItem)
        )
  
      toc = getEpub3TocObjInfo(navTocObj.ol[0])

    } catch(e) {

      console.log("This EPUB 3's TOC appears to be invalid.", e)
  
    }
        
  } else {
    // it is an epub 2
    
    try {
      
      const navRelativeUri = `${opfRelativeUriPieces.join('/')}/${opfManifestItems[opfObj.package.spine[0].$.toc].$.href}`
      const navObj = await getXmlAsObj(`${localBaseUri}${navRelativeUri}`)
  
      const getEpub2TocObjInfo = cont => (
        cont.navPoint
          .map(navPoint => {
            const label = 
              navPoint.navLabel
              && navPoint.navLabel[0]
              && navPoint.navLabel[0].text
              && (navPoint.navLabel[0].text[0]._ || navPoint.navLabel[0].text[0])
            const href = 
              navPoint.content
              && navPoint.content[0]
              && navPoint.content[0].$
              && navPoint.content[0].$.src

            if(!label || !href) return null

            tocLabelsByHref[href] = label

            const tocObj = {
              label,
              href,
            }

            if(navPoint.navPoint) {
              const subNav = getEpub2TocObjInfo(navPoint)
              if(subNav.length > 0) {
                tocObj.subNav = subNav
              }
            }

            return tocObj
          })
          .filter(tocItem => tocItem)
        )

      toc = getEpub2TocObjInfo(navObj.ncx.navMap[0])

    } catch(e) {

      console.log("This EPUB 2's TOC appears to be invalid.", e)
  
    }

  }    

  try {
    // get the spines
    spines = (opfObj.package.spine[0].itemref || []).map(itemref => {
      const idref = itemref.$.idref
      return {
        idref,
        label: (
          opfManifestItems[idref] 
          && opfManifestItems[idref].$
          && tocLabelsByHref[opfManifestItems[idref].$.href]
        ) || "",
      }
    })
    
  } catch(e) {

    console.log('Could not determine spines (This EPUB appears to be invalid).', e)

  }

  return { toc, spines }
  
}