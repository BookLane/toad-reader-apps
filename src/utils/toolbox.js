import { Platform, Dimensions, StatusBar } from "react-native"
import * as FileSystem from 'expo-file-system'
import Constants from 'expo-constants'
import i18n from "./i18n.js"

const {
  PAGE_LIST_MAXIMUM_PAGE_SIZE,
  PAGES_HORIZONTAL_MARGIN,
  LIBRARY_COVERS_HORIZONTAL_MARGIN,
  LIBRARY_COVERS_MAXIMUM_COVER_SIZE,
  REQUEST_OPTIONS,
  ANDROID_STATUS_BAR_COLOR,
  DEV_DATA_ORIGIN_OVERRIDE,
} = Constants.manifest.extra

const cachedSizes = {}

export const cloneObj = obj => JSON.parse(JSON.stringify(obj))

const getSizes = ({
  type,
  width,
  height,
  maxSize,
  horizontalMargin,
}) => {

  const cacheKey = `${type}:${width}x${height},${maxSize},${horizontalMargin}`

  if(!cachedSizes[cacheKey]) {
    const maxWidth = height < width ? maxSize : maxSize * ( width / height )
    const itemsPerRow = parseInt(width / maxWidth)
    const itemWidth = (width - ((itemsPerRow + 1) * horizontalMargin)) / itemsPerRow
    const itemHeight = itemWidth / ( width / height )

    cachedSizes[cacheKey] = {
      [`${type}Width`]: itemWidth,
      [`${type}Height`]: itemHeight,
      [`${type}sPerRow`]: itemsPerRow,
    }
  }

  return cachedSizes[cacheKey]
}

export const getPageSize = ({ width, height }=Dimensions.get('window')) => (
  getSizes({
    width,
    height,
    type: 'page',
    maxSize: PAGE_LIST_MAXIMUM_PAGE_SIZE,
    horizontalMargin: PAGES_HORIZONTAL_MARGIN,
  })
)

export const getCoverSize = ({ width }=Dimensions.get('window')) => (
  getSizes({
    width,
    height: width/.75,
    type: 'cover',
    maxSize: LIBRARY_COVERS_MAXIMUM_COVER_SIZE,
    horizontalMargin: LIBRARY_COVERS_HORIZONTAL_MARGIN,
  })
)

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

export const getDisplaySettingsObj = displaySettings => ({
  ...displaySettings,
  columns: 'single',
})

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

export const getBooksDir = () => Platform.OS === 'web' ? `${location.origin}/book/` : `${FileSystem.documentDirectory}books/`
export const getSnapshotsDir = () => `${FileSystem.documentDirectory}snapshots/`

export const getSpineAndPage = ({ latest_location, spineIdRef, cfi, book, displaySettings }) => {
  try {
    
    if(latest_location) {
      const latestLocation = latestLocationToObj(latest_location)
      spineIdRef = latestLocation.spineIdRef
      cfi = latestLocation.cfi
    }

    const pageCfisKey = getPageCfisKey({ displaySettings })
    let pageCfis = []
    let pageCfisKnown = false
    book.spines.some(spine => {
      if(spine.idref === spineIdRef) {
        if(spine.pageCfis) {
          pageCfis = spine.pageCfis[pageCfisKey]
          pageCfisKnown = true
        }
        return true
      }
    })
    const pageIndexInSpine = getPageIndexInSpine({ pageCfis, cfi })

    return {
      spineIdRef,
      pageIndexInSpine,
      pageCfisKnown,
    }

  } catch(e) {
    return {}
  }
}

export const isIPhoneX = false
export const getFooterHeight = () => 50
export const getToolbarHeight = () => 56
// TODO
// export const isIPhoneX = nativeBasePlatformVariables.isIphoneX
// export const getFooterHeight = () => nativeBasePlatformVariables.footerHeight - (isIPhoneX ? 34 : 0)
// export const getToolbarHeight = () => nativeBasePlatformVariables.toolbarHeight

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

// This was used with react-navigation where a double tap caused double navigation. I'm not sure if it is still needed.
// let lastDebounce
// export const debounce = (func, ...params) => {
//   if(lastDebounce !== JSON.stringify(params)) {
//     func(...params)
//     lastDebounce = JSON.stringify(params)
//     setTimeout(() => lastDebounce = undefined, 1500)
//   }
// }

export const fetchWithProgress = (url, { progressCallback, abortFunctionCallback, cookie, timeout }) => (
  new Promise((resolve, reject) => {
    const xhr = new window.XMLHttpRequest()

    xhr.open('GET', url, true)

    // set headers
    const reqHeaders = (getReqOptionsWithAdditions({
      headers: {
        "x-cookie-override": cookie,
      },
    }) || {}).headers

    for(let reqHeaderKey in reqHeaders) {
      xhr.setRequestHeader(reqHeaderKey, reqHeaders[reqHeaderKey])
    }

    // recent browsers
    if("responseType" in xhr) {
      xhr.responseType = "arraybuffer"
    }

    // older browser
    if(xhr.overrideMimeType) {
      xhr.overrideMimeType("text/plain; charset=x-user-defined")
    }

    if(timeout) {
      xhr.timeout = timeout
    }

    if(progressCallback) {
      xhr.onprogress = evt => {
        progressCallback(evt.loaded / evt.total)
      }
    }

    xhr.onreadystatechange = evt => {
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          resolve(xhr.response || xhr.responseText)
        } else {
          // It also goes here with status of 0 for no internet connection
          // and status of 403 for no auth.
          reject(xhr.status)
        }
      }
    }

    xhr.send()

    if(abortFunctionCallback) {
      abortFunctionCallback(xhr.abort.bind(xhr))
    }
  })
)

