import React from "react"
import { View } from "native-base"
import { StyleSheet, Platform, TouchableHighlight, TouchableNativeFeedback } from "react-native"

import PagesBookmark from "./PagesBookmark.js"

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
  },
})

class PagesPage extends React.Component {

  
  render() {
    const { children, header, pageWidth, pageHeight, goToPage} = this.props

    const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight
    const TouchableBackground = Platform.OS === 'android' ? TouchableNativeFeedback.Ripple('#999', false) : null

    return (
      <View
        style={{
          marginBottom: 10,
          marginRight: 10,
          width: pageWidth,
          height: pageHeight,
        }}
      >
        <TouchableComponent
          onPress={goToPage}
          background={TouchableBackground}
          delayPressIn={0}
        >
          <View style={styles.page} />
        </TouchableComponent>
      </View>
    )
  }
}

export default PagesPage