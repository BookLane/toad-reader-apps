import React, { useState, useCallback } from "react"
import Constants from 'expo-constants'
import { StyleSheet, View, Platform } from "react-native"
import { Button } from "@ui-kitten/components"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import BookInfoCover from "./BookInfoCover"
import BookInfoTitle from "./BookInfoTitle"
import BookInfoAuthor from "./BookInfoAuthor"
import BookInfoTrial from "./BookInfoTrial"
import BookInfoMetadata from "./BookInfoMetadata"
import BookInfoIsbn from "./BookInfoIsbn"
import BookInfoId from "./BookInfoId"
import BookInfoSize from "./BookInfoSize"
import BookInfoDetails from "./BookInfoDetails"
import { i18n } from "inline-i18n"
import Dialog from "../major/Dialog"
import CheckBox from "./CheckBox"
import CoverAndSpin from "./CoverAndSpin"
import BookMetadataDialog from "../major/BookMetadataDialog"
import useToggle from "react-use/lib/useToggle"

import { getDataOrigin, getReqOptionsWithAdditions, getIdsFromAccountId, safeFetch } from '../../utils/toolbox'
import useRouterState from "../../hooks/useRouterState"

import { deleteBook, setSubscriptions } from "../../redux/actions"

const {
  LIBRARY_LIST_MARGIN,
  HIDE_ISBN_FOR_NON_ADMINS,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: LIBRARY_LIST_MARGIN,
    maxWidth: 700,
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
  buttonSpacer: {
    width: 7,
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
  handleNewLibrary,

  accounts,
  idps,

  deleteBook,
  setSubscriptions,
}) => {

  const { title, author, flags, metadataValues, isbn, epubSizeInMB } = bookInfo

  const { historyPush } = useRouterState()

  const [ deleteStatus, setDeleteStatus ] = useState('none')
  const [ updatingSubscriptions, setUpdatingSubscriptions ] = useState(false)
  const [ editingMetadata, toggleEditingMetadata ] = useToggle(false)

  let adminInfo = false
  Object.keys(bookInfo.accounts).some(accountId => {
    const { isAdmin, cookie } = accounts[accountId] || {}

    if(isAdmin) {
      const { subscriptions } = bookInfo.accounts[accountId]
    
      adminInfo = {
        idpId: getIdsFromAccountId(accountId).idpId,
        accountId,
        cookie,
        subscriptions,
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
        historyPush("/error")
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
      requestAnimationFrame(() => {
        deleteBook({
          bookId,
          accountId: adminInfo.accountId,
        })
      })
    },
    [ bookId ],
  )

  const setDefaultSubscription = useCallback(
    async checked => {

      setUpdatingSubscriptions(true)

      const path = `${getDataOrigin(idps[adminInfo.idpId])}/setsubscriptions/${bookId}`

      const newSubscriptions = checked
        ? [ ...(adminInfo.subscriptions || []), { id: adminInfo.idpId * -1, version: "BASE" }]
        : (adminInfo.subscriptions || []).filter(({ id }) => id !== adminInfo.idpId * -1)

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
            accountId: adminInfo.accountId,
            subscriptions: newSubscriptions,
          })

        } else {
          historyPush("/error")
        }

      } catch(err) {
        historyPush("/error", {
          message: err.message,
        })
      }

      setUpdatingSubscriptions(false)

    },
    [ bookId, JSON.stringify(adminInfo) ],
  )

  const showIsbn = !!adminInfo || !HIDE_ISBN_FOR_NON_ADMINS

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
        {(flags || []).includes('trial') && <BookInfoTrial/>}
        <BookInfoMetadata
          metadataValues={metadataValues}
          bookId={bookId}
        />
        <BookInfoSize epubSizeInMB={epubSizeInMB} />
        {showIsbn && <BookInfoIsbn isbn={isbn} />}
        {!!adminInfo &&
          <BookInfoId id={bookId} />
        }
        {Platform.OS === 'web'
          ? (
            (!!adminInfo &&
              <>
                <View style={styles.checkBoxContainer}>
                  <CheckBox
                    checked={!!(adminInfo && (adminInfo.subscriptions || []).some(({ id }) => id === adminInfo.idpId * -1))}
                    onChange={setDefaultSubscription}
                  >
                    {i18n("Accessible to all users")}
                  </CheckBox>
                </View>
                <View style={styles.buttonContainer}>
                  <Button
                    onPress={toggleEditingMetadata}
                    size="tiny"
                    status="primary"
                    appearance="filled"
                  >
                    {i18n("Edit metadata")}
                  </Button>
                  <View style={styles.buttonSpacer} />
                  <Button
                    onPress={confirmDelete}
                    size="tiny"
                    status="primary"
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

      <BookMetadataDialog
        open={editingMetadata}
        metadataValues={metadataValues}
        bookId={bookId}
        bookTitle={title}
        onClose={toggleEditingMetadata}
        handleNewLibrary={handleNewLibrary}
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

export default connect(mapStateToProps, matchDispatchToProps)(BookInfo)