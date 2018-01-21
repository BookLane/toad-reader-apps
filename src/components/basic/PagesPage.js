import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, Platform, TouchableHighlight, TouchableNativeFeedback, Image, Dimensions, View } from "react-native"
import { FileSystem } from "expo"

import PagesBookmark from "./PagesBookmark"

import { setLatestLocation } from "../../redux/actions.js"

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
    const { setLatestLocation, bookId, spineIdRef, cfi, zoomToPage } = this.props

    setLatestLocation({
      bookId,
      latestLocation: {
        spineIdRef,
        cfi,
      },
    })

    this.view.measureInWindow((x, y) => { zoomToPage({ x, y }) })
  }

  setView = ref => this.view = ref

  render() {
    const { bookId, spineIdRef, pageIndexInSpine, pageWidth, pageHeight } = this.props

    const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight
    const TouchableBackground = Platform.OS === 'android' ? TouchableNativeFeedback.Ripple('#999', false) : null

    const { width, height } = Dimensions.get('window')
    const uri = `${FileSystem.documentDirectory}snapshots/${bookId}/${spineIdRef}_${pageIndexInSpine}_${width}x${height}.jpg`

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
          <View
            style={styles.page}
            ref={this.setView}
          >
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

const mapStateToProps = (state) => ({
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setLatestLocation,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(PagesPage)