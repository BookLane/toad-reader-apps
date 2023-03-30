import { useMemo } from "react"
import Constants from 'expo-constants'

import useAdjustedDimensions from './useAdjustedDimensions'

const {
  PAGE_LIST_MAXIMUM_PAGE_SIZE,
  PAGES_HORIZONTAL_MARGIN,
} = Constants.expoConfig.extra

const usePageSize = ({ sidePanelSettings }) => {

  const { fullPageWidth: width, fullPageHeight: height } = useAdjustedDimensions({ sidePanelSettings })

  const size = useMemo(
    () => {
      const maxWidth = parseInt(height < width ? PAGE_LIST_MAXIMUM_PAGE_SIZE : PAGE_LIST_MAXIMUM_PAGE_SIZE * ( width / height ), 10)
      const pagesPerRow = parseInt(width / maxWidth, 10)
      const pageWidth = parseInt((width - ((pagesPerRow + 1) * PAGES_HORIZONTAL_MARGIN)) / pagesPerRow, 10)
      const pageHeight = parseInt(pageWidth / ( width / height ), 10)
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