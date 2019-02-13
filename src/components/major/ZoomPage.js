import React from "react"
import { Constants } from "expo"
import { Animated, Easing, StyleSheet, Dimensions, StatusBar } from "react-native"

import { getPageSize, getSnapshotURI } from '../../utils/toolbox.js'

const {
  PAGE_ZOOM_MILLISECONDS,
} = Constants.manifest.extra

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

  constructor(props) {
    super(props)

    this.scale = new Animated.Value(this.props.zoomed ? 1 : getZoomOutScale())
    this.opacity = new Animated.Value(1)
    this.setUpInterpolatedValues(props)
  }

  componentWillReceiveProps(nextProps) {
    const { snapshotCoords, zoomed } = this.props

    if(JSON.stringify(nextProps.snapshotCoords) !== JSON.stringify(snapshotCoords)) {
      this.setUpInterpolatedValues(nextProps)
    }

    if(nextProps.zoomed !== zoomed) {
      requestAnimationFrame(() => this.animate(nextProps))
    }
  }

  shouldComponentUpdate(nextProps) {
    return [ 'bookId', 'spineIdRef', 'pageCfisKey', 'pageIndexInSpine', 'snapshotCoords' ].some(key => (
      nextProps[key] !== this.props[key]
    ))
  }

  setUpInterpolatedValues = nextProps => {
    const { snapshotCoords } = nextProps || this.props

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

    this.translateX = this.scale.interpolate({
      inputRange: [zoomOutScale, 1],
      outputRange: [outputRangeX, 0],
    })

    this.translateY = this.scale.interpolate({
      inputRange: [zoomOutScale, 1],
      outputRange: [outputRangeY, 0],
    })
  }

  animate = nextProps => {
    const { zoomed, zoomingEnabled, onZoomCompletion } = nextProps || this.props

    if(zoomed || !zoomingEnabled) {
      Animated.timing(
        this.scale,
        {
          toValue: 1,
          // easing: Easing.linear,
          easing: Easing.inOut(Easing.cubic),
          duration: zoomingEnabled ? PAGE_ZOOM_MILLISECONDS : 0,
        }
      ).start(onZoomCompletion)
  
    } else {
      Animated.sequence([
        Animated.timing(
          this.scale,
          {
            toValue: getZoomOutScale(),
            easing: Easing.inOut(Easing.cubic),
            duration: PAGE_ZOOM_MILLISECONDS,
          }
        ),
        Animated.timing(
          this.opacity,
          {
            toValue: 0,
            easing: Easing.linear,
            duration: PAGE_ZOOM_MILLISECONDS / 4,
          }
        )
      ]).start(onZoomCompletion)

      requestAnimationFrame(() => {
        this.opacity = new Animated.Value(1)
      })
  
    }
  }

  render() {
    const { snapshotCoords, pageCfiKnown } = this.props
    const { translateX, translateY, scale, opacity } = this

    const uri = getSnapshotURI(this.props)

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
      opacity,
    }
      
    return (
      <Animated.View
        style={[
          styles.snapshotCont,
          zoomStyles1,
        ]}
      >
        <Animated.Image
          source={{ uri: pageCfiKnown ? uri : undefined }}
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