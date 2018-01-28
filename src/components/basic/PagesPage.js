import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, Platform, TouchableHighlight, TouchableNativeFeedback, Image, Dimensions, View } from "react-native"
import { FileSystem } from "expo"

import PagesBookmark from "./PagesBookmark"

import { getSnapshotURI } from '../../utils/toolbox.js'

import { setLatestLocation } from "../../redux/actions.js"

const {
  CURRENT_PAGE_BORDER_COLOR,
  CURRENT_PAGE_BORDER_WIDTH,
} = Expo.Constants.manifest.extra

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
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

class PagesPage extends React.Component {

  goToPage = () => {
    const { setLatestLocation, bookId, spineIdRef, cfi, zoomToPage } = this.props

    setLatestLocation({
      bookId,
      latestLocation: {
        spineIdRef,
        cfi,
      },
    })

    this.view.measureInWindow((x, y) => zoomToPage({ x, y }))
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
      >
        <TouchableComponent
          onPress={this.goToPage}
          useForeground={true}
          background={TouchableBackground}
          delayPressIn={0}
        >
          <View
            style={styles.page}
            ref={this.setView}
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

const mapStateToProps = (state) => ({
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setLatestLocation,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(PagesPage)