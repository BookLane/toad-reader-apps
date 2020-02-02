import React from "react"
import { Platform, Dimensions, StatusBar, Linking, Text } from "react-native"
import * as FileSystem from 'expo-file-system'
import Constants from 'expo-constants'
import { i18n } from "inline-i18n"
import { isIphoneX, getStatusBarHeight } from "react-native-iphone-x-helper"

const {
  REQUEST_OPTIONS,
  ANDROID_STATUS_BAR_COLOR,
  DEV_DATA_ORIGIN_OVERRIDE,
} = Constants.manifest.extra

const cachedSizes = {}

export const cloneObj = obj => JSON.parse(JSON.stringify(obj))

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

export const getBooksDir = () => Platform.OS === 'web' ? `${window.location.origin}/book/` : `${FileSystem.documentDirectory}books/`
export const getSnapshotsDir = () => `${FileSystem.documentDirectory}snapshots/`

export const getSpineAndPage = ({ latest_location, spineIdRef, cfi, book, displaySettings={} }) => {
  try {
    
    if(latest_location) {
      const latestLocation = JSON.parse(latest_location)
      spineIdRef = latestLocation.idref
      cfi = latestLocation.elementCfi
    }

    const pageCfisKey = getPageCfisKey({ displaySettings })
    let pageCfis = []
    let pageCfisKnown = false
    book && book.spines.some(spine => {
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
      cfi,
      pageIndexInSpine,
      pageCfisKnown,
    }

  } catch(e) {
    return {}
  }
}

export const isIPhoneX = isIphoneX()
export const getFooterHeight = () => 0 //56
export const getToolbarHeight = () => 56
export const statusBarHeight = getStatusBarHeight()
export const statusBarHeightSafe = getStatusBarHeight(true)
export const iPhoneXFooter = 16

export const getFullName = user => user ? `${user.fullname || ''}`.trim() : ``

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
    StatusBar.setBarStyle(setHidden ? 'light-content' : 'dark-content', true)
  }
  statusBarIsHidden = !!setHidden
}
export const isStatusBarHidden = () => statusBarIsHidden

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
    if(idpInfo.xapiOn && !idpInfo.xapiConsentShown) {
      text = idpInfo.xapiConsentText || text
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

export const dashifyDomain = domain => domain
  .replace(/-/g, '--')
  .replace(/\./g, '-')

export const isStaging = () => (
  Constants.manifest.releaseChannel === 'staging'
  || (
    Platform.OS === 'web'
    && /\.staging\.toadreader\.com$/.test(window.location.hostname)
  )
)

export const getDataOrigin = ({ domain, protocol=`https` }={}) => {

  if(__DEV__) {
    // dev environment
    return `http://${DEV_DATA_ORIGIN_OVERRIDE || `localhost`}:8080`
  }

  if(isStaging()) {
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

export const createAccessCode = ({ digitOptions=`ABCDEFGHJKMNPQRSTUVWXYZ23456789`, codeLength=6 }={}) => (
  Array(codeLength)
    .fill(0)
    .map(() => digitOptions[parseInt(Math.random() * digitOptions.length, 10)])
    .join('')
)

export const createShareCode = () => createAccessCode({
  digitOptions: `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_`,
  codeLength: 5,
})

export const getIdsFromAccountId = accountId => {
  const [ idpId, userId ] = accountId.split(':').map(Number)

  return {
    idpId,
    userId,
  }
}

const identicalFetchDelayFactor = 100
const identicalFetchMaxDelay = 1000 * 60 * 5
const fetchRequests = {}
export const safeFetch = async (uri, options={}) => {
  const delayTime = fetchRequests[uri] || 0

  fetchRequests[uri] = Math.min((delayTime * 2) || identicalFetchDelayFactor, identicalFetchMaxDelay)

  const addedTime = fetchRequests[uri] - delayTime

  setTimeout(() => fetchRequests[uri] -= addedTime, addedTime)

  await new Promise(resolve => setTimeout(resolve, delayTime))

  return fetch(uri, options)
}


export const textToReactNative = text => {

  if(!text) return null

  const linksRegEx = /((?:(?:https?|ftp):\/\/)?[\w/\-?=%.]+\.[\w/\-?=%.#]+)/g
  const linkWithSchemeRegEx = /^(?:https?|ftp):\/\//

  const linksToReactNative = text => (
    text
      .split(linksRegEx)
      .map((piece, idx) => (
        <React.Fragment key={idx}>
          {linksRegEx.test(piece)
            ? (
              <Text
                style={{ color: 'blue' }}
                onPress={() => {
                  openURL({ url: linkWithSchemeRegEx.test(piece) ? piece : `https://${piece}` })
                }}
              >
                {piece}
              </Text>
            )
            : piece
          }
        </React.Fragment>
      ))
  )

  return linksToReactNative(text)
}

export const shuffleArray = a => {
  for(let i=a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export const combineItems = (...labels) => {
  const nonEmptyLabels = labels.filter(Boolean)

  if(nonEmptyLabels.length === 0) return ""

  return nonEmptyLabels.reduce((item1, item2) => (
    i18n("{{item1}}, {{item2}}", {
      item1,
      item2,
    })
  ))
}

export const isValidEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}


export const getDraftToolByCurrentlyPublishedToolUid = tools => {
  const hasDraftTool = {}

  tools.forEach(tool => {
    const { currently_published_tool_uid, published_at, _delete } = tool

    if(
      currently_published_tool_uid
      && !published_at
      && !_delete
    ) {
      hasDraftTool[currently_published_tool_uid] = tool
    }
  })

  return hasDraftTool
}

export const nonEmpty = str => !!(str || "").trim()

export const validUrl = url => /^https?:\/\/[^.]+\.[^.]/.test(url || "")

export const validDomain = domain => /^[-a-z0-9]+\.[-.a-z0-9]+$/i.test(domain || "")

export const validLTIUrl = ({ url, fromDefaultClassroom, classroom }) => {
  const { lti_configurations } = classroom

  return (
    validUrl(url)
    && (
      fromDefaultClassroom
      || (lti_configurations || []).some(({ domain }) => (
        url.replace(/^https?:\/\/([^\/]*).*$/, '$1') === domain
      ))
    )
  )
}

export const openURL = ({ url, newTab=true, historyPush }) => {
  if(Platform.OS === 'web' && newTab) {
    const urlToOpen = new URL(url, window.location).toString()
    window.open(urlToOpen, '_blank')
    return
  }

  Linking.openURL(url).catch(err => {
    console.log('ERROR: Request to open URL failed.', err)
    historyPush && historyPush("/error", {
      message: i18n("Your device is not allowing us to open this link."),
    })
  })
}