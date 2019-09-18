import React from "react"
import { View, Text, Icon, Toast } from "native-base"
import { StyleSheet, TouchableOpacity, Linking } from "react-native"
import { withRouter } from "react-router"
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
    const { moreInfoText, externalHref, history } = this.props

    if(moreInfoText) {
      Toast.show({
        text: moreInfoText,
        buttonText: i18n("Okay"),
        duration: 15000,
      })

    } else if(externalHref) {
      Linking.openURL(externalHref).catch(err => {
        console.log('ERROR: Request to open URL failed.', err)
        history.push("/error", {
          message: i18n("Your device is not allowing us to open this link."),
        })
      })
    }

  }

  render() {
    const { text, moreInfoText, externalHref } = this.props

    return (
      <View style={styles.container}>
        {(moreInfoText || externalHref)
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

export default withRouter(BookPageMessage)
