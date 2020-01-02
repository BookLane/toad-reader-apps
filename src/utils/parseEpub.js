// See https://idpf.github.io/a11y-guidelines/content/nav/toc.html

import { Platform } from "react-native"
import * as FileSystem from 'expo-file-system'
import { parseString } from "xml2js"

import { getBooksDir, getDataOrigin, getReqOptionsWithAdditions, safeFetch } from "./toolbox"

const getXmlAsObj = async ({ url, account }) => {
  const urlWithoutHash = url.replace(/#.*$/, '')

  const xml = /^https?:\/\//.test(urlWithoutHash)
    ? (
      await safeFetch(urlWithoutHash, getReqOptionsWithAdditions({
        headers: {
          "x-cookie-override": account.cookie,
        },
      })).then(response => response.text())
    )
    : await FileSystem.readAsStringAsync(urlWithoutHash)

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

export default async ({ bookId, idp, account }) => {

  const baseUri = Platform.OS === 'web'
    ? `${getDataOrigin(idp)}/epub_content/book_${bookId}/`
    : `${getBooksDir()}${bookId}/`

  let
    opfRelativeUri,
    opfObj,
    opfManifestItemsByIdref = {},
    opfManifestItemsByHref = {}

  try {

    // find and load the opf document
    const containerObj = await getXmlAsObj({ url: `${baseUri}META-INF/container.xml`, account })
    // if we end up supporting multiple renditions, the next line will need expanding (http://www.idpf.org/epub/renditions/multiple/)
    opfRelativeUri = containerObj.container.rootfiles[0].rootfile[0].$['full-path']
    opfObj = await getXmlAsObj({ url: `${baseUri}${opfRelativeUri}`, account })

    // load manifest into an object keyed by ids
    ;(opfObj.package.manifest[0].item || []).forEach(item => {
      if(item.$ && item.$.id) {
        opfManifestItemsByIdref[item.$.id] = item
        opfManifestItemsByHref[item.$.href] = item
      }
    })
    
  } catch(e) {

    console.log("ERROR: Bad opf.", bookId, e)
    return {}
    
  }


  // get the toc and spines
  let toc, spines

  const tocLabelsByHref = {}
  const opfRelativeUriPieces = opfRelativeUri.split('/')
  opfRelativeUriPieces.pop()
  const opfDir = opfRelativeUriPieces.join('/') + (opfRelativeUriPieces.length > 0 ? '/' : '')

  const setLabelsByHref = ({ href, label }) => {
    tocLabelsByHref[href] = label

    const hrefWithoutHash = href.replace(/#.*$/, '')
    if(hrefWithoutHash !== href && tocLabelsByHref[hrefWithoutHash] === undefined) {
      tocLabelsByHref[hrefWithoutHash] = label
    }
  }

  if(opfObj.package.$.version.match(/^3(\.|$)/)) {
    // it is an epub 3

    try {
    
      // get nav document
      let navRelativeUri

      ;(opfObj.package.manifest[0].item || []).some(item => {
        if(((item.$ && item.$.properties) || "").split(" ").includes('nav')) {
          navRelativeUri = `${opfDir}${item.$.href}`
          return true
        }
      })

      if(!navRelativeUri) {
        (opfObj.package.spine[0].itemref || []).some(itemref => {
          if(((itemref.$ && itemref.$.properties) || "").split(" ").includes('nav') && opfManifestItemsByIdref[itemref.$.idref]) {
            navRelativeUri = `${opfDir}${opfManifestItemsByIdref[itemref.$.idref].$.href}`
            return true
          }
        })
      }

      const navObj = await getXmlAsObj({ url: `${baseUri}${navRelativeUri}`, account })
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

            const spineIdRef = ((opfManifestItemsByHref[href.replace(/[?#].*$/, '')] || {}).$ || {}).id

            setLabelsByHref({ href, label })

            const tocObj = {
              label,
              href,
              spineIdRef,
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

      console.log("ERROR: Bad EPUB 3 toc.", bookId, e)
      return {}

    }
        
  } else {
    // it is an epub 2
    
    try {
      
      const navRelativeUri = `${opfDir}${opfManifestItemsByIdref[opfObj.package.spine[0].$.toc].$.href}`
      const navObj = await getXmlAsObj({ url: `${baseUri}${navRelativeUri}`, account })
  
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

            const spineIdRef = ((opfManifestItemsByHref[href.replace(/[?#].*$/, '')] || {}).$ || {}).id

            setLabelsByHref({ href, label })

            const tocObj = {
              label,
              href,
              spineIdRef,
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

      console.log("ERROR: Bad EPUB 2 toc.", bookId, e)
      return {}

    }

  }    

  try {
    // get the spines
    spines = (opfObj.package.spine[0].itemref || []).map(itemref => {
      const idref = itemref.$.idref
      return {
        idref,
        label: (
          opfManifestItemsByIdref[idref] 
          && opfManifestItemsByIdref[idref].$
          && tocLabelsByHref[opfManifestItemsByIdref[idref].$.href]
        ) || "",
      }
    })
    
  } catch(e) {

    console.log("ERROR: Could not determine spines.", bookId, e)
    return {}

  }

  return { toc, spines, success: true }
  
}