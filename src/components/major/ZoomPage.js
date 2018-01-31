import React from "react"
import { FileSystem } from "expo"
import { Animated, Easing, StyleSheet, Dimensions, StatusBar, PixelRatio, Platform } from "react-native"

import { getPageSize, getSnapshotURI } from '../../utils/toolbox.js'

const {
  PAGE_ZOOM_MILLISECONDS,
} = Expo.Constants.manifest.extra

const styles = StyleSheet.create({
  snapshotCont: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
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
      requestAnimationFrame(() => this.animate(nextProps))
    }
  }

  animate = nextProps => {
    const { zoomed, zoomingEnabled, onZoomCompletion } = nextProps || this.props
    const { scale } = this.state

    Animated.timing(
      scale,
      {
        toValue: zoomed ? 1 : getZoomOutScale(),
        // easing: Easing.linear,
        easing: Easing.inOut(Easing.cubic),
        duration: zoomingEnabled ? PAGE_ZOOM_MILLISECONDS : 0,
      }
    ).start(onZoomCompletion)
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

      outputRangeX = left - (width/2 - pageWidth/2)
      outputRangeY = top - (height/2 - pageHeight/2)
    }

    const zoomOutScale = getZoomOutScale()

    const translateX = scale.interpolate({
      inputRange: [zoomOutScale, 1],
      outputRange: [outputRangeX, 0],
    })

    const translateY = scale.interpolate({
      inputRange: [zoomOutScale, 1],
      outputRange: [outputRangeY, 0],
    })
    
    
    const zoomStyles1 = {
      transform: [
        {
          translateX,
        },
        {
          translateY,
        },
      ],
    }

    const zoomStyles2 = {
      transform: [
        {
          scale,
        },
      ],
    }
      
    return (
      <Animated.View
        style={[
          styles.snapshotCont,
          zoomStyles1,
        ]}
      >
        <Animated.Image
          source={{ uri }}
          style={[
            styles.snapshot,
            zoomStyles2,
          ]}
        />
      </Animated.View>
    )
  }
}

export default ZoomPage