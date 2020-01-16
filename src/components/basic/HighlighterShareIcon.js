import React, { useState, useCallback, useEffect } from "react"
import { StyleSheet, TouchableOpacity, Platform, Share, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Ionicons } from "@expo/vector-icons"
import { i18n } from "inline-i18n"

import { getDataOrigin, isStaging } from '../../utils/toolbox'

import WebView from '../major/WebView'
import Dialog from "../major/Dialog"

import useClassroomInfo from "../../hooks/useClassroomInfo"

import { shareHighlight } from "../../redux/actions"

const MAX_QUOTE_WORD_LENGTH = 300
const MAX_QUOTE_CHARACTER_LENGTH = 1500

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

  shareHighlight,
}) => {

  const [ showShare, setShowShare ] = useState(false)
  const { idpId } = useClassroomInfo({ books, bookId })

  const { authMethod, devAuthMethod } = idps[idpId]

  const shareUrl = `${(__DEV__ || isStaging()) ? getDataOrigin(idps[idpId]) : `https://q.toadreader.com`}/q/${highlight.share_code || ''}`

  let share_quote = selectionInfo.text

  if(share_quote.split(' ').length > MAX_QUOTE_WORD_LENGTH) {
    share_quote = `${share_quote.split(' ').slice(0, MAX_QUOTE_WORD_LENGTH).join(' ')}...`
  }

  if(share_quote.length > MAX_QUOTE_CHARACTER_LENGTH) {
    share_quote = `${share_quote.substr(0, MAX_QUOTE_CHARACTER_LENGTH - 3)}...`
  }

  const goShare = useCallback(
    () => {
      if(!highlight.share_code) {
        shareHighlight({
          bookId,
          spineIdRef: selectionInfo.spineIdRef,
          cfi: selectionInfo.cfi,
          share_quote,
        })
      }

      // With a timeout to allow for syncStatus to update at the same time as showShare
      setTimeout(() => setShowShare(true))
    },
    [ bookId, selectionInfo ],
  )

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

  if(((__DEV__ && devAuthMethod) || authMethod) === 'NONE_OR_EMAIL') return null

  return (
    <>
      <TouchableOpacity
        onPress={goShare}
      >
        <Ionicons
          name="md-share"
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
  shareHighlight,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(HighlighterShareIcon)