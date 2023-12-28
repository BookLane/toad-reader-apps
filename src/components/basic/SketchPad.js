import React, { useRef, useCallback, useMemo, useState, useEffect } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { i18n } from "inline-i18n"
import { useLayout } from '@react-native-community/hooks'

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
    marginHorizontal: 20,
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
    marginLeft: -15,
    width: side.width + 15,
  },
  clear: {
    height: 24,
  },
  undo: {
    height: 24,
    marginLeft: 15,
  },
  utensil: {
    height: 24,
    marginLeft: 5,
  },
  disabled: {
    opacity: .2,
  },
  spacer: {
    width: 1,
    height: 30,
    backgroundColor: `rgb(200, 200, 200)`,
    marginHorizontal: 30,
  },
})

const SketchPad = React.memo(({
  sketch,
  updateSketchInEdit,
  mode=`edit`,  // edit OR view
  onDone,
  doneButtonLabel,
  backgroundImage,
  style,
}) => {

  const webView = useRef()
  const { onLayout, width, height } = useLayout()
  const [ sketchValueBeforeClear, setSketchValueBeforeClear ] = useState()

  let { sketchData, utensil=1, color=1, canvasWidth, canvasHeight } = sketch || {}
  color = Math.max(1, Math.min(parseInt(color, 10), defaultColorOptions.length)) || 1
  utensil = Math.max(1, Math.min(parseInt(utensil, 10), UTENSILS.length)) || 1
  let scale = 1

//   useMemo(
//     () => {
//       if(!width) return

//       let sketchObj = {}
//       try {
//         sketchObj = JSON.parse(sketchData) || {}
//       } catch (err) {}

// console.log('ready...')
//       if(!canvasWidth || sketchObj.objects.length === 0) {
// console.log('>>>1')
//         canvasWidth = width
//         canvasHeight = height
//         scale = 1

//       } else if(width > canvasWidth || height > canvasHeight) {
// console.log('>>>2')
//         scale = 1
//         // move to middle
//         sketchObj.objects.forEach(obj => {
//           obj.left += Math.max(width - canvasWidth, 0) / 2
//           obj.top += Math.max(height - canvasHeight, 0) / 2
//         })
//         sketchData = JSON.stringify(sketchObj)

//       } else if(width < canvasWidth || height < canvasHeight) {
//         // set scale based on bigger difference (w vs h)
//         const horizontalReduction = canvasWidth / width
//         const verticalReduction = canvasHeight / height
//         scale = Math.max(horizontalReduction, verticalReduction)
// console.log('>>>3', width, canvasWidth, horizontalReduction, height, canvasHeight, verticalReduction)
//         // for other direction, move to middle
//         // sketchObj.objects.forEach(obj => {
//         //   obj.left += Math.max(width - canvasWidth / scale, 0) / 2
//         //   obj.top += Math.max(height - canvasHeight, 0) / 2
//         // })
//         // sketchData = JSON.stringify(sketchObj)
//       }

//     },
//     [ !width ],
//   )

  const hasUndo = useMemo(
    () => {
      try {
        const sketchObj = JSON.parse(sketchData)
        return sketchObj.objects.length > 0
      } catch (err) {}
      return false
    },
    [ sketchData ],
  )

  const goUpdateSketchInEdit = useCallback(
    update => {
      updateSketchInEdit({
        sketchData,
        utensil,
        color,
        canvasWidth,
        canvasHeight,
        ...update,
      })
    },
    [ sketchData, utensil, color, canvasWidth, canvasHeight ],
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
          goUpdateSketchInEdit({ sketchData })
          break
        }
      }
    },
    [ goUpdateSketchInEdit ],
  )

  const html = useMemo(() => getSketchCode({ sketchData, scale, mode, backgroundImage }), [ scale ])

  const clearOnPressProps = useNonBlurringOnPress(
    () => {
      if(!hasUndo) return
      setSketchValueBeforeClear(sketchData)
      postMessage(webView.current, 'clear')
    },
    [ hasUndo, sketchData, setSketchValueBeforeClear ],
  )

  const undoOnPressProps = useNonBlurringOnPress(
    () => {
      if(hasUndo) {
        postMessage(webView.current, 'undo')
      } else if(sketchValueBeforeClear) {
        postMessage(webView.current, 'load', sketchValueBeforeClear)
      }
      setSketchValueBeforeClear()
    },
    [ hasUndo, sketchValueBeforeClear ],
  )

  const switchUtensilOnPressProps = useNonBlurringOnPress(
    () => goUpdateSketchInEdit({ utensil: (utensil % UTENSILS.length) + 1 }),
    [ goUpdateSketchInEdit, utensil ],
  )

  const updateColor = useCallback(
    color => goUpdateSketchInEdit({ color }),
    [ goUpdateSketchInEdit ],
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

  const undoDisabled = !hasUndo && !sketchValueBeforeClear

  return (
    <View
      style={[
        styles.container,
        style,
      ]}
      onLayout={onLayout}
    >

      {!!scale &&
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
      }

      <View style={styles.buttons}>

        {mode === `edit` &&
          <View style={styles.side1}>

            <TouchableOpacity
              {...clearOnPressProps}
              disabled={!hasUndo}
            >
              <Icon
                name="trash"
                style={[
                  styles.clear,
                  !hasUndo ? styles.disabled : null,
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

        {!!onDone &&
          <Button
            style={styles.button}
            onPress={onDone}
            size="small"
            status="basic"
          >
            {doneButtonLabel || i18n("Done")}
          </Button>
        }

        {!onDone &&
          <View style={styles.spacer} />
        }

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