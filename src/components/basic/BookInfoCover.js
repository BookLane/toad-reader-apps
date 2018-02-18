import React from "react"
import { FileSystem } from "expo"
import { Image, StyleSheet } from "react-native"
import { View } from "native-base"

import FullScreenSpin from "./FullScreenSpin"

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
        {downloadStatus == 1 && <FullScreenSpin />}
      </View>
    )
  }
}

export default BookInfoCover