import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, View, Platform } from "react-native"
import { Image } from 'expo-image'
import { Link } from "../../hooks/useRouterState"

import CoverAndSpin from "./CoverAndSpin"

import { getDataOrigin, getIDPOrigin } from '../../utils/toolbox'

const styles = StyleSheet.create({
  container: {
  },
  image: {
    width: 100,
    height: 130,
    backgroundColor: 'rgba(0, 0, 0, .1)'
  },
})

const BookInfoCover = ({
  bookId,
  bookInfo,
  downloadProgressByBookId,
  idps,
}) => {

  const { downloadStatus, accounts } = bookInfo
  const idpId = Object.keys(accounts)[0].split(':')[0]
  const downloadProgress = downloadProgressByBookId[bookId]
  const downloadOrigin = __DEV__ ? getDataOrigin(idps[idpId]) : getIDPOrigin(idps[idpId])

  const cover = (
    <View style={styles.container}>

      <Image
        source={`${downloadOrigin}/epub_content/covers/book_${bookId}.png`}
        style={styles.image}
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