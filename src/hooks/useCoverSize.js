import { useMemo } from "react"
import Constants from 'expo-constants'
import useDimensions from './useDimensions'

const {
  LIBRARY_COVERS_HORIZONTAL_MARGIN = 20,
  LIBRARY_COVERS_MAXIMUM_COVER_SIZE = 100,
} = Constants.expoConfig.extra

const useCoverSize = ({
  viewingAudiobooks,
}) => {

  const { width } = useDimensions().window
  const height = viewingAudiobooks ? width : width/.75

  const size = useMemo(
    () => {
      const maxWidth = parseInt(height < width ? LIBRARY_COVERS_MAXIMUM_COVER_SIZE : LIBRARY_COVERS_MAXIMUM_COVER_SIZE * ( width / height ), 10)
      const coversPerRow = parseInt(width / maxWidth, 10)
      const coverWidth = parseInt((width - ((coversPerRow + 1) * LIBRARY_COVERS_HORIZONTAL_MARGIN)) / coversPerRow, 10)
      const coverHeight = parseInt(coverWidth / ( width / height ), 10)

      return {
        coverWidth,
        coverHeight,
        coversPerRow,
      }
    },
    [ width, height ],
  )

  return size
}

export default useCoverSize
