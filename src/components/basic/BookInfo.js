import React, { useState, useCallback } from "react"
import Constants from 'expo-constants'
import { StyleSheet, View, Platform } from "react-native"
import { withRouter } from "react-router"
import { Button } from "react-native-ui-kitten"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import BookInfoCover from "./BookInfoCover"
import BookInfoTitle from "./BookInfoTitle"
import BookInfoAuthor from "./BookInfoAuthor"
import BookInfoId from "./BookInfoId"
import BookInfoDetails from "./BookInfoDetails"
import i18n from "../../utils/i18n"
import Dialog from "../major/Dialog"

import { getDataOrigin, getReqOptionsWithAdditions } from '../../utils/toolbox.js'

import { deleteBook } from "../../redux/actions"

const {
  LIBRARY_LIST_MARGIN,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: LIBRARY_LIST_MARGIN,
  },
  containerFirstRow: {
    marginTop: LIBRARY_LIST_MARGIN,
  },
  cover: {
    width: 100,
    marginRight: 10,
  },
  info: {
    flexGrow: 1,
    flexShrink: 1,
    display: 'flex',
  },
  spacer: {
    flexGrow: 1,
  },
  buttonContainer: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  emphasis: {
    color: 'black',
    fontWeight: '500',
  },
  subtle: {
    fontSize: 12,
  },
})

const BookInfo = ({
  bookId,
  bookInfo,
  isFirstRow,
  accounts,
  idps,
  deleteBook,
}) => {

  const [ deleteStatus, setDeleteStatus ] = useState('none')

  const { title, author } = bookInfo

  const adminInfo = Object.keys(bookInfo.accounts).filter(accountId => {
    const { isAdmin, cookie } = accounts[accountId] || {}

    if(isAdmin) {
      return {
        idpId: accountId.split(':')[0],
        cookie,
      }
    }
  })[0]

  const confirmDelete = useCallback(
    () => setDeleteStatus('confirming'),
    [],
  )

  const doDelete = useCallback(
    async () => {
      setDeleteStatus('deleting')

      const path = `${getDataOrigin(idps[adminInfo.idpId])}/book/${bookId}`

      const result = await fetch(path, getReqOptionsWithAdditions({
        method: 'DELETE',
        headers: {
          "x-cookie-override": adminInfo.cookie,
        },
      }))

      if(result.status === 200 && ((await result.json()) || {}).success) {
        setDeleteStatus('done')
      } else {
        history.push("/error")
      }

    },
    [ bookId ],
  )

  const closeDelete = useCallback(
    () => setDeleteStatus('none'),
    [],
  )

  const updateLibrary = useCallback(
    () => {
      setDeleteStatus('none')
      requestAnimationFrame(() => deleteBook({ bookId }))
    },
    [ bookId ],
  )

  return (
    <View style={[
      styles.container,
      isFirstRow ? styles.containerFirstRow : {},
    ]}>
      <View style={styles.cover}>
        <BookInfoCover bookId={bookId} bookInfo={bookInfo} />
      </View>
      <View style={styles.info}>
        <BookInfoTitle>{title}</BookInfoTitle>
        <BookInfoAuthor>{author}</BookInfoAuthor>
        {!!adminInfo &&
          <BookInfoId id={bookId} />
        }
        {Platform.OS === 'web'
          ? (
            <View style={styles.buttonContainer}>
              <Button
                onPress={confirmDelete}
                size="tiny"
                status="basic"
                appearance="outline"
              >
                {i18n("Delete")}
              </Button>
            </View>
          )
          : (
            <>
              <View style={styles.spacer} />
              <BookInfoDetails bookInfo={bookInfo} />
            </>
          )
        }
      </View>
      <Dialog
        open={[ 'confirming', 'deleting', 'done' ].includes(deleteStatus)}
        type={[ 'done' ].includes(deleteStatus) ? "info" : "confirm"}
        title={i18n("Delete book from server")}
        message={[ 'done' ].includes(deleteStatus)
          ? [
            i18n("“{{title}}” has been deleted.", { title }),
            { text: i18n("Book id: {{book_id}}", { book_id: bookId }), textStyle: styles.subtle },
          ]
          : [
            i18n("Deleting this book from the server will revoke access to it for all users and make user data connected to this book permanently inaccessible."),
            { text: i18n("Are you sure you want to delete “{{title}}”?", { title }), textStyle: styles.emphasis },
            { text: i18n("Book id: {{book_id}}", { book_id: bookId }), textStyle: styles.subtle },
          ]
        }
        confirmButtonText={i18n("Permanently Delete")}
        confirmButtonStatus="danger"
        onCancel={closeDelete}
        onConfirm={doDelete}
        onClose={updateLibrary}
        submitting={[ 'deleting' ].includes(deleteStatus)}
      />
    </View>
  )
}

const mapStateToProps = ({ accounts, idps }) => ({
  accounts,
  idps,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  deleteBook,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(BookInfo))