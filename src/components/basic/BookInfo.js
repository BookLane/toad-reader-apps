import React, { useState, useCallback } from "react"
import Constants from 'expo-constants'
import { StyleSheet, View, Platform } from "react-native"
import { withRouter } from "react-router"
import { Button } from "@ui-kitten/components"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import BookInfoCover from "./BookInfoCover"
import BookInfoTitle from "./BookInfoTitle"
import BookInfoAuthor from "./BookInfoAuthor"
import BookInfoIsbn from "./BookInfoIsbn"
import BookInfoId from "./BookInfoId"
import BookInfoDetails from "./BookInfoDetails"
import { i18n } from "inline-i18n"
import Dialog from "../major/Dialog"
import CheckBox from "./CheckBox"
import CoverAndSpin from "./CoverAndSpin"

import { getDataOrigin, getReqOptionsWithAdditions, getIdsFromAccountId, safeFetch } from '../../utils/toolbox'

import { deleteBook, setSubscriptions } from "../../redux/actions"

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
  checkBoxContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  buttonContainer: {
    position: 'relative',
    flexDirection: 'row',
    marginBottom: 10,
  },
  emphasis: {
    color: 'black',
    fontWeight: '500',
  },
  subtle: {
    fontSize: 12,
  },
  spin: {
    backgroundColor: 'transparent',
  },
})

const BookInfo = ({
  bookId,
  bookInfo,
  isFirstRow,

  history,

  accounts,
  idps,

  deleteBook,
  setSubscriptions,
}) => {

  const { title, author, isbn, subscriptions } = bookInfo

  const [ deleteStatus, setDeleteStatus ] = useState('none')
  const [ updatingSubscriptions, setUpdatingSubscriptions ] = useState(false)

  let adminInfo = false
  Object.keys(bookInfo.accounts).some(accountId => {
    const { isAdmin, cookie } = accounts[accountId] || {}

    if(isAdmin) {
      adminInfo = {
        idpId: getIdsFromAccountId(accountId).idpId,
        cookie,
      }
      return true
    }
  })

  const confirmDelete = useCallback(
    () => setDeleteStatus('confirming'),
    [],
  )

  const doDelete = useCallback(
    async () => {
      setDeleteStatus('deleting')

      const path = `${getDataOrigin(idps[adminInfo.idpId])}/book/${bookId}`

      const result = await safeFetch(path, getReqOptionsWithAdditions({
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

  const setDefaultSubscription = useCallback(
    async checked => {

      setUpdatingSubscriptions(true)

      const path = `${getDataOrigin(idps[adminInfo.idpId])}/setsubscriptions/${bookId}`

      const newSubscriptions = checked
        ? [ ...(subscriptions || []), { id: adminInfo.idpId * -1, version: "BASE" }]
        : (subscriptions || []).filter(({ id }) => id !== adminInfo.idpId * -1)

      try {

        const result = await safeFetch(path, getReqOptionsWithAdditions({
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
            "x-cookie-override": adminInfo.cookie,
          },
          body: JSON.stringify({ subscriptions: newSubscriptions }),
        }))

        if(result.status === 200 && ((await result.json()) || {}).success) {
          setSubscriptions({
            bookId,
            subscriptions: newSubscriptions,
          })

        } else {
          history.push("/error")
        }

      } catch(err) {
        history.push("/error", {
          message: err.message,
        })
      }

      setUpdatingSubscriptions(false)

    },
    [ bookId, subscriptions ],
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
        <BookInfoTitle to={`/book/${bookId}`}>{title}</BookInfoTitle>
        <BookInfoAuthor>{author}</BookInfoAuthor>
        <BookInfoIsbn isbn={isbn} />
        {!!adminInfo &&
          <BookInfoId id={bookId} />
        }
        {Platform.OS === 'web'
          ? (
            (!!adminInfo &&
              <>
                <View style={styles.checkBoxContainer}>
                  <CheckBox
                    text={i18n("Accessible to all users")}
                    checked={!!(adminInfo && (subscriptions || []).some(({ id }) => id === adminInfo.idpId * -1))}
                    onChange={setDefaultSubscription}
                  />
                </View>
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
              </>
            )
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
      {updatingSubscriptions &&
        <CoverAndSpin
          style={styles.spin}
        />
      }
    </View>
  )
}

const mapStateToProps = ({ accounts, idps }) => ({
  accounts,
  idps,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  deleteBook,
  setSubscriptions,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(BookInfo))