import { useMemo } from "react"
import Constants from 'expo-constants'

import { isIPhoneX, iPhoneXFooter, statusBarHeight } from "../utils/toolbox"

import useDimensions from './useDimensions'

const {
  PAGE_LIST_MAXIMUM_PAGE_SIZE,
  PAGES_HORIZONTAL_MARGIN,
} = Constants.manifest.extra

const usePageSize = () => {

  let { width, height } = useDimensions().window

  if(isIPhoneX) {
    height -= (statusBarHeight + iPhoneXFooter)
  }

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