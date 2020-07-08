// Loosely based off https://github.com/larsvoigt/epub-full-text-search

// Using cheerio instead of the DOM so as to be consistent with the server.
import * as FileSystem from 'expo-file-system'
import cheerio from 'react-native-cheerio'

const getEpubTextNodeDocuments = async ({ spineItemPath, spineIdRef }) => {

  const spineXHTML = await FileSystem.readAsStringAsync(spineItemPath)

  const $ = cheerio.load(spineXHTML)

  const needMathMlOffset = false  // May or may not be needed. See "based off" repo.

  return $('body')
    .find("*")
    .contents()
    .toArray()
    .filter(node => {

      return (node.nodeType === 3 && !!$(node).text().trim())

    })
    .map(node => {

      const textNode = $(node)

      const cfiParts = []

      let child = textNode.parent()
      const childContents = child.contents()

      let textNodeIndex = childContents.index(textNode) + 1

      // "mixed content" context
      // the first chunk is located before the first child element
      // <p><span></span>text</p>
      if(childContents.first()[0].type === "tag") {
        textNodeIndex += 1
      }

      var parent = child.parent()
      while(parent[0]) {
        const index = child.index()
        const inOff = (needMathMlOffset && parent[0].name === 'body')
        const id = child.attr('id')
        const idSelector = id ? '[' + id + ']' : ''
        const part = ((index + 1) * 2 + (inOff ? 2 : 0)) + idSelector

        cfiParts.unshift(part)

        child = parent
        parent = child.parent()
      }

      const inlinePath = `,/${textNodeIndex}:`
      const cfi = `/${cfiParts.join('/')}${inlinePath}0${inlinePath}1`

      return {
        spineIdRef,
        cfi,
        text: textNode.text(),
      }

    })
          
}

export default getEpubTextNodeDocuments