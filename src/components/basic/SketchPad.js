import React, { useRef, useCallback, useMemo } from "react"
import { StyleSheet, View } from "react-native"
import { i18n } from "inline-i18n"

import WebView from "../major/WebView"
import getSketchCode from "../../../getSketchCode"
import Button from "./Button"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    // margin: 100,
  },
  sketchCanvasContainer: {
    flex: 1,
  },
})

const SketchPad = React.memo(({
  initialSketch,
  updateSketchInEdit,
  mode=`edit`,  // edit OR view
  onDone,
  style,
}) => {

  const webView = useRef()

  const onMessageEvent = useCallback(
    async event => {
      const data = JSON.parse(event.nativeEvent.data)
      updateSketchInEdit(data.sketch)
    },
    [ updateSketchInEdit ],
  )

  const html = useMemo(() => getSketchCode({ sketch: initialSketch, scale: 3 }), [])

  return (
    <View
      style={[
        styles.container,
        style,
      ]}
    >
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
        onPress={onDone}
      >
        {i18n("Done")}
      </Button>
    </View>
  )
})

export default SketchPad