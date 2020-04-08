import { useMemo } from 'react'
import md5 from 'md5'

export const getSpineInlineToolsHash = ({ visibleTools, spineIdRef }) => {

  const toolLabelInfoByCfi = {}
  const sortedInlineSpineToolInfoStrings = []

  ;(visibleTools || []).forEach(tool => {
    if(
      tool.spineIdRef === spineIdRef
      && tool.cfi
    ) {
      if(!toolLabelInfoByCfi[tool.cfi]) {
        toolLabelInfoByCfi[tool.cfi] = []
      }
      toolLabelInfoByCfi[tool.cfi][tool.ordering] = [
        tool.toolType,
        tool.name || '',
      ]
    }
  })

  for(let cfi in toolLabelInfoByCfi) {
    sortedInlineSpineToolInfoStrings.push(`${cfi}:${JSON.stringify(toolLabelInfoByCfi[cfi].filter(Boolean))}`)
  }
  sortedInlineSpineToolInfoStrings.sort()

  return md5(JSON.stringify(sortedInlineSpineToolInfoStrings))

}

const useSpineInlineToolsHash = ({ visibleTools, spineIdRef }) => {

  const spineInlineToolsHash = useMemo(
    () => getSpineInlineToolsHash({ visibleTools, spineIdRef }),
    [ visibleTools, spineIdRef ],
  )

  return spineInlineToolsHash
}

export default useSpineInlineToolsHash