import React from "react"
import { View, Text, Icon, Spinner } from "native-base"
import i18n from "../../utils/i18n.js"

class BookInfoDetails extends React.Component {

  render() {
    const { downloadStatus, epubSizeInMB, totalCharacterCount } = this.props.bookInfo

    if(downloadStatus == 2) {
      return (
        <Text>
          <Icon name='checkmark' />
          {i18n("On device")}
        </Text>
      )
    }

    if(downloadStatus == 1) {
      return (
        <View>
          <Spinner />
          <Text>{i18n("Downloading...")}</Text>
        </View>
      )
    }

    return (
      <Text>
        <Icon name='cloud-download' />
        {i18n("Tap to download")}
      </Text>
    )
  }
}

export default BookInfoDetails