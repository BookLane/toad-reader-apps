import React from "react"
import { FileSystem } from "expo"
import { Image, StyleSheet } from "react-native"
import { View } from "native-base"

import Spin from "./Spin"

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
  spinnerContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, .8)',
    display: 'flex',
  },
  spacer: {
    flex: 1,
  },
})

class BookInfoCover extends React.Component {

  render() {
    const { bookId, bookInfo } = this.props
    const { coverFilename, downloadStatus } = bookInfo

    const uri = `${FileSystem.documentDirectory}covers/${bookId}/${coverFilename}`

    return (
      <View style={styles.container}>
        <Image
          source={{ uri }}
          style={styles.image}
          resizeMode='cover'
        />
        {downloadStatus == 1 &&
          <View style={styles.spinnerContainer}>
            <View style={styles.spacer} />
            <Spin />
            <View style={styles.spacer} />
          </View>
        }
      </View>
    )
  }
}

export default BookInfoCover