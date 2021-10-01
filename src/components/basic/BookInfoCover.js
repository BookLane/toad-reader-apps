import React from "react"
import * as FileSystem from 'expo-file-system'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Image, StyleSheet, View, Platform } from "react-native"
import { Link } from "../../hooks/useRouterState"

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

  const { coverFilename, downloadStatus, accounts } = bookInfo
  const idpId = Object.keys(accounts)[0].split(':')[0]
  const downloadProgress = downloadProgressByBookId[bookId]

  const dataOriginForDev = __DEV__ ? getDataOrigin(idps[idpId]) : ``
  const uri = Platform.OS === 'web'
    ? `${dataOriginForDev}/epub_content/covers/book_${bookId}.png`
    : (coverFilename && `${FileSystem.documentDirectory}covers/${bookId}/${coverFilename}`)

  const cover = (
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

  if(Platform.OS === 'web') {
    return (
      <Link to={`/book/${bookId}`}>
        {cover}
      </Link>
    )
  }

  return cover
}

const mapStateToProps = ({ downloadProgressByBookId, idps }) => ({
  downloadProgressByBookId,
  idps,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookInfoCover)