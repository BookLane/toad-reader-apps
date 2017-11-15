import React from "react"
import { FileSystem } from "expo"
import { Image } from "react-native"
import { View, Text } from "native-base"

class BookInfo extends React.Component {

  render() {
    const { bookId, bookInfo } = this.props
    const { title, coverFilename, downloadStatus } = bookInfo

    return (
      <View>
        <Image
          source={{ uri: `${FileSystem.documentDirectory}covers/${bookId}/${coverFilename}` }}
          style={{width: 40, height: 40}}
        />
        {/* <Text>{title + downloadStatus}</Text> */}
      </View>
    )
  }
}

export default BookInfo