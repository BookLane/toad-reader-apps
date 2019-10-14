import React from "react"
import * as FileSystem from 'expo-file-system'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Image, StyleSheet, View } from "react-native"

import FullScreenSpin from "./FullScreenSpin"

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 130,
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, .1)'
  },
})

const BookInfoCover = ({
  bookId,
  bookInfo,
  downloadProgressByBookId,
}) => {

  const { coverFilename, downloadStatus } = bookInfo
  const downloadProgress = downloadProgressByBookId[bookId]

  const uri = `${FileSystem.documentDirectory}covers/${bookId}/${coverFilename}`

  return (
    <View style={styles.container}>
      <Image
        source={{ uri }}
        style={styles.image}
        resizeMode='cover'
      />
      {downloadStatus == 1 &&
        <FullScreenSpin
          percentage={downloadProgress}
        />
      }
    </View>
  )
}

const mapStateToProps = ({ downloadProgressByBookId }) => ({
  downloadProgressByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookInfoCover)