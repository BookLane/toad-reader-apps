import { useMemo } from "react"
import Constants from 'expo-constants'

import useAdjustedDimensions from './useAdjustedDimensions'

const {
  PAGE_LIST_MAXIMUM_PAGE_SIZE,
  PAGES_HORIZONTAL_MARGIN,
} = Constants.manifest.extra

const usePageSize = ({ sidePanelSettings }) => {

  const { fullPageWidth: width, fullPageHeight: height } = useAdjustedDimensions({ sidePanelSettings })

  const size = useMemo(
    () => {
      const maxWidth = height < width ? PAGE_LIST_MAXIMUM_PAGE_SIZE : PAGE_LIST_MAXIMUM_PAGE_SIZE * ( width / height )
      const pagesPerRow = parseInt(width / maxWidth)
      const pageWidth = (width - ((pagesPerRow + 1) * PAGES_HORIZONTAL_MARGIN)) / pagesPerRow
      const pageHeight = pageWidth / ( width / height )
      const zoomScale = pageWidth / width
    
      return {
        pageWidth,
        pageHeight,
        pagesPerRow,
        zoomScale,
      }
    },
    [ width, height ],
  )

  return size
}

export default usePageSize