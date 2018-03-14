import React from "react"
import { View, Text, Icon, Toast } from "native-base"
import { StyleSheet, TouchableOpacity } from "react-native"
import i18n from "../../utils/i18n.js"

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  text: {
    fontSize: 13,
    textAlign: "center",
    color: "#AAAAAA",
  },
})

class BookPageMessage extends React.Component {

  state = {
    showingMoreInfo: false,
  }

  showMoreInfo = () =>  {
    const { text, moreInfoText } = this.props

    Toast.show({
      text: moreInfoText,
      buttonText: i18n("Okay"),
      duration: 15000,
    })

  }

  render() {
    const { text, moreInfoText } = this.props

    return (
      <View style={styles.container}>
        {moreInfoText
          ?
            <TouchableOpacity
              onPress={this.showMoreInfo}
            >
              <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
          :
            <Text style={styles.text}>{text}</Text>
        }
      </View>
    )
  }
}

export default BookPageMessage
