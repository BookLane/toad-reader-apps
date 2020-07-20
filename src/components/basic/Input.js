import React, { useCallback } from "react"
import { StyleSheet, Platform } from "react-native"
import { Input as UIKittenInput } from "@ui-kitten/components"

const styles = StyleSheet.create({
  inputText: {
    ...(Platform.OS !== 'web' ? {} : { outlineWidth: 0 }),
  },
})

const onStartShouldSetResponder = () => true
const onResponderTerminationRequest = ({ nativeEvent }) => !/^mouse/.test(nativeEvent.type)

const Input = React.memo(({
  id,
  info,
  onChangeText,
  onChangeInfo,
  style,
  textStyle,
  labelStyle,
  forwardRef,
  ...otherProps
 }) => {

  const customOnChangeText = useCallback(
    value => {
      onChangeText && onChangeText(value)
      onChangeInfo && onChangeInfo({ id, value, info })
    },
    [ id, info, onChangeText, onChangeInfo ],
  )

  return (
    <UIKittenInput
      onStartShouldSetResponder={onStartShouldSetResponder}
      onResponderTerminationRequest={onResponderTerminationRequest}
      {...otherProps}
      style={[
        styles.input,
        style,
      ]}
      textStyle={[
        styles.inputText,
        textStyle,
      ]}
      labelStyle={[
        styles.inputLabel,
        labelStyle,
      ]}
      onChangeText={customOnChangeText}
      ref={forwardRef}
    />
  )
})

export default Input