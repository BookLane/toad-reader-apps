import React, { useState, useCallback, useEffect } from "react"
import { StyleSheet, TouchableOpacity, Platform, Share, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Ionicons } from "@expo/vector-icons"
import { i18n } from "inline-i18n"

import { getDataOrigin, isStaging } from '../../utils/toolbox'
import useClassroomInfo from "../../hooks/useClassroomInfo"
import useNonBlurringOnPress from "../../hooks/useNonBlurringOnPress"
import { getAccountIdIsNoAuth } from "../../hooks/useHasNoAuth"

import WebView from '../major/WebView'
import Dialog from "../major/Dialog"

const styles = StyleSheet.create({
  share: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginTop: 2,
    fontSize: 21,
    lineHeight: 21,
    height: 31,
    maxHeight: 31,
  },
  shareDialog: {
    maxWidth: 'none',
  },
  webview: {
    width: 800,
    height: 400,
    maxWidth: 'calc(100vw - 40px)',
    maxHeight: 'calc(100vh - 144px)',
  },
})

const HighlighterShareIcon = React.memo(({
  bookId,
  selectionInfo,
  highlight,
  
  idps,
  books,
  syncStatus,
}) => {

  const [ showShare, setShowShare ] = useState(false)
  const { idpId, accountId } = useClassroomInfo({ books, bookId })
  const isNoAuth = getAccountIdIsNoAuth(accountId)

  const shareUrl = `${(__DEV__ || isStaging()) ? getDataOrigin(idps[idpId]) : `https://q.toadreader.com`}/q/${highlight.share_code || ''}`

  const goShareOnPressProps = useNonBlurringOnPress(() => setShowShare(true), [])

  useEffect(
    () => {
      if(Platform.OS !== 'web' && highlight.share_code && showShare && syncStatus === 'synced') {

        const book = books[bookId] || {}

        const title = i18n("Quote from {{book}}", {
          book: book.title,
        })

        Share.share(
          {
            message: `“${selectionInfo.text}”${(Platform.OS === 'android' ? `\n\n${shareUrl}` : ``)}`,
            title,
            url: shareUrl,  // ios
          },
          {
            subject: title,  // ios share via email
            excludedActivityTypes: [  // ios
            ],
            dialogTitle: title,  // android
          }
        )

        setShowShare(false)

      }
    },
    [ showShare, highlight.share_code, syncStatus ],
  )

  const setShowShareToFalse = useCallback(() => setShowShare(false), [])

  if(isNoAuth) return null

  return (
    <>
      <TouchableOpacity
        {...goShareOnPressProps}
      >
        <Ionicons
          name="share"
          style={styles.share}
        />
      </TouchableOpacity>
      {Platform.OS === 'web' &&
        <Dialog
          open={!!(showShare && highlight.share_code)}
          title={i18n("Share")}
          message={
            <View style={styles.shareMessage}>
              <WebView
                source={{
                  uri: (highlight.share_code && syncStatus === 'synced') ? `${shareUrl}?iniframe=1` : null,
                }}
                style={styles.webview}
              />
            </View>
          }
          style={styles.shareDialog}
          onClose={setShowShareToFalse}
        />
      }
    </>
  )
})

const mapStateToProps = ({ idps, accounts, books, syncStatus }) => ({
  idps,
  accounts,
  books,
  syncStatus,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(HighlighterShareIcon)