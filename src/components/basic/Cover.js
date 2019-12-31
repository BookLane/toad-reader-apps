import React, { useState, useCallback } from "react"
import * as FileSystem from 'expo-file-system'
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Image, StyleSheet, View, Text, Platform } from "react-native"
import { Link } from "../routers/react-router"

import CoverAndSpin from "./CoverAndSpin"
import CoverCheck from "./CoverCheck"
// import CoverPercentage from "./CoverPercentage"
// import CoverSize from "./CoverSize"

import { getDataOrigin } from '../../utils/toolbox'

const {
  LIBRARY_COVERS_HORIZONTAL_MARGIN,
  LIBRARY_COVERS_VERTICAL_MARGIN,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  cover: {
    marginRight: LIBRARY_COVERS_HORIZONTAL_MARGIN,
    marginBottom: LIBRARY_COVERS_VERTICAL_MARGIN,
  },
  titleContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, .1)',
    overflow: 'hidden',
    padding: 10,
  },
  title: {
    color: 'rgba(0, 0, 0, .7)',
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
})

const Cover = ({
  bookId,
  bookInfo,
  bookWidth,
  bookHeight,
  downloadProgressByBookId,
  idps,
}) => {

  const [ imageError, setImageError ] = useState(false)
  const imageOnError = useCallback(() => setImageError(true), [])
  
  const { title, coverFilename, downloadStatus, epubSizeInMB, totalCharacterCount, accounts, coverHref } = bookInfo
  const idpId = Object.keys(accounts)[0].split(':')[0]
  const downloadProgress = downloadProgressByBookId[bookId]

  const uri = Platform.OS === 'web'
    ? (coverHref && `${getDataOrigin(idps[idpId])}/${coverHref}`)
    : (coverFilename && `${FileSystem.documentDirectory}covers/${bookId}/${coverFilename}`)

  const cover = (
    <View
      style={[
        styles.cover,
        {
          width: bookWidth,
          paddingTop: bookHeight,
        },
      ]}
    >
      {!!(!uri || imageError) &&
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      }
      {!!uri &&
        <Image
          source={{ uri }}
          style={styles.image}
          resizeMode='cover'
          onError={imageOnError}
        />
      }
      {downloadStatus == 1 &&
        <CoverAndSpin
          percentage={downloadProgress}
        />
      }
      {downloadStatus == 2 && <CoverCheck />}
      {/* <CoverPercentage>{totalCharacterCount}</CoverPercentage> */}
      {/* <CoverSize>{epubSizeInMB}<CoverSize /> */}
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

export default connect(mapStateToProps, matchDispatchToProps)(Cover)