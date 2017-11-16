import React from "react"
import { FileSystem } from "expo"
import { View, Spinner } from "native-base"
import { Image, StyleSheet, Dimensions } from "react-native"

import CoverCheck from "./CoverCheck.js"
// import CoverPercentage from "./CoverPercentage.js"
// import CoverSize from "./CoverSize.js"

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, .1)'
  },
  spinnerContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, .8)',
  },
  spacer: {
    flex: 1,
  },
})

class Cover extends React.Component {

  render() {
    const { bookId, bookInfo } = this.props
    const { coverFilename, downloadStatus, epubSizeInMB, totalCharacterCount } = bookInfo

    const windowWidth = Dimensions.get('window').width
    const booksPerRow = parseInt(windowWidth / 100)
    const width = (windowWidth - ((booksPerRow + 1) * 10)) / booksPerRow

    const uri = `${FileSystem.documentDirectory}covers/${bookId}/${coverFilename}`
    
    return (
      <View style={{
        marginBottom: 30,
        marginRight: 10,
        width,
        paddingTop: width/.75,
      }}>
        <Image
          source={{ uri }}
          style={styles.image}
          resizeMode='cover'
        />
        {downloadStatus == 1 &&
          <View style={styles.spinnerContainer}>
            <View style={styles.spacer} />
            <Spinner />
            <View style={styles.spacer} />
          </View>
        }
        {downloadStatus == 2 && <CoverCheck />}
        {/* <CoverPercentage>{totalCharacterCount}</CoverPercentage> */}
        {/* <CoverSize>{epubSizeInMB}<CoverSize /> */}
      </View>
    )
  }
}

export default Cover