import { useMemo } from 'react'

import { getPageCfisKey, getPageIndexInSpine } from "../utils/toolbox"
import useAdjustedDimensions from "./useAdjustedDimensions"

const usePageInfo = ({ spineIdRef, cfi, book, displaySettings, sidePanelSettings, spineInlineToolsHash }) => {

  const { fullPageWidth: width, fullPageHeight: height } = useAdjustedDimensions({ sidePanelSettings })

  const pageInfo = useMemo(
    () => {

      const pageCfisKey = getPageCfisKey({ displaySettings, width, height, spineInlineToolsHash })
      let pageCfis = []
      let pageCfisKnown = false
      book && book.spines.some(spine => {
        if(spine.idref === spineIdRef) {
          if(spine.pageCfis) {
            pageCfis = spine.pageCfis[pageCfisKey] || []
            pageCfisKnown = true
          }
          return true
        }
      })
      const pageIndexInSpine = getPageIndexInSpine({ pageCfis, cfi })
    
      return {
        pageIndexInSpine,
        pageCfisKnown,
      }
    
    },
    [ spineIdRef, cfi, book, displaySettings, spineInlineToolsHash, width, height ],
  )

  return pageInfo

}

export default usePageInfo