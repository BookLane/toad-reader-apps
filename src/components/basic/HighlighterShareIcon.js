import React, { useState, useCallback } from "react"
import { StyleSheet, TouchableOpacity, Platform, Share, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Ionicons } from "@expo/vector-icons"
import { i18n } from "inline-i18n"

import { getFullName, getDataOrigin, getIdsFromAccountId } from '../../utils/toolbox'

import Iframe from './Iframe'
import Dialog from "../major/Dialog"

const styles = StyleSheet.create({
  share: {
    padding: 8,
    fontSize: 21,
    lineHeight: 21,
  },
  shareDialog: {
    maxWidth: 'none',
  },
  iframe: {
    borderWidth: 0,
    width: 800,
    height: 400,
    maxWidth: 'calc(100vw - 40px)',
    maxHeight: 'calc(100vh - 144px)',
  },
})

const HighlighterShareIcon = React.memo(({
  idps,
  accounts,
  books,
  userDataByBookId,
  bookId,
  selectionInfo,
  highlight,
}) => {

  const [ showShare, setShowShare ] = useState(false)

  const getUrlDependencies = [ idps, accounts, books, userDataByBookId, bookId, selectionInfo, highlight ]
  const getUrl = useCallback(
    () => {
      const book = books[bookId] || {}
      const accountId = Object.keys(book.accounts)[0] || ""
      const { idpId } = getIdsFromAccountId(accountId)
      const idp = idps[idpId]
      const { latest_location } = (userDataByBookId[bookId] || {})
      const fullname = getFullName(accounts[accountId])

      if(!idp || !latest_location || !fullname) {
        throw new Error('Unable to share')
      }

      let url = `${getDataOrigin(idp)}/book/${bookId}`
        + `?goto=${encodeURIComponent(latest_location)}`
        + `&highlight=${encodeURIComponent(selectionInfo.text)}`

      if(highlight.note) {
        url += `&note=${encodeURIComponent(highlight.note)}`
          + `&sharer=${encodeURIComponent(fullname)}`
      }

      return url
    },
    getUrlDependencies,
  )

  const goShare = useCallback(
    () => {
      const book = books[bookId] || {}
      const url = getUrl()

      const title = i18n("Quote from {{book}}", {
        book: book.title,
      })

      if(Platform.OS === 'web') {
        setShowShare(true)

      } else {
        Share.share(
          {
            message: `“${selectionInfo.text}”${(Platform.OS === 'android' ? `\n\n${url}` : ``)}`,
            title,
            url,  // ios
          },
          {
            subject: title,  // ios share via email
            excludedActivityTypes: [  // ios
            ],
            dialogTitle: title,  // android
          }
        )
      }

    },
    [ ...getUrlDependencies, books, bookId, selectionInfo ],
  )

  const setShowShareToFalse = useCallback(() => setShowShare(false), [])

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
      <Dialog
        open={!!showShare}
        title={i18n("Share")}
        message={
          <View style={styles.shareMessage}>
            <Iframe
              src={getUrl()}
              style={styles.iframe}
            />
          </View>
        }
        style={styles.shareDialog}
        onClose={setShowShareToFalse}
      />
    </>
  )
})

const mapStateToProps = ({ idps, accounts, books, userDataByBookId }) => ({
  idps,
  accounts,
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(HighlighterShareIcon)