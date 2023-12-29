import React, { useRef, useCallback, useMemo, useState, useEffect } from "react"
import { StyleSheet, TouchableOpacity, View, Platform } from "react-native"
import { i18n } from "inline-i18n"
import { useLayout } from '@react-native-community/hooks'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import getSketchCode from "../../../getSketchCode"
import { postMessage } from "../../utils/postMessage"
import useNonBlurringOnPress from "../../hooks/useNonBlurringOnPress"

import WebView from "../major/WebView"
import Button from "./Button"
import ColorSwitcher, { defaultColorOptions } from "./ColorSwitcher"
import Icon from "./Icon"

const HEIGHT_OF_CONTROLS = 60

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
  sketchCanvasContainerBottomSpace: {
    marginBottom: HEIGHT_OF_CONTROLS,
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
  let { onLayout, width, height } = useLayout()
  const [ sketchValueBeforeClear, setSketchValueBeforeClear ] = useState()
  const safeAreaInsets = useSafeAreaInsets()

  let { sketchData, utensil=1, color=1, canvasWidth, canvasHeight, bgScale } = sketch || {}
  color = Math.max(1, Math.min(parseInt(color, 10), defaultColorOptions.length)) || 1
  utensil = Math.max(1, Math.min(parseInt(utensil, 10), UTENSILS.length)) || 1
  const scale = useRef()
  const scaleAdjustment = useRef(1)
  const prevBgScale = useRef()
  const newSketchInfo = useRef({ canvasWidth, canvasHeight })

  useMemo(
    () => {
      if(!width) return
      if(scale.current) return

      if(backgroundImage) {
        height -= HEIGHT_OF_CONTROLS
      }

      let sketchObj = {}
      try {
        sketchObj = JSON.parse(sketchData) || {}
      } catch (err) {}

      if(!canvasWidth || sketchObj.objects.length === 0) {
        scale.current = 1
        newSketchInfo.current = {
          canvasWidth: width,
          canvasHeight: height,
        }

      } else {
        // set scale based on bigger difference (w vs h)
        const horizontalScale = width / canvasWidth
        const verticalScale = height / canvasHeight
        scale.current = Math.min(horizontalScale, verticalScale)
        const leftAdjustment = scale.current === verticalScale ? (((width / scale.current) - canvasWidth) / 2) : 0
        const topAdjustment = scale.current !== verticalScale ? (((height / scale.current) - canvasHeight) / 2) : 0
        sketchObj.objects.forEach(obj => {
          obj.left += leftAdjustment
          obj.top += topAdjustment
        })
        if(scale.current === verticalScale) {
          newSketchInfo.current = {
            canvasWidth: canvasWidth + leftAdjustment * 2
          }
        } else {
          newSketchInfo.current = {
            canvasHeight: canvasHeight + topAdjustment * 2
          }
        }
        sketchData = JSON.stringify(sketchObj)
        prevBgScale.current = bgScale

      }

      // figure out what further device-specific scale needs to be
      const minScale = {
        android: 2,
        ios: 1,
        web: 1,
      }[Platform.OS]

      if(scale.current < minScale) {
        scaleAdjustment.current = scale.current / minScale
        scale.current = minScale

        sketchObj.objects.forEach(obj => {
          obj.strokeWidth *= scaleAdjustment.current
          obj.left *= scaleAdjustment.current
          obj.top *= scaleAdjustment.current
          obj.width *= scaleAdjustment.current
          obj.height *= scaleAdjustment.current
          obj.path = obj.path.map(step => step.map(num => typeof num === 'number' ? num * scaleAdjustment.current : num))
        })
        sketchData = JSON.stringify(sketchObj)
        prevBgScale.current = (prevBgScale.current || 1) * scaleAdjustment.current
      }

    },
    [ !width ],
  )

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
        bgScale,
        ...update,
      })
    },
    [ sketchData, utensil, color, canvasWidth, canvasHeight, bgScale ],
  )

  const onMessageEvent = useCallback(
    async event => {
      let { identifier, sketchData, bgScale } = JSON.parse(event.nativeEvent.data)
      switch(identifier) {
        case "loaded": {
          webView.current.loaded = true
          break
        }
        case "save": {
          if(scaleAdjustment.current !== 1) {
            const sketchObj = JSON.parse(sketchData) || {}
            sketchObj.objects.forEach(obj => {
              obj.strokeWidth /= scaleAdjustment.current
              obj.left /= scaleAdjustment.current
              obj.top /= scaleAdjustment.current
              obj.width /= scaleAdjustment.current
              obj.height /= scaleAdjustment.current
              obj.path = obj.path.map(step => step.map(num => typeof num === 'number' ? num / scaleAdjustment.current : num))
            })
            sketchData = JSON.stringify(sketchObj)
            bgScale /= scaleAdjustment.current
          }
  
          goUpdateSketchInEdit({
            sketchData,
            bgScale,
            ...newSketchInfo.current,
          })
          break
        }
      }
    },
    [ goUpdateSketchInEdit ],
  )

  const html = useMemo(() => getSketchCode({ sketchData, scale: scale.current, scaleAdjustment: scaleAdjustment.current, prevBgScale: prevBgScale.current, mode, backgroundImage }), [ scale.current ])

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

  const setColorAndUtensil = useCallback(
    () => {
      const { size, transparency } = UTENSILS[utensil - 1]
      postMessage(
        webView.current,
        'set',
        {
          color: `${defaultColorOptions[color - 1]}${transparency}`,
          size,
        },
      )
    },
    [ color, utensil ],
  )

  useEffect(setColorAndUtensil, [ color, utensil ])

  const undoDisabled = !hasUndo && !sketchValueBeforeClear

  return (
    <View
      style={[
        styles.container,
        style,
        {
          marginBottom: safeAreaInsets.bottom,
        },
      ]}
      onLayout={onLayout}
    >

      {!!scale.current &&
        <WebView
          style={[
            styles.sketchCanvasContainer,
            backgroundImage ? styles.sketchCanvasContainerBottomSpace : null,
          ]}
          source={{ html }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onMessage={onMessageEvent}
          // onError={onError}
          onLoad={setColorAndUtensil}
          forwardRef={webView}
          onStartShouldSetResponderCapture={() => true}
          onResponderTerminationRequest={() => false}

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