export const getReqOptionsWithAdditions = additions => {
  const reqOptions = JSON.parse(JSON.stringify(REQUEST_OPTIONS || {}))

  const mergeInObj = (obj1, obj2) => {
    for(let key in obj2) {
      if(typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        mergeInObj(obj1[key], obj2[key])
      } else {
        obj1[key] = obj2[key]
      }
    }
  }

  mergeInObj(reqOptions, additions)
  mergeInObj(reqOptions, { headers: { "x-platform": Platform.OS } })

  return reqOptions
}

const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
export const encodeBase64 = str => {
  let output = '';

  for (
    let block = 0, charCode, i = 0, map = base64Chars;
    str.charAt(i | 0) || (map = '=', i % 1);
    output += map.charAt(63 & block >> 8 - i % 1 * 8)
  ) {

    charCode = str.charCodeAt(i += 3/4)

    if (charCode > 0xFF) {
      throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.")
    }

    block = block << 8 | charCode

    // To prevent memory from blowing up, I need to index the string every once and a while.
    // https://stackoverflow.com/questions/35354801/why-does-v8-run-out-of-memory-in-this-situation
    if (i % 3000000 === 0) output[0]
    
  }

  return output
}

let statusBarIsHidden = false
export const setStatusBarHidden = setHidden => {
  if(Platform.OS === 'ios') {
    StatusBar.setHidden(setHidden)
  } else if(Platform.OS === 'android') {
    StatusBar.setBackgroundColor(setHidden ? 'white' : ANDROID_STATUS_BAR_COLOR, true)
    // StatusBar.setBarStyle(setHidden ? 'dark-content' : 'light-content', true)
  }
  statusBarIsHidden = !!setHidden
}
export const isStatusBarHidden = () => statusBarIsHidden

let nextIdForTimeout = 1
const componentTimeouts = {}

export const setUpTimeout = (func, ms, thisVar) => {

  if(!thisVar.__idForTimeouts) {
    thisVar.__idForTimeouts = nextIdForTimeout++
  }

  if(!componentTimeouts[thisVar.__idForTimeouts]) {
    componentTimeouts[thisVar.__idForTimeouts] = {}
  }

  const timeout = setTimeout(() => {
    if((componentTimeouts[thisVar.__idForTimeouts] || {})[timeout]) {
      delete componentTimeouts[thisVar.__idForTimeouts][timeout]
      func()
    }
  }, ms)

  componentTimeouts[thisVar.__idForTimeouts][timeout] = true

  return timeout
}

export const clearOutTimeout = (timeout, thisVar) => {
  clearTimeout(timeout)
  if(componentTimeouts[thisVar.__idForTimeouts]) {
    delete componentTimeouts[thisVar.__idForTimeouts][timeout]
  }
}

export const unmountTimeouts = function() {
  if(componentTimeouts[this.__idForTimeouts]) {
    Object.keys(componentTimeouts[this.__idForTimeouts]).forEach(timeout => clearOutTimeout(parseInt(timeout, 10), this))
    delete componentTimeouts[this.__idForTimeouts]
    delete this.__idForTimeouts
  }
}

export const getFirstBookLinkInfo = book => {
  for(let accountId in book.accounts) {
    const bookLinkInfo = book.accounts[accountId].link
    if(bookLinkInfo) {
      return bookLinkInfo
    }
  }
}

export const showXapiConsent = ({ idps, setXapiConsentShown }) => {

  let text = i18n("Note: By using this app, you consent to us recording usage data for the purpose of better improving our services.")

  if(Object.values(idps).some(idpInfo => {
    if(idpInfo.idpXapiOn && !idpInfo.xapiConsentShown) {
      text = idpInfo.idpXapiConsentText || text
      return true
    }
  })) {

    // Toast.show({
    //   text,
    //   buttonText: i18n("Okay"),
    //   duration: 0,
    //   onClose: setXapiConsentShown,
    // })

  }

}

const dashifyDomain = domain => domain
  .replace(/-/g, '--')
  .replace(/\./g, '-')

export const getDataOrigin = ({ domain, protocol=`https` }={}) => {

  if(__DEV__) {
    // dev environment
    return `http://${DEV_DATA_ORIGIN_OVERRIDE || `localhost`}:8080`
  }

  if(
    Constants.manifest.releaseChannel === 'staging'
    || (
      Platform.OS === 'web'
      && /\.staging\.toadreader\.com$/.test(location.hostname)
    )
  ) {
    // staging environment
    return `${protocol}://${dashifyDomain(domain)}.data.staging.toadreader.com`
  }

  // production environment
  return `${protocol}://${dashifyDomain(domain)}.data.toadreader.com`

}

export const getMBSizeStr = numBytes => {
  const sizeInMB = Math.round(numBytes/10000, 10) / 100

  if(sizeInMB) {
    return i18n("{{num}} mb", { num: sizeInMB })
  }
  
  const sizeInKB = Math.round(numBytes/10, 10) / 100
  return i18n("{{num}} kb", { num: sizeInKB })
}