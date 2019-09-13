import React from "react"
import * as FileSystem from 'expo-file-system'
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View, Text } from "native-base"
import { Image, StyleSheet } from "react-native"

import FullScreenSpin from "./FullScreenSpin"
import CoverCheck from "./CoverCheck"
// import CoverPercentage from "./CoverPercentage"
// import CoverSize from "./CoverSize"

import { setUpTimeout, unmountTimeouts } from "../../utils/toolbox.js"

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

class Cover extends React.Component {

  state = {
    imageError: false,
  }

  componentWillUnmount = unmountTimeouts

  imageOnError = () => this.setState({ imageError: true })
  
  render() {
    const { bookId, bookInfo, bookWidth, bookHeight, downloadProgressByBookId } = this.props
    const { title, coverFilename, downloadStatus, epubSizeInMB, totalCharacterCount } = bookInfo
    const downloadProgress = downloadProgressByBookId[bookId]
    const { imageError } = this.state

    const uri = `${FileSystem.documentDirectory}covers/${bookId}/${coverFilename}`

    return (
      <View
        style={[
          styles.cover,
          {
            width: bookWidth,
            paddingTop: bookHeight,
          },
        ]}
      >
        {!!(!coverFilename || imageError) &&
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        }
        {!!coverFilename &&
          <Image
            source={{ uri }}
            style={styles.image}
            resizeMode='cover'
            onError={this.imageOnError}
          />
        }
        {downloadStatus == 1 &&
          <FullScreenSpin
            percentage={downloadProgress}
          />
        }
        {downloadStatus == 2 && <CoverCheck />}
        {/* <CoverPercentage>{totalCharacterCount}</CoverPercentage> */}
        {/* <CoverSize>{epubSizeInMB}<CoverSize /> */}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  downloadProgressByBookId: state.downloadProgressByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Cover)