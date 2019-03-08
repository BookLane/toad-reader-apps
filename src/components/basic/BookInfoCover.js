import React from "react"
import { FileSystem } from "expo"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Image, StyleSheet } from "react-native"
import { View } from "native-base"

import FullScreenSpin from "./FullScreenSpin"

import { setUpTimeout, unmountTimeouts } from "../../utils/toolbox.js"

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

class BookInfoCover extends React.Component {

  componentWillUnmount = unmountTimeouts

  render() {
    const { bookId, bookInfo, downloadProgressByBookId } = this.props
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
}

const mapStateToProps = (state) => ({
  downloadProgressByBookId: state.downloadProgressByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookInfoCover)