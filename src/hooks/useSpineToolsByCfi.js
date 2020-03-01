import { useMemo } from 'react'

const useSpineToolsByCfi = ({ visibleTools, spineIdRef }) => {

  const spineToolsByCfi = useMemo(
    () => {
      const toolsByCfi = {}

      ;(visibleTools || []).forEach(tool => {
        if(
          tool.spineIdRef === spineIdRef
          && tool.cfi
        ) {
          if(!toolsByCfi[tool.cfi]) {
            toolsByCfi[tool.cfi] = []
          }
          toolsByCfi[tool.cfi].push(tool)
        }
      })

      Object.values(toolsByCfi).forEach(spineTools => spineTools.sort((a, b) => a.ordering - b.ordering))

      return toolsByCfi
    },
    [ visibleTools, spineIdRef ],
  )

  return spineToolsByCfi
}

export default useSpineToolsByCfi

