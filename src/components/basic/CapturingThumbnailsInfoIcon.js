import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Icon, Toast } from "native-base"
import i18n from "../../utils/i18n.js"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    padding: 10,
    fontSize: 22,
    lineHeight: 26,
    color: '#bbbbbb',
    marginLeft: 70,
  },
})

class CapturingThumbnailsInfoIcon extends React.PureComponent {

  showInfo = () => {
    Toast.show({
      text: i18n("We will create thumbnail images in the background when you are reading."),
      buttonText: i18n("Okay"),
      duration: 15000,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.showInfo}
        >
          <Icon
            name="information-circle-outline"
            style={styles.info}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default CapturingThumbnailsInfoIcon