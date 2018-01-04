import React from "react"
import { StyleSheet, Platform, TouchableHighlight, TouchableNativeFeedback, Image, Dimensions } from "react-native"
import { FileSystem } from "expo"
import { View } from "native-base"

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
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
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
    const { bookId, spineIdRef, pageIndexInSpine, pageWidth, pageHeight } = this.props

    const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight
    const TouchableBackground = Platform.OS === 'android' ? TouchableNativeFeedback.Ripple('#999', false) : null

    const { width, height } = Dimensions.get('window')
    const uri = `${FileSystem.documentDirectory}snapshots/${bookId}/${spineIdRef}_${pageIndexInSpine}_${width}x${height}`

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
            <Image
              source={{ uri }}
              style={styles.image}
              resizeMode='cover'
            />
            {/* <PagesBookmark /> */}
          </View>
        </TouchableComponent>
      </View>
    )
  }
}

export default PagesPage