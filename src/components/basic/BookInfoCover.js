import React from "react"
import { FileSystem } from "expo"
import { Image } from "react-native"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 130,
  },
})

class BookInfoCover extends React.Component {

  render() {
    const { bookId, coverFilename } = this.props

    const uri = `${FileSystem.documentDirectory}covers/${bookId}/${coverFilename}`

    return (
      <Image
        source={{ uri }}
        style={styles.image}
        resizeMode='cover'
      />
    )
  }
}

export default BookInfoCover