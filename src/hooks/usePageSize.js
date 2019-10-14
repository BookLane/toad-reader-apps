import { useMemo } from "react"
import Constants from 'expo-constants'
import useDimensions from './useDimensions'

const {
  PAGE_LIST_MAXIMUM_PAGE_SIZE,
  PAGES_HORIZONTAL_MARGIN,
} = Constants.manifest.extra

const usePageSize = () => {

  const { width, height } = useDimensions().window

  const size = useMemo(
    () => {
      const maxWidth = height < width ? PAGE_LIST_MAXIMUM_PAGE_SIZE : PAGE_LIST_MAXIMUM_PAGE_SIZE * ( width / height )
      const itemsPerRow = parseInt(width / maxWidth)
      const itemWidth = (width - ((itemsPerRow + 1) * PAGES_HORIZONTAL_MARGIN)) / itemsPerRow
      const itemHeight = itemWidth / ( width / height )
    
      return {
        itemWidth,
        itemHeight,
        itemsPerRow,
      }
    },
    [ width, height ],
  )

  return size
}

export default usePageSize