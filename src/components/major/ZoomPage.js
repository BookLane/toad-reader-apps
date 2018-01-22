import React from "react"
import { FileSystem } from "expo"
import { Animated, Easing, StyleSheet, Dimensions, StatusBar, PixelRatio } from "react-native"

import { getPageSize } from '../../utils/toolbox.js'

const {
  PAGE_ZOOM_MILLISECONDS,
} = Expo.Constants.manifest.extra

const styles = StyleSheet.create({
  snapshot: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
})

const getZoomOutScale = () => {
  const { width } = Dimensions.get('window')
  const { pageWidth } = getPageSize()

  return pageWidth / width
}

class ZoomPage extends React.Component {

  state = {
    scale: new Animated.Value(this.props.zoomed ? 1 : getZoomOutScale()),
  }

  componentWillReceiveProps(nextProps) {
    const { zoomed } = this.props

    if(nextProps.zoomed !== zoomed) {
      this.animate(nextProps)
    }
  }

  animate = nextProps => {
    const { zoomed } = nextProps || this.props
    const { scale } = this.state

    Animated.timing(
      scale,
      {
        toValue: zoomed ? 1 : getZoomOutScale(),
        easing: Easing.linear,
        duration: PAGE_ZOOM_MILLISECONDS,
      }
    ).start()
  }

  render() {
    const { bookId, spineIdRef, pageIndexInSpine, snapshotCoords, zoomed } = this.props
    const { scale } = this.state

    const { width, height } = Dimensions.get('window')
    const uri = `${FileSystem.documentDirectory}snapshots/${bookId}/${spineIdRef}_${pageIndexInSpine}_${width}x${height}.jpg`

    const { pageWidth, pageHeight } = getPageSize()
    const left = (snapshotCoords && snapshotCoords.x) || width - pageWidth/2
    const top = ((snapshotCoords && snapshotCoords.y) || height - pageHeight/2) + (StatusBar.currentHeight || 0)

    const zoomOutScale = getZoomOutScale()
    const easing = Easing.out(Easing.ease)

    const translateX = scale.interpolate({
      inputRange: [zoomOutScale, 1],
      easing,
      outputRange: [PixelRatio.getPixelSizeForLayoutSize(left - (width/2 - pageWidth/2)), 0],
    })

    const translateY = scale.interpolate({
      inputRange: [zoomOutScale, 1],
      easing,
      outputRange: [PixelRatio.getPixelSizeForLayoutSize(top - (height/2 - pageHeight/2)), 0],
    })
    
    
    const zoomStyles = {
      transform: [
        {
          scale,
        },
        {
          translateX,
        },
        {
          translateY,
        },
      ],
    }
      
    return (
      <Animated.Image
        source={{ uri }}
        style={[
          styles.snapshot,
          zoomStyles,
        ]}
      />
    )
  }
}

export default ZoomPage