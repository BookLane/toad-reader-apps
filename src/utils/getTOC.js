// See https://idpf.github.io/a11y-guidelines/content/nav/toc.html

import { FileSystem } from "expo"
import JSZipUtils from "jszip-utils"
import JSZip from "jszip"
import { parseString } from "xml2js"

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

const getTOC = async ({ bookId }) => {
  
  const localBaseUri = `${FileSystem.documentDirectory}books/${bookId}/`

  try {

    // find the opf document
    const containerObj = await getXmlAsObj(`${localBaseUri}META-INF/container.xml`)
    // if we end of supporting multiple renditions, the next line will need expanding (http://www.idpf.org/epub/renditions/multiple/)
    const opfRelativeUri = containerObj.container.rootfiles[0].rootfile[0].$['full-path']
    
    // find the nav document
    const opfrObj = await getXmlAsObj(`${localBaseUri}${opfRelativeUri}`)
    let navRelativeUri
    ;[
      ...(opfrObj.package.manifest[0].item || []),
      ...(opfrObj.package.manifest[0].itemref || [])
    ].some(item => {
      if(item.$ && item.$.properties == 'nav') {
        const opfRelativeUriPieces = opfRelativeUri.split('/')
        if(opfRelativeUriPieces.length > 1) opfRelativeUriPieces.pop()
        navRelativeUri = `${opfRelativeUriPieces.join('/')}/${item.$.href}`
        return true
      }
    })
  
    const navObj = await getXmlAsObj(`${localBaseUri}${navRelativeUri}`)

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
    
    const navTocObj = findNavToc(navObj)

    const getTocObjInfo = ol => ol.li.map(li => ({
      label: li.a[0].$.title || li.a[0]._,
      href: li.a[0].$.href,
      subNav: li.ol && getTocObjInfo(li.ol[0]),
    }))

    const toc = getTocObjInfo(navTocObj.ol[0])

    return toc

  } catch(e) {

    console.log('No valid EPUB 3 toc found.')

    return []
    
  }

}

export default getTOC