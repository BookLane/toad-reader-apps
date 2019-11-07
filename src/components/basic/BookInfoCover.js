import React from "react"
import * as FileSystem from 'expo-file-system'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Image, StyleSheet, View, Platform } from "react-native"

import CoverAndSpin from "./CoverAndSpin"

import { getDataOrigin } from '../../utils/toolbox'

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
  idps,
}) => {

  const { coverFilename, downloadStatus, accounts, coverHref } = bookInfo
  const idpId = Object.keys(accounts)[0].split(':')[0]
  const downloadProgress = downloadProgressByBookId[bookId]

  const uri = Platform.OS === 'web'
    ? (coverHref && `${getDataOrigin(idps[idpId])}/${coverHref}`)
    : (coverFilename && `${FileSystem.documentDirectory}covers/${bookId}/${coverFilename}`)

  return (
    <View style={styles.container}>
      <Image
        source={{ uri }}
        style={styles.image}
        resizeMode='cover'
      />
      {downloadStatus == 1 &&
        <CoverAndSpin
          percentage={downloadProgress}
        />
      }
    </View>
  )
}

const mapStateToProps = ({ downloadProgressByBookId, idps }) => ({
  downloadProgressByBookId,
  idps,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookInfoCover)