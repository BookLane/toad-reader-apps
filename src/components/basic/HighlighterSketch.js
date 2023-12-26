import React, { useRef, useCallback, useMemo } from "react"
import { StyleSheet, View } from "react-native"
// import { i18n } from "inline-i18n"

import WebView from "../major/WebView"
import getSketchCode from "../../../getSketchCode"
import Button from "./Button"

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
  button: {
    // margin: 100,
  },
  sketchCanvasContainer: {
    flex: 1,
  },
})

const HighlighterSketch = React.memo(({
  sketch,
  updateSketchInEdit,
  setEditingSketch,
  isEditingSketch,
}) => {

  const webView = useRef()

  const onMessageEvent = useCallback(
    async event => {
      const data = JSON.parse(event.nativeEvent.data)
      updateSketchInEdit(data.sketch)
    },
    [ updateSketchInEdit ],
  )

  const html = useMemo(() => getSketchCode({ sketch, scale: 3 }), [])

  return (
    <View style={styles.container}>
      <WebView
        style={styles.sketchCanvasContainer}
        source={{ html }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onMessage={onMessageEvent}
        // onError={onError}
        // onLoad={setRenderedOnceTrue}
        forwardRef={webView}

        // The rest of the props are ignored when on web platform
        originWhitelist={['*']}
        mixedContentMode="always"
        bounces={false}
        injectedJavaScript={`window.isReactNativeWebView = true;`}
      />
      <Button
        style={styles.button}
        onPress={() => setEditingSketch(false)}
      >
        Done
      </Button>
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