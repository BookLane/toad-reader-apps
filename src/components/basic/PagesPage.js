import React from "react"
import Constants from 'expo-constants'
import { StyleSheet, Platform, TouchableHighlight, TouchableNativeFeedback, Image, View } from "react-native"

import PagesBookmark from "./PagesBookmark"
import CapturingThumbnailsInfoIcon from "./CapturingThumbnailsInfoIcon"

import { getSnapshotURI, setUpTimeout, unmountTimeouts } from '../../utils/toolbox.js'

const {
  CURRENT_PAGE_BORDER_COLOR,
  CURRENT_PAGE_BORDER_WIDTH,
  PAGES_HORIZONTAL_MARGIN,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  container: {
    marginRight: PAGES_HORIZONTAL_MARGIN,
    flexDirection: 'row',
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
  shadowPage: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
    position: 'absolute',
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

  componentWillUnmount = unmountTimeouts

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

    setUpTimeout(() => delete this.preventDoubleTap, 1000, this)
  }

  setView = ref => this.view = ref

  render() {
    const { pageWidth, pageHeight, isCurrentPage, indicateMultiplePages } = this.props

    const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight
    const TouchableBackground = Platform.OS === 'android' ? TouchableNativeFeedback.Ripple('#999', false) : null

    const uri = getSnapshotURI(this.props)

    return (
      <View
        style={[
          styles.container,
          (indicateMultiplePages ? { flex: 1 } : {}),
        ]}
        ref={Platform.OS !== 'android' && this.setView}
      >
        {(indicateMultiplePages ? [4,3,2,1] : []).map(offsetLevel => {
          const shrinkPercentage = (pageWidth - offsetLevel*3) / pageWidth
          return <View
            style={[
              styles.shadowPage,
              {
                width: pageWidth * shrinkPercentage,
                height: pageHeight * shrinkPercentage,
                left: offsetLevel * 14 + (pageWidth - pageWidth * shrinkPercentage),
                top: (pageHeight - pageHeight * shrinkPercentage) / 2,
                opacity: .5 - offsetLevel * .07,
              },
            ]}
            key={offsetLevel}
          />
        })}
        <TouchableComponent
          onPress={this.goToPage}
          useForeground={true}
          background={TouchableBackground}
          delayPressIn={0}
        >
          <View
            style={[
              styles.page,
              {
                width: pageWidth,
                height: pageHeight,
              },
            ]}
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
        {!!indicateMultiplePages &&
          <CapturingThumbnailsInfoIcon />
        }
      </View>
    )
  }
}

export default PagesPage