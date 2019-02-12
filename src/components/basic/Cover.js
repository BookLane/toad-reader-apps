import React from "react"
import { FileSystem } from "expo"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View, Text } from "native-base"
import { Image, StyleSheet } from "react-native"

import FullScreenSpin from "./FullScreenSpin"
import CoverCheck from "./CoverCheck"
// import CoverPercentage from "./CoverPercentage"
// import CoverSize from "./CoverSize"

import { setUpTimeout, unmountTimeouts } from "../../utils/toolbox.js"

const styles = StyleSheet.create({
  cover: {
    marginBottom: 30,
    marginRight: 10,
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
    imageQueryStringIndex: 1,
  }

  componentWillUnmount = unmountTimeouts

  imageOnError = () => {
    const { imageQueryStringIndex } = this.state

    this.setState({ imageError: true })
    setUpTimeout(() => this.setState({ imageQueryStringIndex: imageQueryStringIndex+1 }), 200, this)
  }
  
  render() {
    const { bookId, bookInfo, bookWidth, downloadProgressByBookId } = this.props
    const { title, coverFilename, downloadStatus, epubSizeInMB, totalCharacterCount } = bookInfo
    const downloadProgress = downloadProgressByBookId[bookId]
    const { imageError, imageQueryStringIndex } = this.state

    const uri = `${FileSystem.documentDirectory}covers/${bookId}/${coverFilename}?${imageQueryStringIndex}`

    return (
      <View
        style={[
          styles.cover,
          {
            width: bookWidth,
            paddingTop: bookWidth/.75,
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