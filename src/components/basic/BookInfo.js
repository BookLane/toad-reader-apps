import React, { useState, useCallback } from "react"
import Constants from 'expo-constants'
import { StyleSheet, View, Platform } from "react-native"
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
})

const BookInfo = ({
  bookId,
  bookInfo,
  isFirstRow,
  accounts,
}) => {

  const [ deleteStatus, setDeleteStatus ] = useState('none')

  const { title, author } = bookInfo

  const isAdmin = Object.keys(bookInfo.accounts).some(accountId => (accounts[accountId] || {}).isAdmin)

  const confirmDelete = useCallback(
    () => setDeleteStatus('confirming')
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
        {isAdmin &&
          <BookInfoId id={bookId} />
        }
        {Platform.OS === 'web'
          ? (
            <View style={styles.buttonContainer}>
              <Button
                onPress={confirmDelete}
                size='tiny'
                status='basic'
                appearance='outline'
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
        open={[ 'confirming', 'deleting' ].includes(deleteStatus)}
        type="confirm"
        message={[
          i18n("Deleting this book from the server will revoke access to it for all users and make their user data connected to this book permanently inaccessible."),
          { text: i18n("Are you sure you want to do so?"), textStyle: styles.emphasis },
        ]}
      />
    </View>
  )
}

const mapStateToProps = ({ accounts }) => ({
  accounts,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookInfo)