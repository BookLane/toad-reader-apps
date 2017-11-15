import React from "react"
import { FileSystem } from "expo"
import { Image } from "react-native"
import { View } from "native-base"

class BookInfoCover extends React.Component {

  render() {
    const { bookId, coverFilename } = this.props

    return (
      <View>
        <Image
          source={{ uri: `${FileSystem.documentDirectory}covers/${bookId}/${coverFilename}` }}
          style={{width: 40, height: 40}}
        />
      </View>
    )
  }
}

export default BookInfoCover