import React from "react"
import { Platform, StatusBar, Linking, Text } from "react-native"
import * as FileSystem from 'expo-file-system'
import Constants from 'expo-constants'
import { i18n, getLocale } from "inline-i18n"
import { isIphoneX, getStatusBarHeight } from "react-native-iphone-x-helper"
import * as Device from 'expo-device'
import * as Sentry from "./sentry"

const {
  REQUEST_OPTIONS,
  ANDROID_STATUS_BAR_COLOR,
  DEV_DATA_ORIGIN_OVERRIDE,
} = Constants.manifest.extra

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
export const contentCfiComparator = (cont1, cont2) => {
  if(cont1 === 'AT THE END') return 1
  if(cont2 === 'AT THE END') return -1

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

export const getPageCfisKey = ({ displaySettings, width, height, spineInlineToolsHash }) => {
  const { textSize, textSpacing } = displaySettings

  return `${width}x${height}_${textSize}_${textSpacing}_${spineInlineToolsHash}`
}

export const getSnapshotURI = params => {
  let { bookId, spineIdRef, pageIndexInSpine=0, pageCfisKey } = params

  return `${getSnapshotsDir()}${bookId}/${spineIdRef}_${pageIndexInSpine}_${pageCfisKey || getPageCfisKey(params)}.jpg`
}

export const getToolCfiCounts = ({ visibleTools, spineIdRef }) => {
  const countsByCfi = {}

  visibleTools.forEach(({ uid, cfi, published_at, ...tool }) => {
    if(tool.spineIdRef !== spineIdRef) return
    if(!countsByCfi[cfi]) {
      countsByCfi[cfi] = 0
    }
    countsByCfi[cfi]++
  })

  return countsByCfi
}

export const getBooksDir = () => Platform.OS === 'web' ? `${window.location.origin}/book/` : `${FileSystem.documentDirectory}books/`
export const getSnapshotsDir = () => `${FileSystem.documentDirectory}snapshots/`

export const isIPhoneX = isIphoneX()
const getBottomSpace = () => (
  // In react-native-iphone-x-helper, the getBottomSpace function does not support iPad Pro.
  // But maybe it will at some point.
  // See: https://github.com/ptelad/react-native-iphone-x-helper/issues/20

  (isIPhoneX || /^iPad8/.test(Device.modelId))
    ? 34
    : 0
)
export const statusBarHeight = getStatusBarHeight()
export const statusBarHeightSafe = getStatusBarHeight(true)
export const getFooterHeight = () => 0 //56
export const getToolbarHeight = () => 56
export const bottomSpace = getBottomSpace() / 2

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
    // Note: setHidden was not working because capturing the snapshots unhides StatusBar
    // for some unknown reason. Thus, I'm using setBarStyle instead.
    // StatusBar.setHidden(setHidden)
    StatusBar.setBarStyle(setHidden ? 'light-content' : 'dark-content', false)
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

export const showConsent = ({ idps, setConsentShown }) => {

  let text = i18n("Note: By using this app, you consent to us recording usage data for the purposes of providing instructors with analytics and better improving our services.")

  if(Object.values(idps).some(idpInfo => {
    if((idpInfo.xapiOn || idpInfo.readingSessionsOn) && !idpInfo.consentShown) {
      text = idpInfo.consentText || text
      return true
    }
  })) {

    // Toast.show({
    //   text,
    //   buttonText: i18n("Okay"),
    //   duration: 0,
    //   onClose: setConsentShown,
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

export const getIDPOrigin = ({ domain, protocol=`https` }) => {

  if(__DEV__) {
    // dev environment
    return `http://${DEV_DATA_ORIGIN_OVERRIDE || `localhost`}:19006`
  }

  if(isStaging()) {
    // staging environment
    return `${protocol}://${dashifyDomain(domain)}.staging.toadreader.com`
  }

  // production environment
  return `${protocol}://${domain}`
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

export const validUrl = url => /^https:\/\/[^. ]+\.[^. ][^ ]*$/.test(url || "")

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

export const objectMap = (obj, fn) => (
  Object.fromEntries(
    Object.entries(obj).map(
      ([k, v], i) => [k, fn(v, k, i)]
    )
  )
)

export const getDateLine = ({ timestamp, short }) => {
  const date = new Date(timestamp)
  const now = new Date()

  const options = {
    year: 'numeric',
    month: short ? 'short' : 'long',
    day: 'numeric',
  }

  if(
    short
    && date.getTime() > now.getTime() - (1000*60*60*24*31)  // greater than a month ago
    && date.getTime() < now.getTime() + (1000*60*60*24*31*5)  // less than 5 months in the future
  ) {
    delete options.year
  }

  return date.toLocaleDateString(getLocale(), options)
}

export const getTimeLine = ({ date, timestamp, short }) => {
  date = date || new Date(timestamp)

  const options = {
    hour: 'numeric',
    minute: '2-digit',
    // timeZoneName: 'short',
  }

  if(short && date.getMinutes() === 0) {
    delete options.minute
  }

  let timeLine = date.toLocaleTimeString(getLocale(), options)
  const timeLinePieces = timeLine.split(':')
  
  if(timeLinePieces.length === 3) {  // i.e. toLocaleTimeString did not accept options (an Android issue)
    timeLine = `${timeLinePieces[0]}:${timeLinePieces[1]}`
  }

  return timeLine
}

export const splitDraftDataToOptionsAndFrontMatter = (draftData={}) => {
  const frontMatterDraftData = { ...draftData }
  const optionsDraftData = {}

  ;[ 'lti_configurations' ].forEach(field => {
    if(frontMatterDraftData[field] !== undefined) {
      optionsDraftData[field] = frontMatterDraftData[field]
    }
    delete frontMatterDraftData[field]
  })

  return [ optionsDraftData, frontMatterDraftData ]
}

export const getSpineIdRefsInToc = toc => {
  const flatToc = []
  const addToFlatTocRecursive = tocLevel => {
    tocLevel.forEach(tocItem => {
      flatToc.push(tocItem)
      if(tocItem.subNav) {
        addToFlatTocRecursive(tocItem.subNav)
      }
    })
  }
  addToFlatTocRecursive(toc || [])

  return [ ...new Set(flatToc.map(({ spineIdRef }) => spineIdRef)) ]
}

export const orderSpineIdRefKeyedObj = ({ obj, spines }) => {
  const spineIdRefs = [
    ...spines.map(({ idref }) => idref),
    'AFTER LAST SPINE',
  ]

  const arrayOfObjs = Object.keys(obj).map(key => ({
    index: spineIdRefs.indexOf(key),
    value: obj[key],
  }))

  arrayOfObjs.sort((a, b) => a.index - b.index)

  return arrayOfObjs.map(({ value }) => value)
}

export const orderCfiKeyedObj = ({ obj }) => {
  const arrayOfObjs = Object.keys(obj).map(key => ([
    key,
    obj[key],
  ]))

  arrayOfObjs.sort((a, b) => contentCfiComparator(a[0], b[0]))

  return arrayOfObjs.map(([ key, val ]) => val)
}

export const getHoursMinutesStr = minutes => {
  const hours = parseInt(minutes / 60, 10)
  minutes = minutes % 60

  if(hours && minutes) {
    return i18n("{{hours}}h {{minutes}}m", "", "enhanced", { hours, minutes })
  } else if(hours) {
    return i18n("{{hours}}h", "", "enhanced", { hours })
  } else {
    return i18n("{{minutes}}m", "", "enhanced", { minutes })
  }
}

export const fractionToPercent = fraction => (
  i18n("{{percent}}%", { percent: Math.min(Math.round(fraction * 100), 100) })
)

export const concatText = ({ text, maxLen }) => {
  if(text.length > maxLen) {
    return i18n("{{text}}...", "", "enhanced", {
      text: text.substr(0, maxLen - 3),
    })
  }

  return text
}

export const customizeTheme = ({ theme, fontFamily }) => {
  // See https://formidable.com/open-source/victory/guides/themes
  
  const NewVictoryTheme = { ...theme }
  NewVictoryTheme.customMaterial = cloneObj(NewVictoryTheme.material)
  
  NewVictoryTheme.customMaterial.area.style.labels.fontFamily =
  NewVictoryTheme.customMaterial.axis.style.axisLabel.fontFamily =
  NewVictoryTheme.customMaterial.axis.style.tickLabels.fontFamily =
  NewVictoryTheme.customMaterial.bar.style.labels.fontFamily =
  NewVictoryTheme.customMaterial.boxplot.style.maxLabels.fontFamily =
  NewVictoryTheme.customMaterial.boxplot.style.medianLabels.fontFamily =
  NewVictoryTheme.customMaterial.boxplot.style.minLabels.fontFamily =
  NewVictoryTheme.customMaterial.boxplot.style.q1Labels.fontFamily =
  NewVictoryTheme.customMaterial.boxplot.style.q3Labels.fontFamily =
  NewVictoryTheme.customMaterial.candlestick.style.labels.fontFamily =
  NewVictoryTheme.customMaterial.errorbar.style.labels.fontFamily =
  NewVictoryTheme.customMaterial.legend.style.labels.fontFamily =
  NewVictoryTheme.customMaterial.line.style.labels.fontFamily =
  NewVictoryTheme.customMaterial.pie.style.labels.fontFamily =
  NewVictoryTheme.customMaterial.scatter.style.labels.fontFamily =
  NewVictoryTheme.customMaterial.tooltip.style.fontFamily =
  NewVictoryTheme.customMaterial.voronoi.style.labels.fontFamily =
    fontFamily
  
  return NewVictoryTheme
}

export const sentry = (...params) => {
  if(params.length === 1 && params[0].error) {
    Sentry.captureException(params[0].error)
  } else if(params.length === 1 && params[0].message) {
    Sentry.captureMessage(String(params[0].message))
  } else {
    Sentry.captureException(new Error(params.map(param => JSON.stringify(param)).join("\n")))
  }
}

export const getQueryString = () => {
  const query = {}

  if(Platform.OS === 'web') {
    window.location.search.substring(1)
      .split('&')
      .filter(Boolean)
      .forEach(param => {
        const paramPieces = param.split("=")
        if(paramPieces[0]) {
          query[decodeURIComponent(paramPieces[0])] = decodeURIComponent(paramPieces.slice(1))
        }
      })
  }

  return query
}