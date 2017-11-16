import React from "react"
import { FileSystem } from "expo"
import { View, Text, Spinner } from "native-base"
import { Image, StyleSheet, Dimensions } from "react-native"

import CoverCheck from "./CoverCheck.js"
// import CoverPercentage from "./CoverPercentage.js"
// import CoverSize from "./CoverSize.js"

const styles = StyleSheet.create({
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

  constructor() {
    super()
    this.state = {
      imageError: false,
    }
  }

  render() {
    const { bookId, bookInfo } = this.props
    const { title, coverFilename, downloadStatus, epubSizeInMB, totalCharacterCount } = bookInfo
    const { imageError } = this.state

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
        {imageError &&
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        }
        <Image
          source={{ uri }}
          style={styles.image}
          resizeMode='cover'
          onError={() => this.setState({ imageError: true })}
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