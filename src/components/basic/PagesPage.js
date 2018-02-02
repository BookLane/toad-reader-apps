import React from "react"
import { StyleSheet, Platform, TouchableHighlight, TouchableNativeFeedback, Image, Dimensions, View } from "react-native"
import { FileSystem } from "expo"

import PagesBookmark from "./PagesBookmark"

import { getSnapshotURI } from '../../utils/toolbox.js'

const {
  CURRENT_PAGE_BORDER_COLOR,
  CURRENT_PAGE_BORDER_WIDTH,
  PAGES_HORIZONTAL_MARGIN,
} = Expo.Constants.manifest.extra

const styles = StyleSheet.create({
  container: {
    marginRight: PAGES_HORIZONTAL_MARGIN,
  },
  currentPage: {
    borderColor: CURRENT_PAGE_BORDER_COLOR,
    borderWidth: CURRENT_PAGE_BORDER_WIDTH,
  },
  page: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
  },
  coverAll: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
})

class PagesPage extends React.PureComponent {

  goToPage = () => {
    const { bookId, spineIdRef, cfi, pageIndexInSpine, delayPageChangeScroll, zoomToPage } = this.props

    if(this.preventDoubleTap) return

    delayPageChangeScroll({
      bookId,
      spineIdRef,
      pageIndexInSpine,
    })

    this.preventDoubleTap = true

    this.view.measureInWindow((x, y) => zoomToPage({
      zoomToInfo: {
        spineIdRef,
        cfi,
        pageIndexInSpine,
      },
      snapshotCoords: { x, y },
    }))

    setTimeout(() => delete this.preventDoubleTap, 1000)
  }

  setView = ref => this.view = ref

  render() {
    const { pageWidth, pageHeight, isCurrentPage } = this.props

    const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight
    const TouchableBackground = Platform.OS === 'android' ? TouchableNativeFeedback.Ripple('#999', false) : null

    const uri = getSnapshotURI(this.props)

    return (
      <View
        style={[
          styles.container,
          {
            width: pageWidth,
            height: pageHeight,
          },
        ]}
        ref={Platform.OS !== 'android' && this.setView}
      >
        <TouchableComponent
          onPress={this.goToPage}
          useForeground={true}
          background={TouchableBackground}
          delayPressIn={0}
        >
          <View
            style={styles.page}
            ref={Platform.OS === 'android' && this.setView}
          >
            <Image
              source={{ uri }}
              style={styles.coverAll}
              resizeMode='cover'
            />
            {/* <PagesBookmark /> */}
            <View
              style={[
                styles.coverAll,
                (isCurrentPage ? styles.currentPage : {}),
              ]}
            />
          </View>
        </TouchableComponent>
      </View>
    )
  }
}

export default PagesPage