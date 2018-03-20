import { Dimensions } from "react-native"
import { FileSystem } from "expo"
import nativeBasePlatformVariables from 'native-base/src/theme/variables/platform'

const {
  PAGE_LIST_MAXIMUM_PAGE_SIZE,
  PAGES_HORIZONTAL_MARGIN,
} = Expo.Constants.manifest.extra

const cachedSizes = {}

export const getPageSize = ({ width, height }=Dimensions.get('window')) => {

  if(!cachedSizes[`${width}x${height}`]) {
    const maxWidth = height < width ? PAGE_LIST_MAXIMUM_PAGE_SIZE : PAGE_LIST_MAXIMUM_PAGE_SIZE * ( width / height )
    const pagesPerRow = parseInt(width / maxWidth)
    const pageWidth = (width - ((pagesPerRow + 1) * PAGES_HORIZONTAL_MARGIN)) / pagesPerRow
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

export const isIPhoneX = nativeBasePlatformVariables.isIphoneX
export const getFooterHeight = () => nativeBasePlatformVariables.footerHeight - (isIPhoneX ? 34 : 0)
export const getToolbarHeight = () => nativeBasePlatformVariables.toolbarHeight

export const isPhoneSize = () => {
  const { width, height } = Dimensions.get('window')
  return Math.min(width, height) < 500
}

export const getFullName = user => user ? `${user.firstname || ''} ${user.lastname || ''}`.trim() : ``

export const JSON_to_URLEncoded = (element, key, list) => {
  var list = list || []
  if(typeof(element)=='object') {
    for(var idx in element)
      JSON_to_URLEncoded(element[idx], key?key+'['+idx+']':idx, list)
  } else {
    list.push(key + '=' + encodeURIComponent(element))
  }
  return list.join('&')
}

// The navigate function prevents a double tap from causing double navigation
let lastDebounce
export const debounce = (func, ...params) => {
  if(lastDebounce !== JSON.stringify(params)) {
    func(...params)
    lastDebounce = JSON.stringify(params)
    setTimeout(() => lastDebounce = undefined, 1500)
  }
}

export const fetchWithProgress = async (url, { progressCallback, abortFunctionCallback }) => (
  new Promise((resolve, reject) => {
    const xhr = new window.XMLHttpRequest()

    xhr.open('GET', url, true)

    // recent browsers
    if("responseType" in xhr) {
      xhr.responseType = "arraybuffer"
    }

    // older browser
    if(xhr.overrideMimeType) {
      xhr.overrideMimeType("text/plain; charset=x-user-defined")
    }

    if(progressCallback) {
      xhr.onprogress = evt => {
        progressCallback(evt.loaded / evt.total)
      }
    }

    xhr.onreadystatechange = evt => {
      if(xhr.readyState === 4) {
        if(xhr.status === 200 || xhr.status === 0) {
          resolve(xhr.response || xhr.responseText)
        } else {
          reject(`Ajax error for ${url} : ${xhr.status} ${xhr.statusText}`)
        }
      }
    }

    xhr.send()

    if(abortFunctionCallback) {
      abortFunctionCallback(xhr.abort.bind(xhr))
    }
  })
)