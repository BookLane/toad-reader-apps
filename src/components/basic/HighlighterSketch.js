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

  // Create sketch column for highlights table
  // Update backend to allow this
  // Save data ({} save as null)
  // Push out server
  // test on natives
  // android: slow (see Optimizing performance tab)
  // Give tenants an opt-in opt-out option
  // commit
  // Fix pressing button on web-touch
  // Make sketch component that can be used for highlights and interactive tools 
// Add utensil + color options
// Save last utensil and color for that drawing
// Save canvas size
  // on open
    // if bigger canvas now available
      //
    // if smaller canvas now available
      //
// When viewing a highlight, visually indicate whether it has a sketch or not
// Viewable from Highlights
// Make an interactive tool
// Allow tool to have bg image
// Allow tool to require tablet size

// do "Feature 1" (limitation on # logged in devices)

// Extras
  // including sketch in a highlight share page
  // instructor able to share sketch