import React, { useEffect, useRef, useState } from "react"
import { Platform, StyleSheet, KeyboardAvoidingView as RNKeyboardAvoidingView } from "react-native"

import { bottomSpace, statusBarHeight } from '../../utils/toolbox'

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

  return (
    <RNKeyboardAvoidingView
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