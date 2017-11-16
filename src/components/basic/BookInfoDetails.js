import React from "react"
import { View, Text, Icon } from "native-base"
import { StyleSheet } from "react-native"
import i18n from "../../utils/i18n.js"

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  icon: {
    fontSize: 19,
    paddingRight: 4,
  },
  details: {
    paddingTop: 1,
    fontSize: 13,
  },
})

class BookInfoDetails extends React.Component {

  render() {
    const { downloadStatus, epubSizeInMB, totalCharacterCount } = this.props.bookInfo

    if(downloadStatus == 2) {
      return (
        <View style={styles.container}>
          <Icon name='checkmark' style={styles.icon} />
          <Text style={styles.details}>{i18n("On device")}</Text>
        </View>
      )
    }

    if(downloadStatus == 1) {
      return (
        <View style={styles.container}>
          <Text style={styles.details}>{i18n("Downloading...")}</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Icon name='cloud-download' style={styles.icon} />
        <Text style={styles.details}>{i18n("Tap to download")}</Text>
      </View>
    )
  }
}

export default BookInfoDetails