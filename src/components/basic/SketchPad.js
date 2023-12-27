import React, { useRef, useCallback, useMemo, useState, useEffect } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { i18n } from "inline-i18n"

import getSketchCode from "../../../getSketchCode"
import { postMessage } from "../../utils/postMessage"
import useNonBlurringOnPress from "../../hooks/useNonBlurringOnPress"

import WebView from "../major/WebView"
import Button from "./Button"
import ColorSwitcher, { defaultColorOptions } from "./ColorSwitcher"
import Icon from "./Icon"

const UTENSILS = [
  {
    icon: {
      name: "md-pencil",
      pack: "ion",
    },
    size: 1,
    transparency: `FF`,
  },
  {
    icon: {
      name: "pen",
      pack: "materialCommunity",
    },
    size: 4,
    transparency: `AA`,
  },
  {
    icon: {
      name: "marker",
      pack: "materialCommunity",
    },
    size: 20,
    transparency: `66`,
  },
]

const side = {
  width: 108,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginHorizontal: 5,
    flex: 1,
  },
  sketchCanvasContainer: {
    flex: 1,
  },
  buttons: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  side1: {
    ...side,
    justifyContent: "flex-end",
    marginLeft: 'auto',
  },
  side2: {
    ...side,
    justifyContent: "flex-start",
    marginRight: 'auto',
  },
  clear: {
    height: 24,
  },
  undo: {
    height: 24,
    marginHorizontal: 15,
  },
  utensil: {
    height: 24,
    marginLeft: 5,
  },
  disabled: {
    opacity: .2,
  },
})

const SketchPad = React.memo(({
  sketch,
  updateSketchInEdit,
  mode=`edit`,  // edit OR view
  onDone,
  style,
}) => {

  const webView = useRef()
  const [ sketchValueBeforeClear, setSketchValueBeforeClear ] = useState()

  let { sketchData, utensil=1, color=1 } = sketch || {}
  color = Math.max(1, Math.min(parseInt(color, 10), defaultColorOptions.length)) || 1
  utensil = Math.max(1, Math.min(parseInt(utensil, 10), UTENSILS.length)) || 1

  const undoSketchValue = useMemo(
    () => {
      try {
        const sketchObj = JSON.parse(sketchData)
        if(sketchObj.objects.length > 0) {
          sketchObj.objects.pop()
          return JSON.stringify(sketchObj)
        }
      } catch (err) {}
    },
    [ sketchData ],
  )

  const onMessageEvent = useCallback(
    async event => {
      const { identifier, sketchData } = JSON.parse(event.nativeEvent.data)
      switch(identifier) {
        case "loaded": {
          webView.current.loaded = true
          break
        }
        case "save": {
          updateSketchInEdit({ ...sketch, sketchData })
          break
        }
      }
    },
    [ updateSketchInEdit, sketch ],
  )

  const html = useMemo(() => getSketchCode({ sketchData, scale: 1 }), [])

  const clearOnPressProps = useNonBlurringOnPress(
    () => {
      if(!undoSketchValue) return
      setSketchValueBeforeClear(sketchData)
      postMessage(webView.current, 'clear')
    },
    [ undoSketchValue, sketchData, setSketchValueBeforeClear ],
  )

  const undoOnPressProps = useNonBlurringOnPress(
    () => {
      if(!undoSketchValue && !sketchValueBeforeClear) return
      postMessage(webView.current, 'load', undoSketchValue || sketchValueBeforeClear)
      setSketchValueBeforeClear()
    },
    [ undoSketchValue, sketchValueBeforeClear ],
  )

  const switchUtensilOnPressProps = useNonBlurringOnPress(
    () => updateSketchInEdit({ ...sketch, utensil: (utensil % UTENSILS.length) + 1 }),
    [ updateSketchInEdit, sketch, utensil ],
  )

  const updateColor = useCallback(
    color => updateSketchInEdit({ ...sketch, color }),
    [ updateSketchInEdit, sketch ],
  )

  useEffect(
    () => {
      const { size, transparency } = UTENSILS[utensil - 1]
      postMessage(
        webView.current,
        'set',
          {
          color: `${defaultColorOptions[color - 1]}${transparency}`, size,
        },
      )
    },
    [ color, utensil ],
  )

  const undoDisabled = !undoSketchValue && !sketchValueBeforeClear

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
        // onLoad={onLoad}
        forwardRef={webView}

        // The rest of the props are ignored when on web platform
        originWhitelist={['*']}
        mixedContentMode="always"
        bounces={false}
        injectedJavaScript={`window.isReactNativeWebView = true;`}
      />

      <View style={styles.buttons}>

        {mode === `edit` &&
          <View style={styles.side1}>

            <TouchableOpacity
              {...clearOnPressProps}
              disabled={!undoSketchValue}
            >
              <Icon
                name="close"
                style={[
                  styles.clear,
                  !undoSketchValue ? styles.disabled : null,
                ]}
              />
            </TouchableOpacity>

            <TouchableOpacity
              {...undoOnPressProps}
              disabled={undoDisabled}
            >
              <Icon
                name="undo"
                pack="material"
                style={[
                  styles.undo,
                  undoDisabled ? styles.disabled : null,
                ]}
              />
            </TouchableOpacity>

          </View>
        }

        <Button
          style={styles.button}
          onPress={onDone}
          size="small"
          status="basic"
        >
          {i18n("Done")}
        </Button>


        {mode === `edit` &&
          <View style={styles.side2}>

            <ColorSwitcher
              color={color}
              update={updateColor}
            />

            <TouchableOpacity
              {...switchUtensilOnPressProps}
            >
              <Icon
                style={styles.utensil}
                {...UTENSILS[utensil - 1].icon}
              />
            </TouchableOpacity>

          </View>
        }

      </View>


    </View>
  )
})

export default SketchPad