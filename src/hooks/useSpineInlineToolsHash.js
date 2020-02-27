import { useMemo } from 'react'
import md5 from 'md5'

export const getSpineInlineToolsHash = ({ visibleTools, spineIdRef }) => {

  const numToolsByCfi = {}
  const sortedSpineToolCfiCountCombos = []

  ;(visibleTools || []).forEach(tool => {
    if(
      tool.spineIdRef === spineIdRef
      && tool.cfi
    ) {
      if(!numToolsByCfi[tool.cfi]) {
        numToolsByCfi[tool.cfi] = 0
      }
      numToolsByCfi[tool.cfi]++
    }
  })

  for(let cfi in numToolsByCfi) {
    sortedSpineToolCfiCountCombos.push(`${cfi}:${numToolsByCfi[cfi]}`)
  }
  sortedSpineToolCfiCountCombos.sort()

  return md5(JSON.stringify(sortedSpineToolCfiCountCombos))

}

const useSpineInlineToolsHash = ({ visibleTools, spineIdRef }) => {

  const spineInlineToolsHash = useMemo(
    () => getSpineInlineToolsHash({ visibleTools, spineIdRef }),
    [ visibleTools, spineIdRef ],
  )

  return spineInlineToolsHash
}

export default useSpineInlineToolsHash