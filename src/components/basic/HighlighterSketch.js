import React, { useCallback } from "react"
import { StyleSheet, View } from "react-native"
// import { i18n } from "inline-i18n"

import SketchPad from "./SketchPad"

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    // backgroundColor: 'white',
    zIndex: 5,
  },
})

const HighlighterSketch = React.memo(({
  sketch,
  updateSketchInEdit,
  setEditingSketch,
}) => {

  const onDone = useCallback(() => setEditingSketch(false), [ setEditingSketch ])

  return (
    <View style={styles.container}>
      <SketchPad
        sketch={sketch}
        updateSketchInEdit={updateSketchInEdit}
        onDone={onDone}
      />
    </View>
  )
})

export default HighlighterSketch

// HERE: Save canvas size
  // on size of container
    // if no size set or no objects, save size
      // then set scale to 1
    // else 
      // if bigger canvas now available
        // set scale to 1
        // move to middle
      // if smaller canvas now available
        // set scale based on bigger difference (w vs h)
        // for other direction, move to middle
// Performance scaling
  // Have max dimension for each platform
    // if max(width, height) / scale is too big...
      // figure out what scale needs to be and the factor difference
      // reduce by that factor...
        // strokeWidth
        // left
        // top
        // width
        // height
        // path values
      // only save if something has changed!
// Make an interactive tool
// Allow tool to have bg image
// Allow tool to require tablet size

// do "Feature 1" (limitation on # logged in devices)

// Extras
  // including sketch in a highlight share page
  // instructor able to share sketch