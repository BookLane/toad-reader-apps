import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from 'inline-i18n'

import useWideMode from "../../hooks/useWideMode"
import useNetwork from "../../hooks/useNetwork"
import { getReqOptionsWithAdditions } from '../../utils/toolbox'

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
  hiddenWebViewContainer: {
    position: 'absolute',
    maxWidth: 0,
    maxHeight: 0,
    overflow: 'hidden',
  },
  error: {
    textAlign: 'center',
    paddingTop: 80,
    fontWeight: '100',
  },
})

const Document = React.memo(({
  name,
  filename,
  uri,
  uriWithCookieInPath,
  accountId,

  accounts,
}) => {

  const wideMode = useWideMode()

  const { online } = useNetwork()

  const [ downloading, setDownloading ] = useState()
  const setDownloadingToTrue = useCallback(() => setDownloading(true), [])

  if(!filename) return null

  const isPDF = /\.pdf$/i.test(filename)

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
          iconName="cloud-download"
          status="primary"
          onPress={setDownloadingToTrue}
        />
      }
      {downloading &&
        <WebView
          containerStyle={styles.hiddenWebViewContainer}
          source={{
            uri: `${uriWithCookieInPath}?filename=${encodeURIComponent(`${name || i18n("Document", "", "enhanced")}.${filename.split('.').slice(-1)[0]}`)}`,
          }}
          mixedContentMode="always"
          bounces={false}
        />
      }
    </>
  )
})

const mapStateToProps = ({ accounts }) => ({
  accounts,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Document)