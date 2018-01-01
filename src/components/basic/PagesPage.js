import React from "react"
import { View } from "native-base"
import { StyleSheet, Platform, TouchableHighlight, TouchableNativeFeedback } from "react-native"

import PagesBookmark from "./PagesBookmark"

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  page: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
  },
})

class PagesPage extends React.Component {

  shouldComponentUpdate() {
    return false
  }

  goToPage = () => {
    const { goToPage, spineIdRef, pageIndexInSpine } = this.props
    
    goToPage({ spineIdRef, pageIndexInSpine })
  }

  render() {
    const { pageWidth, pageHeight } = this.props

    const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight
    const TouchableBackground = Platform.OS === 'android' ? TouchableNativeFeedback.Ripple('#999', false) : null

    return (
      <View
        style={[
          styles.container,
          {
            width: pageWidth,
            height: pageHeight,
          },
        ]}
      >
        <TouchableComponent
          onPress={this.goToPage}
          background={TouchableBackground}
          delayPressIn={0}
        >
          <View style={styles.page}>
            <PagesBookmark />
          </View>
        </TouchableComponent>
      </View>
    )
  }
}

export default PagesPage