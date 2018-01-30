import React from "react"
import { FileSystem } from "expo"
import { Animated, Easing, StyleSheet, Dimensions, StatusBar, PixelRatio, Platform } from "react-native"

import { getPageSize, getSnapshotURI } from '../../utils/toolbox.js'

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
    const { snapshotCoords } = this.props
    const { scale } = this.state

    const uri = getSnapshotURI(this.props)

    let outputRangeX = 1
    let outputRangeY = 1

    if(snapshotCoords) {
      const left = snapshotCoords.x
      const top = snapshotCoords.y + (StatusBar.currentHeight || 0)
      const { width, height } = Dimensions.get('window')
      const { pageWidth, pageHeight } = getPageSize({ width, height })
      const osTranslateFactor = Platform.OS === 'android' ? 1 : 2 // not sure why iOS needs this, but it does
  
      outputRangeX = PixelRatio.getPixelSizeForLayoutSize(left - (width/2 - pageWidth/2)) * osTranslateFactor
      outputRangeY = PixelRatio.getPixelSizeForLayoutSize(top - (height/2 - pageHeight/2)) * osTranslateFactor
    }

    const zoomOutScale = getZoomOutScale()
    const easing = Easing.out(Easing.ease)

    const translateX = scale.interpolate({
      inputRange: [zoomOutScale, 1],
      easing,
      outputRange: [outputRangeX, 0],
    })

    const translateY = scale.interpolate({
      inputRange: [zoomOutScale, 1],
      easing,
      outputRange: [outputRangeY, 0],
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