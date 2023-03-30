import React, { useRef, useCallback } from "react"
import Constants from 'expo-constants'
import { StyleSheet, Platform, TouchableHighlight, TouchableNativeFeedback, Image, View } from "react-native"

// import PagesBookmark from "./PagesBookmark"
import CapturingThumbnailsInfoIcon from "./CapturingThumbnailsInfoIcon"

import { getSnapshotURI, statusBarHeight } from '../../utils/toolbox'
import useSetTimeout from '../../hooks/useSetTimeout'

const {
  CURRENT_PAGE_BORDER_COLOR,
  CURRENT_PAGE_BORDER_WIDTH,
  PAGES_HORIZONTAL_MARGIN,
} = Constants.expoConfig.extra

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

const PagesPage = React.memo(({
  bookId,
  spineIdRef,
  cfi,
  pageIndexInSpine,
  pageCfisKey,
  // delayPageChangeScroll,
  zoomToPage,
  pageWidth,
  pageHeight,
  isCurrentPage,
  indicateMultiplePages,
  inEditMode,
}) => {

  const [ setDoubleTapTimeout ] = useSetTimeout()

  const preventDoubleTap = useRef(false)
  const view = useRef(null)

  const goToPage = useCallback(
    () => {
      if(preventDoubleTap.current) return

      // delayPageChangeScroll({
      //   bookId,
      //   spineIdRef,
      //   pageIndexInSpine,
      // })

      preventDoubleTap.current = true

      view.current.measureInWindow((x, y) => zoomToPage({
        zoomToInfo: {
          spineIdRef,
          cfi,
          pageIndexInSpine,
        },
        snapshotCoords: {
          x,
          y: y + (Platform.OS === 'android' ? statusBarHeight : 0),
        },
      }))

      setDoubleTapTimeout(() => preventDoubleTap.current = false, 1000)
    },
    [ bookId, spineIdRef, cfi, pageIndexInSpine, zoomToPage ],
  )

  const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight
  const TouchableBackground = Platform.OS === 'android' ? TouchableNativeFeedback.Ripple('#999', false) : null

  const uri = getSnapshotURI({ bookId, spineIdRef, pageIndexInSpine, pageCfisKey })

  return (
    <View
      style={[
        styles.container,
        (indicateMultiplePages ? { flex: 1 } : {}),
      ]}
      ref={Platform.OS !== 'android' ? view : null}
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
        onPress={goToPage}
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
          ref={Platform.OS === 'android' ? view : null}
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
        <CapturingThumbnailsInfoIcon
          inEditMode={inEditMode}
        />
      }
    </View>
  )
})

export default PagesPage