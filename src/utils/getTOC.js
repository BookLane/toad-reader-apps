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
        for(let i=0; i<arrayElement.length; i++) {
          const nav = findNavToc(arrayElement)
          if(nav) return nav
        }
      } else if(typeof objOrArray == 'object') {
        const isNavToc = objOrArray.nav && objOrArray.nav.$ && objOrArray.nav.$['epub:type'] == "toc"
        return (isNavToc && objOrArray.nav) || findNavToc(Object.values(objOrArray))
      }
    }
    
    console.log(findNavToc(navObj))
    console.log(navObj)

  } catch(e) {

    console.log('No valid EPUB 3 toc found.')

    return []
    
  }

// <?xml version="1.0" encoding="UTF-8"?><html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="en" xml:lang="en">
//   <head>
//     <meta charset="utf-8"/>
//   </head>
//   <body>
//     <nav epub:type="toc" id="toc">
//       <ol>
//         <li id="front">
//           <a href="Untitleddocument.xhtml">Untitled document</a>
//         </li>
//         <li>
//           <a href="Untitleddocument.xhtml#h.lnei1otvw6z3">Test</a>
//         </li>
//         <li>
//           <a href="Untitleddocument.xhtml#h.p720cs4aizw6">Asdf</a>
//         </li>
//       </ol>
//     </nav>
//   </body>
// </html>



//       "toc": [
//         {
//           "label": "Chapter 1",
//           "href": "chapter1.xhtml"
//         },
//         {
//           "label": "Chapter 2",
//           "href": "chapter2.xhtml"
//         }
//       ]


}

export default getTOC