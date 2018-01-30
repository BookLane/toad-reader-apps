import { Dimensions } from "react-native"
import { FileSystem } from "expo"

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

// copied from readium-js/readium-shared-js/plugins/highlights
const parseContentCfi = cont => (
  cont
    .replace(/\[(.*?)\]/, "")
    .split(/[\/,:]/)
    .map(n => parseInt(n))
    .filter(Boolean)
)

// copied from readium-js/readium-shared-js/plugins/highlights
const contentCfiComparator = (cont1, cont2) => {
  cont1 = parseContentCfi(cont1);
  cont2 = parseContentCfi(cont2);

  //compare cont arrays looking for differences
  for(var i = 0; i < cont1.length; i++) {
    if(cont1[i] > cont2[i]) {
      return 1
    } else if(cont1[i] < cont2[i]) {
      return -1
    }
  }

  //no differences found, so confirm that cont2 did not have values we didn't check
  if(cont1.length < cont2.length) return -1

  //cont arrays are identical
  return 0
}

export const getPageIndexInSpine = ({ pageCfis, cfi }) => {
  if(cfi == null) return 0

  let pageIndexInSpine = pageCfis.length - 1

  pageCfis.slice(1).some((pageCfi, idx) => {
    if(contentCfiComparator(cfi, pageCfi) === -1) {
      pageIndexInSpine = idx
      return true
    }
  })

  return pageIndexInSpine
}

export const latestLocationToObj = latest_location => {
  const latestLocation = JSON.parse(latest_location)

  return {
    spineIdRef: latestLocation.idref,
    cfi: latestLocation.elementCfi,
  }
}

export const latestLocationToStr = latestLocation => {
  return JSON.stringify({
    idref: latestLocation.spineIdRef,
    ...(latestLocation.cfi != null ? { elementCfi: latestLocation.cfi } : {}),
  })
}

export const getDisplaySettingsObj = props => {
  const { displaySettings } = props

  return {
    ...displaySettings,
    columns: 'single',
  }
}

export const getPageCfisKey = ({ displaySettings, width, height }) => {
  const { textSize, textSpacing } = displaySettings
  if(!width) {
    width = Dimensions.get('window').width
    height = Dimensions.get('window').height
  }

  return `${width}x${height}_${textSize}_${textSpacing}`
}

export const getSnapshotURI = params => {
  let { bookId, spineIdRef, pageIndexInSpine=0, pageCfisKey } = params

  return `${getSnapshotsDir()}${bookId}/${spineIdRef}_${pageIndexInSpine}_${pageCfisKey || getPageCfisKey(params)}.jpg`
}

export const getBooksDir = () => `${FileSystem.documentDirectory}books/`
export const getSnapshotsDir = () => `${FileSystem.documentDirectory}snapshots/`

export const getSpineAndPage = ({ latest_location, spineIdRef, cfi, book, displaySettings }) => {
  try {
    
    if(!spineIdRef || !cfi) {
      const latestLocation = latestLocationToObj(latest_location)
      spineIdRef = latestLocation.spineIdRef
      cfi = latestLocation.cfi
    }

    const pageCfisKey = getPageCfisKey({ displaySettings })
    let pageCfis
    book.spines.some(spine => {
      if(spine.idref === spineIdRef) {
        pageCfis = spine.pageCfis[pageCfisKey]
        return true
      }
    })
    const pageIndexInSpine = getPageIndexInSpine({ pageCfis, cfi })

    return {
      spineIdRef,
      pageIndexInSpine,
    }

  } catch(e) {
    return {}
  }
}