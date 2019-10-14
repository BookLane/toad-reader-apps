import { useMemo } from "react"
import Constants from 'expo-constants'
import useDimensions from './useDimensions'

const {
  LIBRARY_COVERS_HORIZONTAL_MARGIN,
  LIBRARY_COVERS_MAXIMUM_COVER_SIZE,
} = Constants.manifest.extra

const useCoverSize = () => {

  const { width } = useDimensions().window
  const height = width/.75

  const size = useMemo(
    () => {
      const maxWidth = height < width ? LIBRARY_COVERS_MAXIMUM_COVER_SIZE : LIBRARY_COVERS_MAXIMUM_COVER_SIZE * ( width / height )
      const itemsPerRow = parseInt(width / maxWidth)
      const itemWidth = (width - ((itemsPerRow + 1) * LIBRARY_COVERS_HORIZONTAL_MARGIN)) / itemsPerRow
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

export default useCoverSize