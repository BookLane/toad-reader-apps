import { Dimensions } from "react-native"

const {
  PAGE_LIST_MAXIMUM_PAGE_SIZE,
} = Expo.Constants.manifest.extra

const cachedSizes = {}

export const getPageSize = ({ width, height }=Dimensions.get('window')) => {

  if(!cachedSizes[`${width}x${height}`]) {
    const maxWidth = height < width ? PAGE_LIST_MAXIMUM_PAGE_SIZE : PAGE_LIST_MAXIMUM_PAGE_SIZE * ( width / height )
    const pagesPerRow = parseInt(width / maxWidth)
    const pageWidth = (width - ((pagesPerRow + 1) * 10)) / pagesPerRow
    const pageHeight = pageWidth / ( width / height )

    cachedSizes[`${width}x${height}`] = {
      pageWidth,
      pageHeight,
      pagesPerRow,
    }
  }

  return cachedSizes[`${width}x${height}`]
}
