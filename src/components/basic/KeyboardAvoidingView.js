import React, { useEffect, useRef, useState } from "react"
import { Platform, StyleSheet, KeyboardAvoidingView as RNKeyboardAvoidingView } from "react-native"
import { ScreenOrientation } from "expo"
import useCounter from 'react-use/lib/useCounter'

import { bottomSpace, statusBarHeight } from '../../utils/toolbox'
import useWideMode from "../../hooks/useWideMode"

const styles = StyleSheet.create({
  view: {
    ...StyleSheet.absoluteFillObject,
  },
})

const KeyboardAvoidingView = ({
  children,
  style,
  ...otherProps
}) => {

  const ref = useRef()
  const [ yOffset, setYOffset ] = useState(0)
  const [ orientationChangeIdx, { inc: incrementOrientationChangeIdx } ] = useCounter(0)
  const wideModeWithEitherOrientation = useWideMode(true)

  useEffect(
    () => {
      // Note: This works on the assumption that this elements y position will not change after it is constructed.
      setTimeout(() => {
        try {
          ref.current.viewRef.current.measure(
            (x, y, w, h, pageX, pageY) => {
              setYOffset(pageY - bottomSpace + (Platform.OS === 'android' ? statusBarHeight : 0))
            }
          )
        } catch(e) {}
      })
    },
    [],
  )

  // This is a hacky fix to a bug whereby changing the orientation lock to portrait and then back
  // causes the keyboard avoiding view height to be messed up for android.
  useEffect(
    () => {
      if(Platform.OS === 'android' && !wideModeWithEitherOrientation) {

        const orientationChangeSubscription = ScreenOrientation.addOrientationChangeListener(({ orientationLock }) => {
          if(orientationLock === ScreenOrientation.OrientationLock.PORTRAIT_UP) {
            incrementOrientationChangeIdx()
          }
        })

        return () => {
          ScreenOrientation.removeOrientationChangeListener(orientationChangeSubscription)
        }

      }
    },
    [ wideModeWithEitherOrientation ],
  )

  return (
    <RNKeyboardAvoidingView
      key={orientationChangeIdx}
      ref={ref}
      style={[
        styles.view,
        style,
      ]}
      behavior={Platform.select({ android: 'height', ios: 'padding' })}
      keyboardVerticalOffset={yOffset}
      enabled={!(Platform.OS === 'android' && __DEV__)}
      {...otherProps}
    >
      {children}
    </RNKeyboardAvoidingView>
  )
}

export default KeyboardAvoidingView