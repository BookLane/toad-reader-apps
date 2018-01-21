import React from "react"
import { Animated } from "react-native"
import { StyleSheet } from "react-native"

import { getPageSize } from '../../utils/toolbox.js'

const styles = StyleSheet.create({
  snapshot: {
    position: 'absolute',
    backgroundColor: 'white',
  },
})

class ZoomPage extends React.Component {

  state = {
    zoomFactor: new Animated.Value(1),
  }

  componentDidMount() {
    // Animated.timing(
    //   zoomFactor,
    //   {
    //     toValue: 3,
    //     duration: 3000,
    //   }
    // ).start()
  
  }

  componentWillReceiveProps(nextProps) {
    const { bookId, spineIdRef, pageIndexInSpine, zoomed } = this.props

  }

  render() {
    const { bookId, spineIdRef, pageIndexInSpine, snapshotCoords, zoomed } = this.props
    const { zoomFactor } = this.state

    const { width, height } = Dimensions.get('window')
    const uri = `${FileSystem.documentDirectory}snapshots/${bookId}/${spineIdRef}_${pageIndexInSpine}_${width}x${height}.jpg`
    
    const zoomStyles = {
      top: 0,
      left: 0,
      width: 100,
      height: 300,
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
        style={styles.image}
        // resizeMode='cover'
      />
    )
  }
}

export default ZoomPage