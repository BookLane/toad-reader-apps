import React, { useState, useCallback } from "react"
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, View, Text, Platform } from "react-native"
import { Image } from 'expo-image'
import { i18n } from "inline-i18n"

import { getDataOrigin, getIDPOrigin } from '../../utils/toolbox'
import useDownloadProgress from "../../hooks/useDownloadProgress"
import useCoverHref from "../../hooks/useCoverHref"

import { Link } from "../../hooks/useRouterState"
import CoverAndSpin from "./CoverAndSpin"
import CoverCheck from "./CoverCheck"
// import CoverPercentage from "./CoverPercentage"
// import CoverSize from "./CoverSize"


const {
  LIBRARY_COVERS_HORIZONTAL_MARGIN = 20,
  LIBRARY_COVERS_VERTICAL_MARGIN = 20,
} = Constants.expoConfig.extra

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
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
  trialContainer: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  trial: {
    backgroundColor: 'black',
    position: 'absolute',
    top: -5,
    right: -20,
    width: 60,
    height: 30,
    transform: [
      {
        rotate: '45deg'
      },
    ],
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: 15,
    paddingTop: 12,
    fontSize: 9,
    color: 'white',
    fontWeight: '300',
    backgroundColor: '#B86E00',
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

  const { title, flags, downloadStatus, epubSizeInMB, totalCharacterCount, accounts, audiobookInfo } = bookInfo
  const coverHref = useCoverHref({ bookInfo, bookId })
  const idpId = Object.keys(accounts)[0].split(':')[0]
  const downloadProgress = useDownloadProgress({ downloadProgressByBookId, bookInfo, bookId })

  const downloadOrigin = __DEV__ ? getDataOrigin(idps[idpId]) : getIDPOrigin(idps[idpId])

  const cover = (
    <View style={styles.cover}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <Image
        source={`${downloadOrigin}/${coverHref}`}
        style={[
          styles.image,
          {
            width: bookWidth,
            height: bookHeight,
          },  
        ]}
      />

      {downloadStatus == 1 &&
        <CoverAndSpin
          percentage={downloadProgress}
        />
      }

      {downloadStatus == 2 && <CoverCheck />}
      {/* <CoverPercentage>{totalCharacterCount}</CoverPercentage> */}
      {/* <CoverSize>{epubSizeInMB}<CoverSize /> */}

      {(flags || []).includes("trial") && (
        <View style={styles.trialContainer}>
          <Text style={styles.trial}>
            {i18n("Trial")}
          </Text>
        </View>
      )}

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
