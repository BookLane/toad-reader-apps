import React from "react"
import { FileSystem } from "expo"
import { Animated, StyleSheet, Dimensions, StatusBar } from "react-native"

import { getPageSize } from '../../utils/toolbox.js'

const {
  PAGE_ZOOM_MILLISECONDS,
} = Expo.Constants.manifest.extra

const styles = StyleSheet.create({
  snapshot: {
    position: 'absolute',
    backgroundColor: 'white',
  },
})

const getZoomInFactor = () => {
  const { width } = Dimensions.get('window')
  const { pageWidth } = getPageSize()

  return width / pageWidth
}

class ZoomPage extends React.Component {

  state = {
    zoomFactor: new Animated.Value(this.props.zoomed ? getZoomInFactor() : 1),
  }

  componentWillReceiveProps(nextProps) {
    const { zoomed } = this.props

    if(nextProps.zoomed !== zoomed) {
      this.animate(nextProps)
    }
  }

  animate = nextProps => {
    const { zoomed } = nextProps || this.props
    const { zoomFactor } = this.state

    Animated.timing(
      zoomFactor,
      {
        toValue: zoomed ? getZoomInFactor() : 1,
        duration: PAGE_ZOOM_MILLISECONDS,
      }
    ).start()
  }

  render() {
    const { bookId, spineIdRef, pageIndexInSpine, snapshotCoords, zoomed } = this.props
    const { zoomFactor } = this.state

    const { width, height } = Dimensions.get('window')
    const uri = `${FileSystem.documentDirectory}snapshots/${bookId}/${spineIdRef}_${pageIndexInSpine}_${width}x${height}.jpg`

    const { pageWidth, pageHeight } = getPageSize()
    const left = (snapshotCoords && snapshotCoords.x) || width - pageWidth/2
    const top = ((snapshotCoords && snapshotCoords.y) || height - pageHeight/2) + (StatusBar.currentHeight || 0)
    
    const zoomStyles = {
      top,
      left,
      width: pageWidth,
      height: pageHeight,
      transform: [
        {
          scaleX: zoomFactor,
        },
        {
          scaleY: zoomFactor,
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
        // style={styles.image}
        // resizeMode='cover'
      />
    )
  }
}

export default ZoomPage