import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from 'inline-i18n'

import useClassroomInfo from "../../hooks/useClassroomInfo"
import useWideMode from "../../hooks/useWideMode"
import useNetwork from "../../hooks/useNetwork"
import { getDataOrigin, getReqOptionsWithAdditions } from '../../utils/toolbox'

import WebView from "./WebView"
import FAB from "../basic/FAB"

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
  hiddenWebView: {
    position: 'absolute',
    maxWidth: 1,
    maxHeight: 1,
    top: -100,
  },
  error: {
    textAlign: 'center',
    paddingTop: 80,
    fontWeight: '100',
  },
})

const DocumentTool = React.memo(({
  bookId,
  toolName,

  document={},

  idps,
  accounts,
  books,
}) => {

  const { accountId, idpId, classroomUid } = useClassroomInfo({ books, bookId })

  const wideMode = useWideMode()

  const { online } = useNetwork()

  const [ downloading, setDownloading ] = useState()

  const setDownloadingToTrue = useCallback(() => setDownloading(true), [])

  const uri = `${getDataOrigin(idps[idpId])}/enhanced_assets/${classroomUid}/${document.filename}`

  if(!document.filename) return null

  const isPDF = /\.pdf$/i.test(document.filename)

  return (
    <>
      <View style={wideMode ? styles.containerWideMode : styles.container}>
        {!online &&
          <Text style={styles.error}>
            {i18n("Check your internet connection.")}
          </Text>
        }
        {isPDF && online && Platform.OS === 'android' &&
          <Text style={styles.error}>
            {i18n("Android does not yet support viewing PDFs.")}
            {"\n"}
            {i18n("Use a browser to download this file.")}
          </Text>
        }
        {!isPDF && online && Platform.OS === 'web' &&
          <Text style={styles.error}>
            {i18n("Download this file by clicking the button below.")}
          </Text>
        }
        {!isPDF && online && Platform.OS !== 'web' &&
          <Text style={styles.error}>
            {i18n("Use a browser to download this file.")}
          </Text>
        }
        {isPDF && online && Platform.OS !== 'android' &&
          <WebView
            containerStyle={styles.webViewContainer}
            style={styles.webView}
            source={{
              ...getReqOptionsWithAdditions({
                headers: {
                  "x-cookie-override": accounts[accountId].cookie,
                },
              }),
              uri: Platform.OS === 'android' ? `https://drive.google.com/viewerng/viewer?embedded=true&url=${encodeURIComponent(uri)}` : uri,
            }}
            mixedContentMode="always"
            bounces={false}
          />
        }
      </View>
      {online && Platform.OS === 'web' &&
        <FAB
          iconName="md-cloud-download"
          status="primary"
          onPress={setDownloadingToTrue}
        />
      }
      {downloading &&
        <WebView
          containerStyle={styles.hiddenWebView}
          source={{
            uri: `${uri}?filename=${encodeURIComponent(`${toolName || i18n("Document", "", "enhanced")}.${document.filename.split('.').slice(-1)[0]}`)}`,
          }}
          mixedContentMode="always"
          bounces={false}
        />
      }
    </>
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