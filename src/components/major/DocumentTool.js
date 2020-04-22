import React, { useEffect, useState } from "react"
import { StyleSheet, View, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as FileSystem from 'expo-file-system'

import useClassroomInfo from "../../hooks/useClassroomInfo"
import useWideMode from "../../hooks/useWideMode"
import useNetwork from "../../hooks/useNetwork"
import { getDataOrigin, getReqOptionsWithAdditions } from '../../utils/toolbox'

import WebView from "./WebView"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerWideMode: {
    marginVertical: 20,
    marginHorizontal: 30,
    flex: 1,
  },
  webViewContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  webView: {
    width: '100%',
    height: '100%',
  },
  error: {
    textAlign: 'center',
    paddingTop: 80,
    fontWeight: '100',
  },
})

export const vimeoRegex = /^https:\/\/(?:www\.)?vimeo\.com\/(?:.*?\/video\/|channels\/[^\/]*\/)?([0-9]+)(?:\/[^\/]*)?\/?$/
export const youtubeRegex = /^https:\/\/(?:www\.)?youtube\.com\/watch\?v=([^&]*).*$/
export const shortYoutubeRegex = /^https:\/\/youtu\.be\/([^?]+).*$/

const DocumentTool = React.memo(({
  bookId,

  document={},

  idps,
  accounts,
  books,
}) => {

  const { accountId, idpId, classroomUid } = useClassroomInfo({ books, bookId })

  const wideMode = useWideMode()

  const { online } = useNetwork()

  const [ error, setError ] = useState()
  const [ downloading, setDownloading ] = useState()

  const uri = `${getDataOrigin(idps[idpId])}/enhanced_assets/${classroomUid}/${document.filename}`
  const tempLocalUri = `${FileSystem.cacheDirectory}syllabus_${classroomUid}_${document.filename}`

  useEffect(
    () => {
      if(uri && Platform.OS !== 'web' && online) {
        (async () => {

          if(Platform.OS === 'android') {
            setError("Android does not yet support viewing a syllabus.")
            return
          }

          setDownloading(true)
          setError()

          try {

            const { status } = await FileSystem.downloadAsync(uri, tempLocalUri, getReqOptionsWithAdditions({
              headers: {
                "x-cookie-override": accounts[accountId].cookie,
              },
            }))

            if(status >= 400) {
              setError(i18n("Network error: {{status}}"), { status })
            }

          } catch(err) {
            setError(i18n("Error in retrieving document."))
          }

          setDownloading(false)

        })()
      }
    },
    [ uri, tempLocalUri, online, accounts[accountId] ],
  )

  if(!document.filename) return null

  return (
    <View style={wideMode ? styles.containerWideMode : styles.container}>
      {downloading &&
        <CoverAndSpin />
      }
      {!!error &&
        <Text style={styles.error}>
          {!online
            ? i18n("Check your internet connection.")
            : error
          }
        </Text>
      }
      {!downloading && !error &&
        <WebView
          containerStyle={styles.webViewContainer}
          style={styles.webView}
          source={{
            uri: Platform.OS === 'web' ? uri : tempLocalUri,
          }}
          allowingReadAccessToURL={FileSystem.cacheDirectory}
          allowUniversalAccessFromFileURLs={true}
          allowFileAccess={true}
          originWhitelist={['*']}
          mixedContentMode="always"
          bounces={false}  
        />
      }
    </View>
  )
})

const mapStateToProps = ({ idps, accounts, books }) => ({
  idps,
  accounts,
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(DocumentTool)