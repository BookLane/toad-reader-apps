import React from "react"
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
})

const BookInfo = ({
  bookId,
  bookInfo,
  isFirstRow,
  accounts,
}) => {

  const { title, author } = bookInfo

  const isAdmin = Object.keys(bookInfo.accounts).some(accountId => (accounts[accountId] || {}).isAdmin)

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
                onPress={null}
                size='tiny'
              >
                {i18n("Delete from server")}
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
    </View>
  )
}

const mapStateToProps = ({ accounts }) => ({
  accounts,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookInfo)